


let message = document.getElementsByClassName("masseage");
 let pattern = /^\S+$/;
 let pattern2=/^07\d{8}$/
 let pattern3=/^(?=.*\d).{8,}$/
 let check=false;
 let check1=false;
 let check2=false;

let info =document.getElementsByClassName("inputform");

    for(let i=0;i<info.length;i++)
    info[i].oninput=function(){
        if(info[i].type=="text")
        {
              if (pattern.test( info[i].value)) {
        message[i].textContent = "Valid Username✅";
             check=true;
             sessionStorage.setItem("names",info[i].value)

    } else {
        message[i].textContent = "❌mustn't be empty and mustn't contain spaces";
         check=false;
    }
        }
        if( info[i].type=="tel")
        {
              if (pattern2.test( info[i].value)) {
        message[i].textContent = "Valid number phone✅";
         check1=true;
    } else {
        message[i].textContent = "❌must start 07 and 8 digit";
         check1=false;
    }
        }
         if(info[i].type=="password")
        {
              if (pattern3.test(info[i].value)) {
        message[i].textContent = "Valid password✅";
         check2=true;
    } else {
        message[i].textContent = "❌at least 8 characters and contains at least one number.";
         check2=false;
    }
        }
        
//  if (pattern.test( info[0].value) && pattern2.test( info[1].value) && pattern3.test(info[2].value))
//     alert("Wellcom  "+info[0].value)
    }
    if(check==true && check1==true && check2==true)
             document.write("Wellcom  "+info[0].value)
let food=[];
   let checkbox=document.getElementsByClassName("box")
   for( let input of checkbox){
    input.onclick=function(){
        if(input.value=="Burger")
           food.push("burger");
    
        if(input.value=="Zinger")
           food.push("Zinger");
        if(input.value=="chicken")
             food.push("Chicken");
    
     let strfood=JSON.stringify(food);
    localStorage.setItem("order", strfood)
}
   
}
let clicked=document.getElementById("submit")
clicked.onclick=printinfo;
function printinfo(){
     if(check==true && check1==true && check2==true)
             document.write("Welcome : "+info[0].value+"<br>")
let savedname =sessionStorage.getItem("names") 
document.write("Saved Username  :"+savedname+"<br>")
 let showorderstorage=localStorage.getItem("order")
    let order =JSON.parse(showorderstorage);
     document.write("saved order :")
    for (let j of order){
       
    document.write(j+"\n")
    }
}
    
//    function show(){
//     for(let i of food){
//         document.write(i);
//     }
   
