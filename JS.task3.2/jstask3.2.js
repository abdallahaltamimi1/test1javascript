let font =document.getElementsByClassName("select");
  let i= 0;
while (i < font.length) {

    font[i].onclick = check;

    i++;
}
console.log(font[0].value);
console.log(font[1].value);
let size =document.getElementsByTagName("input");
console.log(size);

    let j = 0;
while (j< size.length) {

    size[j].onclick = check;

    j++;
}

let text=document.getElementsByClassName("text");
function check() {
    console.log(this.value);
    text[0].style.fontFamily = font[0].value;
    text[0].style.fontSize = font[1].value;
      if (this.value === "bold") {
        text[0].style.fontWeight = "bold";
    }

    if (this.value === "italic") {
        text[0].style.fontStyle = "italic";
    }

    if (this.value === "underline") {
        text[0].style.textDecoration = "underline";
    }

}








