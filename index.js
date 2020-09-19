function myfunction(){

    let x=1024;
    let y=9999;

    let deg= Math.floor(Math.random()*(x - y)+y);

    console.log(deg);

    document.getElementById('box').style.transform =rotate(deg);
}