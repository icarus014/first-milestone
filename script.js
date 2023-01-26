// DECLARING VARIABLES
var numSquares = 9;
var colors = generateRandomColors(numSquares);
var squares = document.querySelector(".square");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay= document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn= document.querySelector("#easyButton");
var mediumBtn= document.querySelector("#mediumButton");
var hardBtn= document.querySelector("#hardButton");

// Difficulty buttons

easyBtn.addEventListener("click", function() {
    // hightlights selected button 
    hardBtn.classList.remove("selected");
    mediumBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    // sets the number of squares for each difficulty 
    numSquares = 3;
    // change colors to 3
    colors = generateRandomColors(numSquares);

    pickedColor = randomColorG();

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











// RESET BUTTON AND CHANGING COLORS OF SQUARES
resetButton.addEventListener("click", function(){
    // GENERATE NEW COLORS 
    colors = generateRandomColors(numSquares);
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
    h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor()