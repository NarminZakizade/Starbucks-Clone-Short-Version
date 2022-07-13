var img1=document.getElementsByClassName("1")[0];
var changingImg=document.getElementById("drink");
var img2=document.getElementsByClassName("2")[0];
var img3=document.getElementsByClassName("3")[0];
var div=document.getElementsByClassName("quarter-circle-bottom-right")[0];

img1.addEventListener('mouseover', function(){
    changingImg.src=img1.src;
    div.setAttribute("style","background-color:#00704a");
    
})

img2.addEventListener('mouseover', function(){
  changingImg.src=img2.src;
  div.setAttribute("style","background-color:pink");
 
})

img3.addEventListener('mouseover', function(){
  changingImg.src=img3.src;
  div.setAttribute("style","background-color:purple");

})

