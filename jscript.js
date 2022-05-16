var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimg1="images/dice"+randomnumber1+".png";

randomdice1=document.querySelectorAll("img")[0];
randomdice1.setAttribute("src",randomimg1);


// we have to create two sets of random numbers 

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimg2="images/dice"+randomnumber2+".png";


randomdice2=document.querySelectorAll("img")[1];
randomdice2.setAttribute("src",randomimg2);

if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
