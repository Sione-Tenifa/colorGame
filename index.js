var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 225, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 100, 255)",
  "rgb(0, 0, 255)",
  "rgb(141, 6, 34)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3]
var colorDisplay = document.getElementById("colorDisplay")

colorDisplay.textContent = pickedColor

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i]
  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    alert("clicked a square")
  })
}

