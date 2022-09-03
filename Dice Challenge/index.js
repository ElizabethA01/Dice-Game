function rollDice() {
  // Generate random numbers

  var randomNumber1 = Math.floor((Math.random()*6)) + 1; //1-6
  var randomNumber2 = Math.floor((Math.random()*6)) + 1;

  // Selecting correct images
  var imgFile1 = "images/dice" + randomNumber1 + ".png";
  var imgFile2 = "images/dice" + randomNumber2 + ".png";

  // Insert images to html file
  document.querySelectorAll("img")[0].setAttribute("src", imgFile1);
  document.querySelectorAll("img")[1].setAttribute("src", imgFile2);

  // Who wins? 
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉"
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉"
  } else {
    document.querySelector("h1").innerHTML = "Draw!"
  }

}

rollDice()