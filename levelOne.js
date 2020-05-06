function generateNums() {
  // check the value of the form and take lives away if wrong
  let el = document.getElementsByClassName("heart");
  let radioButtons = document.getElementsByName("group");
  radioButtons.forEach(elem => {
    if(elem.checked){
      let chosenAnswer = elem.value;
      chosenAnswer = parseInt(chosenAnswer);
      if(random !== chosenAnswer) {
        el[0].remove();
        if(el.length === 0) {
          let lives = document.getElementsByClassName("lives")[0];
          // display message out of lives
          let message = document.createElement("p");
          lives.appendChild(message);
          message.setAttribute("class", "message");
          message.innerText = "You're out of lives";
          // create button to play again
          let playAgainButton = document.createElement("button");
          lives.appendChild(playAgainButton);
          playAgainButton.innerText = "Play again";
          // playAgainButton.style.boxShadow = "5px 10px 10px rgb(139, 139, 139)";
          // previous or next line work, but next one is tidier for keeping css in one place
          playAgainButton.classList.add("popButton");
          playAgainButton.addEventListener("click", () => {window.location.reload()})
        }
      } else {
        let counter = document.getElementsByClassName("answerCounter")[0];
        let correct = parseInt(counter.innerHTML);
        correct++;
        counter.innerText = correct;
        if(correct === 10) {
          let message = document.createElement("p");
          let lives = document.getElementsByClassName("lives")[0];
          lives.appendChild(message);
          message.setAttribute("class", "message");
          message.innerText = "Great Job!!";
          // create button to go to next level
          let nextLevelButton = document.createElement("button");
          lives.appendChild(nextLevelButton);
          nextLevelButton.innerText = "Go to next level";
          nextLevelButton.classList.add("popButton");
          nextLevelButton.addEventListener("click", () => {window.location = "levelTwo.html"})
          document.getElementById("btn").classList.remove("btn");
          document.getElementById("btn").classList.add("noPlay");
          console.log("working");
        }
      }
    }
  });
  // remove the button to submit answers if out of lives
  if(el.length === 0) {
    document.getElementById("btn").classList.remove("btn");
    document.getElementById("btn").classList.add("noPlay");
  }
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
  upper = parseInt(upper);
  bottom = parseInt(bottom);
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
}
generateNums()




