var colors = gererateRandomColors(6)

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")

colorDisplay.textContent = pickedColor

for(var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i]
  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    // alert("clicked a square")
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor
    //comare color to pickedColor
    if(clickedColor == pickedColor){
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor)
    }else{
      this.style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try again!"
    }
  })
}

function changeColors(color){
  // loop through all squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
    // change each color to correct color
  

  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

function gererateRandomColors(num){
  //make an array
  var arr = []
  //add num random colors to array
  for(var i = 0; i < num; i++){
    //get random color push into arr
    
  }
  // return array
  return arr 
}