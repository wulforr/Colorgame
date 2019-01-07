var numsquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay= document.getElementById("colordisplay");
var msgDisplay =document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numsquares = 3;
    easyMode(numsquares);
})

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numsquares = 6;
    hardMode(numsquares);
})

resetBtn.addEventListener("click",function(){
    resetBtn.textContent = "New Colors";
    //generate new colors
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];    
    }    
    h1.style.backgroundColor = "steelblue";
    msgDisplay.textContent = null;
})
colorDisplay.textContent = pickedColor;



for (var i=0; i<squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
    //add Eventlisteners to squares
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            msgDisplay.textContent = "Correct!";
            h1.style.backgroundColor = clickedColor; 
            changeColors(clickedColor);
            resetBtn.textContent = "Play Again";
             
        }
        else
        {
            this.style.backgroundColor = "#232323";
            msgDisplay.textContent = "Try Again";
        }
    })
}
function changeColors(color){
for (var j=0; j<squares.length; j++){
    //change each color to match given color
    squares[j].style.backgroundColor = color;
    
}
}

function pickColor(){
    //generating a random number between 0 to max elements in array
   var rand = Math.floor(Math.random() * colors.length);
   return(colors[rand]);

}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors
    for(i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
   var red = Math.floor(Math.random() * 256);
   var blue = Math.floor(Math.random() * 256);
   var green = Math.floor(Math.random() * 256);
   return "rgb(" + red + ", " + blue + ", " + green + ")";
}


function easyMode(numsquares){
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(i=0;i<squares.length;i++){
        if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
}

function hardMode(numsquares){
    colors = generateRandomColors(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
}