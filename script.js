function generateWish(){

let name = document.getElementById("name").value;

let message = "🎉 Happy Birthday " + name + "! May your life be full of happiness and success! 🎂";

document.getElementById("wish").innerText = message;

let whatsappLink = "https://wa.me/?text=" + encodeURIComponent(message);

document.getElementById("whatsapp").href = whatsappLink;

confettiAnimation();

}

function playMusic(){

let audio = new Audio("birthday.mp3");

audio.play();

}

document.getElementById("photo").addEventListener("change",function(event){

let reader = new FileReader();

reader.onload = function(){

document.getElementById("preview").src = reader.result;

}

reader.readAsDataURL(event.target.files[0]);

});

function confettiAnimation(){

for(let i=0;i<100;i++){

let confetti=document.createElement("div");

confetti.style.position="fixed";

confetti.style.width="10px";

confetti.style.height="10px";

confetti.style.background="red";

confetti.style.left=Math.random()*window.innerWidth+"px";

confetti.style.top="-10px";

document.body.appendChild(confetti);

let fall=setInterval(()=>{

confetti.style.top=parseInt(confetti.style.top)+5+"px";

if(parseInt(confetti.style.top)>window.innerHeight){

clearInterval(fall);

confetti.remove();

}

},30);

}

}