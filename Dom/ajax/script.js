function loadData() {
  //create request object

  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    //prepareing request object

    const container = document.getElementById("demo");

    demo.innerHTML = xhr.responseText;
  };

  xhr.open("GET", "./data/data.html");

  xhr.send();
}
