// function is called at the for loop to fill in all the possible answers
function generateNums(arr) {
  let innerArr = arr.splice(Math.floor(Math.random() * arr.length), 1);
  let n = innerArr[0][0];
  let d = innerArr[0][1];
  return [n, d];
}

let arrays = [[1, 2], [1, 3], [2, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5],
[4, 5], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6]];

let numerator = document.getElementsByClassName("numerator");
let denominator = document.getElementsByClassName("denominator");


for(let i = 0; i < numerator.length; i++) {
  console.log(arrays);
  let runOnce = generateNums(arrays);
  numerator[i].innerHTML = runOnce[0];
  denominator[i].innerHTML = runOnce[1];
}

// choosing one of the answers to match with the image
let random = Math.floor(Math.random() * 4)
let upper = numerator[random].innerHTML;
let bottom =  denominator[random].innerHTML;
console.log(upper);
console.log(bottom);

let image = document.getElementById("container");

if(upper > 1) {
  for(let i = 1; i < upper; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "second");
    image.appendChild(newDiv);
  }
}

upper = parseInt(upper)
bottom = parseInt(bottom)

if(bottom > upper + 1) {
  let times = bottom - (upper + 1);
  for(let j = 0; j < times; j++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "first");
    image.insertBefore(newDiv, document.getElementById("second"))
  }
}