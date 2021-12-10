console.log( document.getElementsByClassName("backgrond") );

const quotes = ["The best preperation for tomorrow is doing your best today.","Happiness is a direction, not a place.", "Live life to the fullest, and focus on the positive.","Life is 10% what happens to you and 90% how you react to it.","Set your goals high, and don't stop till you get there."];

let quotecount = 0;
document.getElementById("quotebutton").addEventListener("click",buttonClicked);
  //document.getElementById("quotecontainer").classList.toggle("shown");;


function buttonClicked(){
  console.log("clickedquote");
  document.getElementById("qtext").innerHTML = quotes[quotecount];
  if(quotecount>= quotes.length-1){
    quotecount = 0;
  }else{
    quotecount++;

}
}
