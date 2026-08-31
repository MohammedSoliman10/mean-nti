var store = (function(){
  var products = [
    { id: 1, name: "Laptop",    price: 18500, category: "Electronics", quantity: 4 },
    { id: 2, name: "Mouse", price: 180,  category: "Electronics", quantity: 25 },
    { id: 3, name: "Notebook",  price: 35, category: "Stationery",  quantity: 100 },
    { id: 4, name: 'Desk Lamp', price:420,category:"Home", quantity: 0 },
  ];

  function makeidgen(start){
    var curr = start;
      return function(){
      curr = curr + 1;
      return curr;
    }
  }
  var getnextid = makeidgen(4);

  function createproduct(name , price, category,quantity) {
    if(quantity == undefined){
        quantity = 1;
    }

      if (typeof name != "string" || name.trim() == "") {
      return "Error: name is required";
    }

    name = name.trim();

  var numprice = parseFloat(price);
    if (isNaN(numprice) || numprice <= 0) {
          return "Error: price must be a number greater than 0";
    }

      var numqty = Number(quantity);
    if (isNaN(numqty) || numqty < 0 || Math.floor(numqty) != numqty) {
      return "Error: quantity must be an integer >= 0";
    }

    var dup = products.some(function(p){
      return p.name.toLowerCase() == name.toLowerCase();
    });
    if (dup) return "Error: product name already exists";

    var newproduct = {
      id: getnextid(),
          name: name,
      price: numprice,
      category: category,
        quantity: numqty,
    };

      products.push(newproduct);
    return newproduct;
  }


  function getallproducts(){
      return products;
  }



  function printproducts(list) {
  console.table(list);
  }


  function getproductbyid(id) {
    for (var i=0;i<products.length;i++) {
        if (products[i].id == id) {
      return products[i];
        }
    }
      return null;
  }


  function updateproduct(id, name, price, category, quantity) {
    var product = getproductbyid(id);
      if (!product) {
      return "Error: product not found";
    }

      if (name && name.trim() != "") {
      product.name = name.trim();
    }
    if(price && price.trim() != ""){
        var p = parseFloat(price);
      if (!isNaN(p) && p > 0) {
          product.price = p;
      }
    }
      if (category && category.trim() != "") {
      product.category = category.trim();
    }
    if (quantity && quantity.trim() != "") {
          var q = Number(quantity);
      if (!isNaN(q) && q >= 0) {
        product.quantity = q;
      }
    }

    return product;
  }


  function deleteproduct(id) {
      var idx = -1;
    for (var i = 0; i < products.length; i++) {
      if(products[i].id == id){
          idx = i;
      }
    }

    if (idx == -1) {
        return "Error: product not found";
    }

      var yes = confirm("delete " + products[idx].name + "?");
    if (!yes) {
      return "Delete cancelled";
    }

        var del = products.splice(idx, 1);
    return del[0];
  }


  function filterproducts(keyword) {
    var key = keyword ? keyword.trim().toLowerCase() : "";
      var result = [];

    if (key == "") {
        for(var i=0;i<products.length;i++){
        result.push(products[i]);
      }
      return result;
    }

    for (var i = 0; i < products.length; i++) {
          var p = products[i];
      if (p.name.toLowerCase().includes(key) || p.category.toLowerCase().includes(key)) {
        result.push(p);
      }
    }
    return result;
  }

  function filterbypricerange(min, max){
    if(min == undefined) min = 0
      if(max == undefined) max = Infinity

    var result = []
    for(var i=0;i<products.length;i++){
        if(products[i].price >= min && products[i].price <= max){
        result.push(products[i])
      }
    }
    return result
  }

  function sortbyprice(order){
    return products.toSorted(function(a,b){
      if(order == "desc") return b.price - a.price
        return a.price - b.price
    })
  }

  function getstorestats(){
    var stats = products.reduce(function(acc,p){
      acc.total++
        acc.value += p.price * p.quantity
      acc.sum += p.price
      if(p.quantity == 0) acc.out++
        return acc
    }, { total:0, value:0, sum:0, out:0 })

    var avg = stats.total > 0 ? stats.sum / stats.total : 0

    return {
      totalproducts: stats.total,
      totalvalue: Number(stats.value.toFixed(2)),
      averageprice: Number(avg.toFixed(2)),
      outofstock: stats.out
    }
  }

  function groupbycategory(){
    return products.reduce(function(acc, p){
      acc[p.category] = acc[p.category] || []
        acc[p.category].push(p)
      return acc
    }, {})
  }

  function addmany(...items){
    var results = []
    for(var i=0;i<items.length;i++){
        results.push(createproduct(items[i].name, items[i].price, items[i].category, items[i].quantity))
    }
    return results
  }


  
  return {
    createproduct: createproduct, getallproducts: getallproducts,
    printproducts: printproducts,
    getproductbyid: getproductbyid, updateproduct: updateproduct, deleteproduct: deleteproduct,
    filterproducts: filterproducts,
    filterbypricerange: filterbypricerange, sortbyprice: sortbyprice,
    getstorestats: getstorestats, groupbycategory: groupbycategory,
    addmany: addmany
  }
})()


var editingid = null
var msgtimer = null

var instock = (list) => list.filter((p) => p.quantity > 0);


function withafteraction(fn, callback) {
  return function(...args) {
      var r = fn(...args);
    if (callback) callback(r);
    return r;
  };
}

var createproductlogged = withafteraction(store.createproduct, function () {
console.log("Done");
});
var deleteproductlogged = withafteraction(store.deleteproduct, function(){
    console.log("Done");
});


