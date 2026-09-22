let food = [
    {
        name: "frid-fish",
        price: "4$",
        category: "Proteins",
        available: "yes"
    },
    {
        name: "burger",
        price: "6$",
        category: "Proteins",
        available: "yes"
    },
    {
        name: "shawarmeh",
        price: "3$",
        category: "Fats and Oils",
        available: "no"
    },
    {
        name: "frid checken",
        price: "5$",
        category: "Proteins",
        available: "yes"
    },
    {
        name: "zinger",
        price: "3$",
        category: "Fats and Oils",
        available: "yes"
    }
];


function showMenue() {

    for (let i = 0; i < food.length; i++) {

        console.log(
            food[i].name + " " +
            food[i].price + " " +
            food[i].category + " " +
            food[i].available
        );
    }
}

showMenue();



let foodname = prompt("Please Enter your food name");

let selectedFood = "";

while (selectedFood === "") {

    for (let i = 0; i < food.length; i++) {

    
        if (food[i].available === "no") {
            continue;
        }

    
        if (foodname.toLowerCase() === food[i].name.toLowerCase()) {

            selectedFood = food[i];

            break;
        }
    }

    if (selectedFood === "") {

        foodname = prompt("Please Enter available food");
    }
}

function showFood(foodItem) {

    for (let property in foodItem) {

        console.log(
            property + " : " + foodItem[property]
        );
    }
}

showFood(selectedFood);

document.write("<h2>Final Order</h2>");

for (let property in selectedFood) {

    document.write(
        property + " : " +
        selectedFood[property] +
        "<br>"
    );
}