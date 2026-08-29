// HELLLOOOOOO
// to use it 
// run startApp() in the console 
// BOMBAA EL DATA 


var products = [
  { id: 1, name: "Laptop",    price: 18500, category: "Electronics", quantity: 4 },
  { id: 2, name: "Mouse", price: 180,  category: "Electronics", quantity: 25 },
  { id: 3, name: "Notebook",  price: 35, category: "Stationery",  quantity: 100 },
  { id: 4, name: "Desk Lamp", price:420,category:"Home", quantity: 0 },
];

var nextid = 5;





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

  for(var j = 0 ; j<products.length;j++){
      if(products[j].name.toLowerCase() == name.toLowerCase()){
    return "Error: product name already exists";
      }
  }

  var newproduct = {
    id: nextid,
        name: name,
    price: numprice,
    category: category,
      quantity: numqty,
  };

  nextid++;
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


function sortbyprice(order) {
  var copy = [];
    for (var i = 0; i < products.length; i++) {
    copy.push(products[i]);
  }

  copy.sort(function(a,b) {
      if (order == "desc") {
      return b.price - a.price;
    } else {
        return a.price - b.price;
    }
  });

  return copy;
}


function getstorestats() {
  var total = 0;
    var value = 0;
  var sum = 0;
  var out=0;

  for (var i = 0; i < products.length; i++) {
    total = total + 1;
        value = value + products[i].price * products[i].quantity;
    sum = sum + products[i].price;
    if (products[i].quantity == 0) {
      out = out + 1;
    }
  }

    var avg = total > 0 ? sum / total : 0;

  return {
    totalproducts: total,
      totalvalue: Number(value.toFixed(2)),
    averageprice: Number(avg.toFixed(2)),
    outofstock: out,
  };
}


function groupbycategory() {
    var groups = {};
  for (var i = 0; i < products.length; i++) {
    var c = products[i].category;
        if (!groups[c]) {
      groups[c] = [];
    }
    groups[c].push(products[i]);
  }
    return groups;
}


function filterbypricerange(min, max) {
  if (min == undefined) min = 0;
    if (max == undefined) max = Infinity;

  var result = [];
  for(var i = 0; i < products.length; i++){
      if (products[i].price >= min && products[i].price <= max) {
      result.push(products[i]);
    }
  }
  return result;
}


function addmany(...items) {
  var results = [];
    for (var i = 0; i < items.length; i++) {
    results.push(createproduct(items[i].name, items[i].price, items[i].category, items[i].quantity));
  }
  return results;
}


var instock = (list) => list.filter((p) => p.quantity > 0);


function withafteraction(fn, callback) {
  return function(...args) {
      var r = fn(...args);
    if (callback) callback(r);
    return r;
  };
}

var createproductlogged = withafteraction(createproduct, function () {
console.log("Done");
});
var deleteproductlogged = withafteraction(deleteproduct, function(){
    console.log("Done");
});


function startapp() {
  var running = true;

    while (running) {
    var choice = prompt(
        "===== NTI Mini Store =====\n" +
          "1) Add product\n" +
          "2) Show all products\n" +
          "3) Show product by ID\n" +
          "4) Update product\n" +
          "5) Delete product\n" +
          "6) Search / Filter\n" +
          "0) Exit"
      );

      if (choice == null || choice == "0") {
      running = false;
      break;
    }

    if (choice == "1") {
        var name = prompt("Product name:");
      var price = prompt("Price:");
        var category = prompt("Category:");
      var quantity = prompt("Quantity:");
      var res = createproductlogged(name, price, category, quantity);
        if (typeof res == "string") {
        alert(res);
      } else {
          alert("Added: " + res.name);
      }
    } else if (choice == "2") {
        printproducts(getallproducts());
    } else if (choice == "3") {
      var sid = prompt("Product ID:");
        var found = getproductbyid(sid);
      if (!found) {
        alert("Product not found");
      } else {
          console.table([found]);
      }
    } else if (choice == "4") {
        var uid = prompt("Product ID to update:");
      var un = prompt("New name (empty = keep):");
        var up = prompt("New price (empty = keep):");
      var uc = prompt("New category (empty = keep):");
        var uq = prompt("New quantity (empty = keep):");
      var ures = updateproduct(uid, un, up, uc, uq);
        if (typeof ures == "string") {
        alert(ures);
      } else {
          alert("Updated: " + ures.name);
      }
    } else if (choice == "5") {
        var did = prompt("Product ID to delete:");
      var dres = deleteproductlogged(did);
        if (typeof dres == "string") {
        alert(dres);
      } else {
          alert("Deleted: " + dres.name);
      }
    } else if (choice == "6") {
        var kw = prompt("Search keyword:");
      printproducts(filterproducts(kw));
    } else {
        alert("Invalid choice, try again.");
    }
  }

    console.log("App closed, byeeeeeeeee!");
}