function rendertable(list){
document.getElementById("productsBody").innerHTML = ""
  var empty = document.getElementById('emptyState')
  if(list.length == 0){
    empty.classList.remove("hidden")
      return
  }
  empty.classList.add("hidden")
  var body = document.getElementById("productsBody")

  for(var i=0;i<list.length;i++){
  var p = list[i]
  var tr = document.createElement("tr")
  if(p.id == editingid){ tr.classList.add("rowedit") }
    tr.setAttribute("data-row", p.id)

  var tdid = document.createElement("td")
  tdid.textContent = "#" + p.id

  var tdname = document.createElement("td")
    tdname.innerText = p.name.charAt(0).toUpperCase() + p.name.slice(1)

  var tdcat = document.createElement("td")
  tdcat.innerText = p.category

  var tdprice = document.createElement("td")
  tdprice.innerHTML = "$" + p.price.toFixed(2)

  var tdqty = document.createElement("td")
  tdqty.innerText = p.quantity
    if(p.quantity == 0) tdqty.classList.add("qtyzero")

  var tdact = document.createElement("td")
  tdact.classList.add("actions")

  var ub = document.createElement("button")
  ub.innerText = "update"
  ub.classList.add("update")
  ub.setAttribute("data-id", p.id)

  var db = document.createElement("button")
  db.innerText = "delete"
  db.classList.add("del")
  db.setAttribute("data-id", p.id)

  tdact.appendChild(ub)
  tdact.appendChild(db)

  tr.appendChild(tdid)
  tr.appendChild(tdname)
  tr.appendChild(tdcat)
  tr.appendChild(tdprice)
  tr.appendChild(tdqty)
  tr.appendChild(tdact)
  body.appendChild(tr)
  }
}

function renderstats(){
  var s = store.getstorestats()
  document.getElementById("statCount").innerText = s.totalproducts
    document.getElementById("statValue").innerText = "$" + s.totalvalue.toFixed(2)
  document.getElementById("statOut").innerText = s.outofstock;
  console.table(store.groupbycategory())
}

function refresh(){
  var kw = document.getElementById("searchInput").value
    var list = store.filterproducts(kw)
  store.printproducts(list)
  rendertable(list)
    renderstats()
}

function showmsg(txt,good){
  var m = document.getElementById("formMsg")
  m.innerText = txt
    m.style.color = good ? "green" : "red";
  if(msgtimer) clearTimeout(msgtimer)
  msgtimer = setTimeout(function(){
      m.innerText = ""
  }, 3000)
}

function handleupdate(id){
  var p = store.getproductbyid(id)
  if(!p) return

    editingid = p.id
  document.getElementById("fName").value = p.name
  document.getElementById("fCategory").value = p.category
    document.getElementById("fPrice").value = p.price
  document.getElementById("fQuantity").value = p.quantity
  console.log(p)
  document.getElementById("formTitle").innerText = "Edit product #" + p.id
  document.getElementById("submitBtn").innerText = "Save changes"
    document.getElementById("cancelEditBtn").classList.remove("hidden")
  refresh()
}

function handledelete(id){
  var res = deleteproductlogged(id)
  if(typeof res == "string"){
      if(res != "Delete cancelled") showmsg(res,false)
  }else{
    if(editingid == res.id) canceledit()
      showmsg("deleted " + res.name, true)
  }
  refresh()
}

function canceledit(){
  editingid = null
  document.getElementById("fName").value = ""
    document.getElementById("fCategory").value = ""
  document.getElementById("fPrice").value = ""
  document.getElementById("fQuantity").value = ""
    document.getElementById("formTitle").innerText = "Add product"
  document.getElementById("submitBtn").innerText = "Add product"
  document.getElementById("cancelEditBtn").classList.add("hidden")
}


document.getElementById("productForm").addEventListener("submit", function(e){
  e.preventDefault()
    var name = document.getElementById("fName").value
  var price = document.getElementById("fPrice").value
  var category = document.getElementById("fCategory").value
    var quantity = document.getElementById("fQuantity").value

  var res;
  if(editingid == null){
      res = createproductlogged(name, price, category, quantity)
  }else{
    res = store.updateproduct(editingid, name, price, category, quantity)
  }

  if(typeof res == "string"){
      showmsg(res,false)
    return
  }
    showmsg((editingid == null ? "added " : "updated ") + res.name, true)
  canceledit()
  refresh()
})

document.getElementById("cancelEditBtn").addEventListener("click", function(){
  canceledit()
})

document.getElementById("fName").addEventListener('focus', function(){
this.classList.add("focused")
})
document.getElementById("fName").addEventListener("blur", function(){
  this.classList.remove("focused")
})

document.getElementById("searchInput").addEventListener("input", function(){
  refresh()
});
document.getElementById("searchInput").addEventListener("keydown", function(e){
  if(e.key == "Enter") console.log("enter pressed, searching")
})

document.getElementById("productsBody").addEventListener("click", function(event){
  if(event.target.classList.contains("update")){
    var id = event.target.getAttribute("data-id")
      handleupdate(id)
  }
  if(event.target.classList.contains("del")){
    var id2 = event.target.getAttribute("data-id")
      handledelete(id2)
  }
})

var boxes = document.getElementsByClassName("box")
for(var i=0;i<boxes.length;i++){
  boxes[i].addEventListener("mouseover", function(){
      this.style.borderColor = "#999"
  })
  boxes[i].addEventListener("mouseout", function(){
    this.style.borderColor = ""
  })
}

refresh()