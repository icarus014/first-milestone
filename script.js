// DECLARING VARIABLES
var numSquares = 6;
var colors = generateColors(numSquares);
var squares = document.querySelector(".square");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
let easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");

// Difficulty buttons


easyBtn.addEventListener("click", function(){
    // hightlights selected button 
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    // sets the number of squares for each difficulty 
    numSquares = 3;
    // change colors to 3
    colors = generateColors(numSquares);
    // resets winning color
    pickedColor = randomColorG();
    // changes display to picked color 
    colorDisplay.textContent = pickedColor();
    // loop through squares/ reset colors
    for( var i = 0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateColors(numSquares);
    pickedColor = randomColorG();
    colorDisplay.textContent = pickedColor();
    for( var i = 0; i<squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
 });

 // RESET BUTTON AND CHANGING COLORS OF SQUARES
resetButton.addEventListener("click", function(){
    // GENERATE NEW COLORS 
    colors = generateColors(numSquares);
    // PICK NEW COLOR FROM ARRAY
    pickedColor = randomColorG();
    // CHANGE colorDisplay TO MATCH THE PICKED COLOR 
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    // change color of squares
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    // CHANGES WINNING COLOR BACK TO OG BACKGROUND COLOR
    h1.style.background = "linear-gradient(to right,#8360c3,#2ebf91)";
})

// colorDisplay.textContent = pickedColor();

for(var i = 0; i < squares.length; i++) {
//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
//add click listeners to squares
	squares[i].addEventListener("click", function(){
	//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
	//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}	else {
			this.style.backgroundColor = "#";
			messageDisplay.textContent = "Try Again";
		}
		});
}

function changeColors(colorz){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = colorz;
	}	
}

function randomColorG(){
	//pick a random number
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateColors(genColor){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < genColor; i++){
	// get random color and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g +", " + b +")";
}