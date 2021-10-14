//console.log (document.getElementsByClassName("options") );

const images = ["moon.jpeg", "sun,jpg", "stars.jpeg"];
const title = ["moon", "sun", "stars"];


for(i=0;i<document.getElementsByClassName('options').length;i++){

  document.getElementByClassName('label')[i].innerHTML = title[i];

  
console.log(document.getElementsByClassName('options')[i].innerHTML);
document.getElementsByClassName("options")[i].innerHTML += '<img src=assets/' +images[i] + ' "> ';
document.getElementsByClassName("options")[i].setAttributes("id", title[i]);
document.getElementsByClassName("options")[i].addEventListener("click", function(){alert("congrats you clicked a div")});
}
console.log(sectionID);
document.getElementByID(sectionID).classlist.toggle("blue");
