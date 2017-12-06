var theBoxes = document.querySelectorAll(".box");
var startButton = document.querySelector(".start");
 
var animateOpacity = KUTE.allFromTo(
  theBoxes,
  { opacity: 1 },
  { opacity: 0.1 },
  { offset: 700 }
);
 
startButton.addEventListener(
  "click",
  function() {
    animateOpacity.start();
  },
  false
);