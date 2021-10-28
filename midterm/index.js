console.log( document.getElementsByClassName("options") );

const images = ["monday.jpeg","tuesday.jpg","wednesday.jpeg","thursday.jpeg","friday.jpeg","saturday.jpeg","sunday.jpeg"];
const title = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
for(i=0;i<document.getElementsByClassName('options').length; i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];
  document.getElementsByClassName("options")[i].innerHTML += '<img src= "assets/' + images[i] + ' "> ';
  // '<img src= "assets/' + images[i] + ' "> '
  console.log(document.getElementsByClassName("options")[i]);
}
document.getElementById("mondaybutton").addEventListener("click",function(){
  console.log("clickedmonday");
  document.getElementById("mondaycontainer").classList.toggle("shown");
});
document.getElementById("tuesdaybutton").addEventListener("click",function(){
  document.getElementById("tuesdaycontainer").classList.toggle("shown");
});
document.getElementById("wednesdaybutton").addEventListener("click",function(){
  document.getElementById("wednesdaycontainer").classList.toggle("shown");
});
document.getElementById("thursdaybutton").addEventListener("click",function(){
  document.getElementById("thursdaycontainer").classList.toggle("shown");
});
document.getElementById("fridaybutton").addEventListener("click",function(){
  document.getElementById("fridaycontainer").classList.toggle("shown");
});
document.getElementById("saturdaybutton").addEventListener("click",function(){
  document.getElementById("saturdaycontainer").classList.toggle("shown");
});
document.getElementById("sundaybutton").addEventListener("click",function(){
  document.getElementById("sundaycontainer").classList.toggle("shown");
});
