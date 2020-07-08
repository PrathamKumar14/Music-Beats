
// Detecting button press

for(var i = 0; i < document.querySelectorAll(".button div").length; i++){
  document.querySelectorAll(".button div")[i].addEventListener("click", handleClick);
}

function handleClick(){
//   var buttonInnerhtml = this.innerHTML;
  var buttonInnerhtml = this.firstElementChild.innerHTML;
  makeSound(buttonInnerhtml);
  buttonAnimation(buttonInnerhtml);
}

// Detecting keyboard press

document.addEventListener("keypress", handleKeyboard);

function handleKeyboard(){
  makeSound(event.key);
  buttonAnimation(event.key);
}

// Universal function for make sound

function makeSound(key){

  switch (key) {
    case "a":
      var bubble = new Audio("sounds/bubbles.mp3");
      bubble.play();
    break;
    case "s":
      var clay = new Audio("sounds/clay.mp3");
      clay.play();
    break;
    case "d":
      var confetti = new Audio("sounds/confetti.mp3");
      confetti.play();
    break;
    case "j":
      var glimmer = new Audio("sounds/glimmer.mp3");
      glimmer.play();
    break;
    case "k":
      var moon = new Audio("sounds/moon.mp3");
      moon.play();
    break;
    case "l":
      var ufo = new Audio("sounds/ufo.mp3");
      ufo.play();
    break;

    default:console.log(key);
   }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." +currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function (){
    activeButton.classList.remove("pressed");
  }, 100);
}

// Funtion for Animation delar
