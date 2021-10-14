//console.log (document.getElementsByClassName("options") );

console.log( document.getElementsByClassName("options") );


const images = ["moon.jpeg", "sun.jpg", "stars.jpeg"];
const title = ["moon", "sun", "stars"];


for(i=0;i<document.getElementsByClassName('options').length; i++){

  document.getElementsByClassName('label')[i].innerHTML = title[i];

  document.getElementsByClassName("options")[i].innerHTML += '<img src= "assets/' + images[i] + ' "> ';
}
