var ran1=Math.floor(Math.random()*6)+1;
var randiceimg="dice"+ran1+".png";
var randsoucreimg = "images/"+randiceimg;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randsoucreimg);

var ran2=Math.floor(Math.random()*6)+1;
var randomSourceImg="images/dice"+ran2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSourceImg);

if(ran1>ran2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";

}
else if(ran1<ran2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";

}
else{
    document.querySelector("h1").innerHTML="Draw!";
    
}
