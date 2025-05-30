let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let pink = document.getElementById("pink");
let yellow = document.getElementById("yellow");
let random = document.getElementById("random");

let randomColor = ["red", "green", "blue", "pink", "yellow" , "skyblue", "orange", "purple", "brown", "grey"];

function generateRandomly(randomColor) {
    randomColor = randomColor[Math.floor(Math.random() * randomColor.length)];
    console.log("Random button clicked");
    document.body.style.backgroundColor = randomColor;
    return randomColor;
}

red.addEventListener("click",function(){
    console.log("Red button clicked");
    document.body.style.backgroundColor = "red";
})

green.addEventListener("click",function(){
    console.log("Green button clicked");
    document.body.style.backgroundColor = " rgb(20, 238, 20)";
})
blue.addEventListener("click",function(){
    console.log("Blue button clicked");
    document.body.style.backgroundColor = "blue";
})
pink.addEventListener("click",function(){
    console.log("Pink button clicked");
    document.body.style.backgroundColor = "pink";
})

yellow.addEventListener("click",function(){
    console.log("Yellow button clicked");
    document.body.style.backgroundColor = "yellow";
})

random.addEventListener("click",function(){
    console.log("Random button clicked");
    generateRandomly(randomColor);
})