

const URL = "https://jsonplaceholder.typicode.com/posts";
const output = document.getElementById("output");


document.getElementById("getBtn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${URL}/1`);

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      output.textContent = xhr.responseText;
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  });

  xhr.send();
});


document.getElementById("postBtn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json"); // meta data

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      output.textContent = xhr.responseText;
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  });

  xhr.send(JSON.stringify({ title: "hello", body: "world", userId: 1 }));
});


document.getElementById("putBtn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `${URL}/1`);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      output.textContent = xhr.responseText;
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  });

  xhr.send(JSON.stringify({ id: 1, title: "updated", body: "updated body", userId: 1 }));
});


document.getElementById("deleteBtn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${URL}/1`);

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      output.textContent = "Deleted. status = " + xhr.status;
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  });

  xhr.send();
});