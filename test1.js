let name =prompt("Please Enter Your Name");
let age =prompt("Please Enter Your Age");
let gender=prompt("Please Enter Your Gender(male,female)")
if (gender=="male") {
    alert("Wellcome Mr." +name);
}
else if(gender=="female"){
     alert("Wellcome Ms." +name);
}else
     alert("Wellcome "+ name);


     /*checkAge*/
     if(age <16){
     alert("You are not eligible to place an order");
        
     }
      let isAvailable =true;
      let order="";
       let orderstate=""
     if(age>=16){
         order=prompt(" enter one of the following : 🍔Burger   🍟Shawarma  🌭Zinge")
        if(order=="Burger" ||"Shawarma" ||"Zinge"){
         alert("Your order is being prepared");
         orderstate="onfire"
        }
        else
            alert("Invalid order. Please try again"); 
     }
               
    if(age >=18 && order== "Burger" || order== "Shawarma"|| order== "Zinge"){
        alert("Order confirmed");
         alert("Your order is available?"+isAvailable);
     }
     else if (age < 18 && order!="Burger" || "Shawarma" ||"Zinge"){
        alert("Order requires verification");
            isAvailable=false;
         alert("Your order is available?"+isAvailable)
     }
    
     
     let information ="order detalies " +"\n"+name +"\n"+age+"\n"+gender+"\n"+order+"\n"+orderstate;
     alert("order detalies " +"\n"+name +"\n"+age+"\n"+gender+"\n"+order+"\n"+orderstate);
    
    document.write(information);