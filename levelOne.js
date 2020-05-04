function generateNums() {  
  // clearing the image of previous times
  let leftFraction = document.getElementsByClassName("first");
  let rightFraction = document.getElementsByClassName("second");
  while(leftFraction.length > 0) {
    leftFraction[0].remove();
  }
  while(rightFraction.length > 0) {
    rightFraction[0].remove();
  }
  // defining array with all possible answers
  let arr = [[1, 2], [1, 3], [2, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5],
  [4, 5], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6]];
  // getting html to put the answers in
  let numerator = document.getElementsByClassName("numerator");
  let denominator = document.getElementsByClassName("denominator");
  // filling in all the answers
  for(let j = 0; j < numerator.length; j++) {
    let innerArr = arr.splice(Math.floor(Math.random() * arr.length), 1);
    numerator[j].innerHTML = innerArr[0][0];
    denominator[j].innerHTML = innerArr[0][1];
  }  
  // choosing one of the answers to match with the image
  random = Math.floor(Math.random() * 4)
  let upper = numerator[random].innerHTML;
  let bottom =  denominator[random].innerHTML;
  // these numbers can't be strings so that they can be manipulated inside the for loop
  upper = parseInt(upper)
  bottom = parseInt(bottom)
  // adding coloured fractions (right of the image)
  let image = document.getElementById("container");
  for(let i = 0; i < upper; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "second");
    image.appendChild(newDiv);
  }
  // adding blank fractions (left of the image)
  let times = bottom - upper;
  for(let j = 0; j < times; j++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "first");
    image.insertBefore(newDiv, document.getElementById("second"))
  }
  // clearing the radio button's answers
  function clearAnswers() {
    let checkedOrNot = document.getElementsByTagName("input");
    for(let k = 0; k < checkedOrNot.length; k++) {
      checkedOrNot[k].checked = false;
    }
  }
  clearAnswers();
  
  // subtracting lives if wrong answer
}
generateNums()


// check the value of the form
function doSomeThing() {
  let radioButtons = document.getElementsByName("group");
  radioButtons.forEach(elem => {
    if(elem.checked){
      let chosenAnswer = elem.value;
      if(random !== chosenAnswer) {
        // console.log("random is " + random);
        // console.log("chosen is " + chosenAnswer); 
      }
    }
  });
  // let setOpacity = document.getElementsByClassName("box input:checked ~ label::before");
  // let setOpacity = document.getElementsByClassName("box")[random];
  // let setOpacity = document.querySelector('label', ':before');
  // setOpacity.pseudoStyle("before","opacity","0");
  // let setOpacity = document.getElementById("label");
  // setOpacity.classList.add("erase");
  // let setOpacity = document.getElementsByTagName(("label")[random], '::before');
  // let setOpacity = document.querySelector('label[random]', ':before');
  // setOpacity.style.opacity = "0";
  
  
  
  // this nearly worked, but I think the problem is always going to be that I erase the whole element
  


}


