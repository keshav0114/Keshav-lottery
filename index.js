function myfunction(){

    let x=1024;
    let y=9999;

    let deg= Math.floor(Math.random()*(x - y)+y);

    console.log(deg);
    
    document.getElementById('box').style.transform ="rotate("+deg+"deg)";
    
    
    let spinsound = new Audio();
    spinsound.src = "spin-sound.mp3";

    spinsound.play();
    setTimeout(function(){ document.getElementById('move').click(); }, 8000);   
}
function getinputvalue(){
    let x=document.getElementById("input1").value;
   if(x==2)
   {
    document.getElementById("lose").style.display="none";
    document.getElementById("winner").style.display="block";
   
    let winsound = new Audio();
    winsound.src = "win-sound.mp3";

    winsound.play();
   }
   else if(x==5)
   {
    document.getElementById("lose").style.display="none";
    document.getElementById("winner").style.display="block";
    let winsound = new Audio();
    winsound.src = "win-sound.mp3";

    winsound.play();
   }
   else if(x==7)
   {
    document.getElementById("lose").style.display="none";
    document.getElementById("winner").style.display="block";
    let winsound = new Audio();
    winsound.src = "win-sound.mp3";

    winsound.play();
   }
   else{
    document.getElementById("winner").style.display="none";   
    document.getElementById("lose").style.display="block";
    let losesound = new Audio();
    losesound.src = "lose-sound.mp3";

    losesound.play();
  }
}
