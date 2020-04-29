var sounds = document.querySelectorAll(".sound");
var color = document.querySelectorAll(".colors div");
var addBubbel = document.querySelector(".bulle");


var arry = [
    
    "#561643",
    "#6c0e23",
    "#c42021",
    "#ea9e8d",
    "#3c1742",
    "#e3b505"
]
color.forEach((value, index) => {
    value.addEventListener("click", () => {
        sounds[index].currentTime = 0;
        sounds[index].play();
        upBubbel(index);
    });

});

function upBubbel(index) {
    var bubbel = document.createElement("div");
    addBubbel.appendChild(bubbel);
    bubbel.style.backgroundColor = arry[index];
    bubbel.style.animation = "jump 1s ease";
  
    bubbel.addEventListener("animationend", function () {
        bubbel.removeChild(this);
    })
}



