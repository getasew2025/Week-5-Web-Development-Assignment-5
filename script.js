let userName = "Getasew";
let userAge = 28;

const output = document.getElementById("part1-output");

if (userAge >= 18) {
    output.textContent = `${userName} is an adult.`;
    console.log(`${userName} is an adult.`);
} else {
    output.textContent = `${userName} is not an adult.`;
    console.log(`${userName} is not an adult.`);
}


    console.log(`Hello, ${name}! Welcome to JavaScript.`);
}

function squareNumber(num) {
    return num * num;
}

greet(userName);
console.log("Square of 5:", squareNumber(5));

const loopList = document.getElementById("loop-list");
for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${i}`;
    loopList.appendChild(listItem);
}

let countdown = 5;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}


const mainTitle = document.getElementById("main-title");
mainTitle.style.color = "green";

const changeTextBtn = document.getElementById("change-text-btn");
changeTextBtn.addEventListener("click", () => {
    output.textContent = "You clicked the button! Text updated.";
});

const runFunctionsBtn = document.getElementById("run-functions-btn");
runFunctionsBtn.addEventListener("click", () => {
    greet("Bob");
    console.log("Square of 10:", squareNumber(10));
});
