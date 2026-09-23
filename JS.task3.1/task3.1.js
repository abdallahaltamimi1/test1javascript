let show = document.getElementById("clicksubmit");
show.onclick=print;
function print() {
    let namevalue=document.getElementById("input");
    let name=namevalue.value;
    let selectedorder= document.querySelector('input[name="food"]:checked');
    let order=selectedorder.value;
    document.write("Hello"," ",name ,"<br>","your order is:",order);
}

show.onmouseover=function()
{
    designpage("red");
}
show.onmouseout= function()
{
    designpage("black")
}
function designpage(colors){
show.style.color=colors;
}

let stylemenue= document.getElementsByClassName("food");
console.log(stylemenue);
function editestyle(){
        for (let i = 0; i < stylemenue.length; i++) {
                 
                 stylemenue[i].style.display="block";
}
}
editestyle();

let lable_style=document.getElementsByTagName("div");
for (let index = 0; index < lable_style.length; index++) {
    lable_style[index].style.textAlign="center";
    lable_style[index].style.padding="20px";


}