let image = document.getElementsByClassName("container");

function changeItem() {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "first");
  image.appendChild(newDiv);
}

console.log(image.className);