var allDrums = document.querySelectorAll(".drum")

function playSound(key_press) {

  switch (key_press) {
    case "w":
      var tom1 = new Audio("sounds/Matthew McConaughey - alright.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/this is sparta.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/im batman.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/why so serious.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/king of the world.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/fight club.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/hasta la vista.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}



for (var i = 0; i < allDrums.length; i++) {
  allDrums[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(key_press = buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);




  })
};

document.addEventListener("keydown", function(event) {
  playSound(key_press = event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}


// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
