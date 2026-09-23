

let bt1=document.getElementById("btn1");
bt1.onclick=checkclick;

function checkclick() {
let pic=document.getElementById("phot");

pic.style.borderRadius="50%";
pic.style.objectFit="cover";
pic.style.objectPosition="left";
}


let bt2=document.getElementById("btn2");
bt2.onclick=checkclick2
function checkclick2(){
    let pic=document.getElementById("phot");
pic.style.borderRadius="0";
pic.style.objectFit="fill";
pic.style.objectPosition="center";
}