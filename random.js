var number_1 = Math.floor(Math.random() * 6) + 1;

var number_2 = Math.floor(Math.random() * 6) + 1;

var dice_1 = "images/dice" + number_1 + ".png"

var dice_2 = "images/dice" + number_2 + ".png"

var images = document.querySelectorAll("img");

images[0].setAttribute("src", dice_1);

images[1].setAttribute("src", dice_2);

if(number_1 > number_2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}

else if(number_2 > number_1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}

else{
    document.querySelector("h1").innerHTML = "Draw!"
}