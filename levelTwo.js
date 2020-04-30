let image = document.getElementById("container");

function changeItem() {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "second");
  image.appendChild(newDiv);
  // newDiv.setAttribute("class", "first");
  // image.insertBefore(newDiv, document.getElementById("second"))
}


// let's change this function to pass an array with ALL the original posibilities and remove it
// from the array once used to avoid repeats
function generateNums() {
  let d = Math.floor(Math.random() * 5) + 2;
  let n = Math.floor(Math.random() * d);
  if(n === 0) {
    n = 1;
  }
  return [n, d]
}


let numerator = document.getElementsByClassName("numerator");
let denominator = document.getElementsByClassName("denominator");


for(let i = 0; i < numerator.length; i++) {
  let runOnce = generateNums()
  numerator[i].innerHTML = runOnce[0];
  denominator[i].innerHTML = runOnce[1];
}


// console.log(numerator);
