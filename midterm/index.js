console.log( document.getElementsByClassName("options") );

const images = ["monday.jpeg","tuesday.jpg","wednesday.jpeg","thursday.jpeg","friday.jpeg","saturday.jpeg","sunday.jpeg"];
const title = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];


for(i=0;i<document.getElementsByClassName('options').length; i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];
  document.getElementsByClassName("options")[i].innerHTML += '<img src= "assets/' + images[i] + ' "> ';
  // '<img src= "assets/' + images[i] + ' "> '
  console.log(document.getElementsByClassName("options")[i]);
}
