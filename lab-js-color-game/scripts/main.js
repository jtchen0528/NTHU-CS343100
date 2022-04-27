window.onload = function() {
    navtoggle();
    init();
};

var numCards = 3;
var gameOver = false;
var colors = [];
var pickedColor;
var body = document.querySelector("body");
var cards = document.querySelectorAll(".card");
var colorDisplay = document.getElementById("color-picked");
var messageDisplay = document.querySelector("#message");
var timerDisplay = document.querySelector("#timer");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var resetDisplay = document.querySelector("#reset span");
var mode = 0;
var cardcontainer = document.querySelector("#card-container");
var easymode = document.querySelector(".easy");
var hardmode = document.querySelector(".hard");
var nightmaremode = document.querySelector(".nightmare");
var rows = document.getElementById("addrow");
var time=5;
var mytimer;
var ezbut = document.getElementById("ezbut");
var hdbut = document.getElementById("hdbut");
var nmbut = document.getElementById("nmbut");

function init() {
        initCards();
        reset();
    console.log(mode);
}

easymode.addEventListener("click", function() {
    mode=0;
    numCards=3;
    rows.style.display="none";
    resetButton.style.display="block";
    navtoggle();
    time = 5;
    stoptimer();
    timerDisplay.innerHTML ="&nbsp;&nbsp;";
    reset();
    console.log(mode);
});

easymode.addEventListener("mouseover", function(){
    if(mode==0){
        ezbut.style.color="#484848";
    }else{
        ezbut.style.color="rgb(86, 159, 255)";
    }
});

easymode.addEventListener("mouseout", function(){
    if(mode==0){
        ezbut.style.color="white";
    }else{
        ezbut.style.color="#484848";
    }
});

hardmode.addEventListener("click", function(){
    mode=1;
    numCards=6;
    rows.style.display="inline";
    resetButton.style.display="block";
    time = 5;
    navtoggle();
    stoptimer();
    timerDisplay.innerHTML ="&nbsp;&nbsp;";
    reset();
    console.log(mode);
});

hardmode.addEventListener("mouseover", function(){
    if(mode==1){
        hdbut.style.color="#484848";
    }else{
        hdbut.style.color="rgb(86, 159, 255)";
    }
});

hardmode.addEventListener("mouseout", function(){
    if(mode==1){
        hdbut.style.color="white";
    }else{
        hdbut.style.color="#484848";
    }
});

nightmaremode.addEventListener("click", function(){
    mode=2;
    numCards=6;
    stoptimer();
    rows.style.display="inline";
    time = 5;
    navtoggle();
    resetButton.style.display="none";
    timerDisplay.innerHTML ="&nbsp;&nbsp;"+ time;
    if(mode==2){
        mytimer = setInterval(myTimer, 1000);
    }   
    reset();
    console.log(mode);
});

nightmaremode.addEventListener("mouseover", function(){
    if(mode==2){
        nmbut.style.color="#484848";
    }else{
        nmbut.style.color="rgb(86, 159, 255)";
    }
});

nightmaremode.addEventListener("mouseout", function(){
    if(mode==2){
        nmbut.style.color="white";
    }else{
        nmbut.style.color="#484848";
    }
});

function navtoggle(){
    if(mode==0){
        ezbut.style.backgroundColor="rgb(86, 159, 255)";
        ezbut.style.color="white";
        hdbut.style.backgroundColor="white";
        hdbut.style.color="#484848";
        nmbut.style.backgroundColor="white";
        nmbut.style.color="#484848";
    }else if(mode==1){
        hdbut.style.backgroundColor="rgb(86, 159, 255)";
        hdbut.style.color="white";
        ezbut.style.backgroundColor="white";
        ezbut.style.color="#484848";
        nmbut.style.backgroundColor="white";
        nmbut.style.color="#484848";
    }else{
        ezbut.style.backgroundColor="white";
        ezbut.style.color="#484848";
        hdbut.style.backgroundColor="white";
        hdbut.style.color="#484848";
        nmbut.style.backgroundColor="rgb(86, 159, 255)";
        nmbut.style.color="white";
    }
}

function initCards() {
   
    for (var i = 0; i < cards.length; i++) {
        //add click listeners to cards  
        cards[i].addEventListener("click", function() {
            if (gameOver)
                return;
            //grab color of clicked card
            var clickedColor = this.style.backgroundColor;
            // alert(this.style.backgroundColor);
            //compare color to pickedColor
            if(time>0){
                if (clickedColor === pickedColor) {
                    stoptimer();
                    messageDisplay.textContent = "Correct!";
                    resetDisplay.textContent = "Play Again";
                    changeColors("#FFF");
                    body.style.backgroundColor = clickedColor;
                    gameOver = true;
                    resetButton.style.display="block";
                } else {
                    this.style.opacity = 0;
                    messageDisplay.textContent = "Try Again";
                }
            }else{

            }
        });
    }

}

function blink(){
    body.style.backgroundColor = "#232323";
    if(time==0){
        body.style.backgroundColor = pickedColor;
    }
}

function myTimer(){
        if((time>0)&&(mode==2)){
            setTimeout("blink()", 80);
            body.style.backgroundColor = "#FFFFFF";
            time--;
        }
        console.log(time);
        timerDisplay.innerHTML ="&nbsp;&nbsp;"+ time;
        if(time==0){
            stoptimer();
            messageDisplay.textContent = "Timeout!";
            resetDisplay.textContent = "Play Again";
            timerDisplay.innerHTML ="&nbsp;&nbsp;";
            changeColors("#FFF");
            body.style.backgroundColor = pickedColor;
            resetButton.style.display="block";
        }
}

function stoptimer(){
    clearInterval(mytimer);
}

function reset() {
    gameOver = false;
    colors = generateRandomColors(numCards);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetDisplay.textContent = "New Color"
    messageDisplay.textContent = "What's the Color?";
    //change colors of cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
        if (colors[i]) {
            cards[i].style.display = "block"
            cards[i].style.backgroundColor = colors[i];
        } else {
            cards[i].style.display = "none";
        }
    }
    body.style.backgroundColor = "#232323";
}

resetButton.addEventListener("click", function() {
    stoptimer();
    reset();
    if(mode==2){
        time=5;
        timerDisplay.innerHTML ="&nbsp;&nbsp;"+ time;
        mytimer = setInterval(myTimer, 1000);
        resetButton.style.display="none";
    }
});


function changeColors(color) {
    //loop through all cards
    for (var i = 0; i < cards.length; i++) {
        //change each color to match given color
        cards[i].style.opacity = 1;
        cards[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


