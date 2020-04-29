let classes = ["three", "four", "five", "six"];
let classesForDivs = ["third", "fourth", "fifth", "sixth"];
let image = document.getElementById("figure");
console.log(image.className)

function changeItem() {
  let i = classes[0];
  let j = classesForDivs[0];
  if(classes.length > 0) {
    let newDiv = document.createElement("div");
    image.appendChild(newDiv);
    newDiv.setAttribute("class", j)
    image.setAttribute("class", i)
    classes.shift();
    classesForDivs.shift();
  }
}