function myfunction(){

    let x=1024;
    let y=9999;

    let deg= Math.floor(Math.random()*(x - y)+y);

    console.log(deg);

    document.getElementById('box').style.transform ="rotate("+deg+"deg)";

}
function getinputvalue(){
    let x=document.getElementById("input1").value;
   if(x==2)
   {
    document.getElementById("lose").style.display="none";
    document.getElementById("winner").style.display="block";
   }
   else if(x==5)
   {
    document.getElementById("lose").style.display="none";
    document.getElementById("winner").style.display="block";
   }
   else if(x==7)
   {
    document.getElementById("lose").style.display="none";
    document.getElementById("winner").style.display="block";
   }
   else{
    document.getElementById("winner").style.display="none";   
    document.getElementById("lose").style.display="block";
   }
}
function reload(){
    document.innerHTML="RELOAD";
}