// DECLARING VARIABLES
var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var rgb = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var messageDisplay = document.querySelector("#message");
var easyBtn = document.querySelector(".easyMode")
var hardBtn = document.querySelector(".hardMode")
var squares = document.querySelectorAll(".square");

// init;

function init(){
    resetGame();
    setSquares();
}
// Difficulty buttons
easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected")
    numSquares = 3;
    for(var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none;"
        }
    }
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    numSquares = 6
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

// GAME RESET 
 function resetGame(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick all random colors
	pickedColor = pickColor();
	//change rgb to match pickedColor
	rgb.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		    squares[i].style.display = "block";
		    squares[i].style.backgroundColor = colors[i];
		}else{
		    squares[i].style.display = "none";
		} 
    }
    
    h1.style.backgroundColor = "steelblue"
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = " "
}


// Reset Button using resetGame Function 
resetButton.addEventListener("click", function(){
    resetGame();
});




// FUNCTION FOR SQUARES 
function setSquares(){
	for(var i = 0; i < squares.length; i++){
	    // add initial colors to squares
	    squares[i].style.backgroundColor = colors[i];

	    // add event listeners to the squares
	    squares[i].addEventListener("click", function(){
		    // grab color of pickedColor
		    var clickedColor = this.style.backgroundColor;

		    // compare color to pickedColor 
		    if(clickedColor === pickedColor){
			    for(var i = 0; i < squares.length; i++){
				    squares[i].style.backgroundColor = pickedColor;
			    }
			    h1.style.backgroundColor = pickedColor;
		        messageDisplay.textContent = "CORRECT!";
		        //reset text should be play again
		        resetButton.textContent = "PLAY AGAIN!";
		    }else{
			    this.style.backgroundColor = "#232323" ;
			    messageDisplay.textContent = "WRONG!! TRY AGAIN!";
		    }
	    });
    }

}


function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

// creating the array
function generateRandomColors(num){
    // declaring array
    var arr = [];
    // repeat num time 
    for (var i = 0; i < num; i++){
        // grabbing random color and push into arr
        arr.push(randomColor())
    }
    return arr;
}

// Grabbing number for rbg display
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "RGB(" + r +", " + g +", " + b +")";
}