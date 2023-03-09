/* Declare variables below to save the different sections (divs) of your story*/

let buttonone = document.querySelector(".option-one")

let storyopening = document.querySelector(".story-opening")


let onescreen = document.querySelector(".option-one-screen")


// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
buttonone.onclick = function() {

  onescreen.style.display = "block"
  storyopening.style.display = "none"
buttonone.style.display = "none"
   buttontwo.style.display = "none"
};

let buttontwo = document.querySelector(".option-two")

let twoscreen = document.querySelector(".option-two-screen")

buttontwo.onclick = function() {


  twoscreen.style.display = "block"
 storyopening.style.display = "none"
  buttonone.style.display = "none"
  buttontwo.style.display = "none"
};

let buttonthree = document.querySelector(".option-two2")

let threescreen = document.querySelector(".option-two-end")

buttonthree.onclick = function() {

  threescreen.style.display = "block"
  twoscreen.style.display = "none"
};
let buttonfour = document.querySelector(".option-one1")

let fourscreen = document.querySelector(".option-one-end")

buttonfour.onclick = function(){
fourscreen.style.display = "block"
onescreen.style.display
  
};

  