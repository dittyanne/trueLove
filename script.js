let secretNumber;
let resultDisplay = document.getElementById('result');
function randomNumber(){
    secretNumber=Math.floor(Math.random()*100) + 1;
}
randomNumber();

function myMove() {
    document.getElementById("myAnimation").style.visibility = 'visible';
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
      pos++; 
      elem.style.bottom = pos + 'px'; 
  }
}

function checkValue(){
    let guess = parseInt(document.getElementById('number').value);

    if(!(guess>1)&&!(guess<100)){
        resultDisplay.innerText="Please enter a value";
        resultDisplay.style.color = "#FFB6C1";
    }
    else if(guess>100||guess<1){
        resultDisplay.innerText="The value must be between 1 and 100";
        resultDisplay.style.color = "#FFB6C1";
    }
    else if (guess > secretNumber) {
        resultDisplay.innerText="Too High";
        resultDisplay.style.color = "Yellow";
    }
    else if(guess<secretNumber) {
        resultDisplay.innerText="Too Low";
        resultDisplay.style.color = "Blue";
    }
    else {
        resultDisplay.innerText="Correct! You'll find your true love at "+secretNumber+" years old!";
        resultDisplay.style.color = "Red";
        myMove();
    }
}

function newGame(){
    randomNumber();
    checkValue();
}