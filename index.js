var randomNumber1 = Math.floor ( Math.random() * (6)+1);
var randomDiceImg1 = "dice" + randomNumber1 + ".png";
document.querySelector(".dice .img1").setAttribute("src" , randomDiceImg1);

var randomNumber2 = Math.floor ( Math.random() * (6)+1);
var randomDiceImg2 = "dice" + randomNumber2 + ".png";
document.querySelector(".dice .img2").setAttribute("src" , randomDiceImg2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩" 
}
else {document.querySelector("h1").innerHTML="Draw"
}