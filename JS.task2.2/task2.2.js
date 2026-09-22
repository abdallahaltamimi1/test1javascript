function reverseNumber(num) {
    let str = num.toString();
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

let x = 532443;
console.log(reverseNumber(x));


for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}


function addDashes(num) {
    let str = num.toString();
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];

        if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
            result += "-";
        }
    }

    return result;
}

console.log(addDashes("5234"));


function Agechecker(age) {
    if (age >= 18) {
        console.log("The user is Adult");
    } else {
        console.log("The user is Minor");
    }
}

Agechecker(20);