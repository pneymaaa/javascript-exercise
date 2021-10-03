const btnHoroskopIf = document.querySelector("#Horoskop-btn-if");
const btnHoroskopSwitch = document.querySelector("#Horoskop-btn-switch");
const btnHoroskopProb = document.querySelector("#Horoskop-btn-prob");
const divHoroskop = document.querySelector("#Horoskop-div");
const btnHoroskopReset = document.querySelector("#Horoskop-btn-reset");

const btnFizzBuzz = document.querySelector("#FizzBuzz-btn");
const divFizzBuzz = document.querySelector("#FizzBuzz-div");
const btnFizzBuzzReset = document.querySelector("#FizzBuzz-btn-reset");

const btnFizzBuzzResultReset = document.querySelector("#FizzBuzzResult-btn-reset");
const btnFizzBuzzResult = document.querySelector("#FizzBuzzResult-btn");
const divFizzBuzzResult = document.querySelector("#FizzBuzzResult-div");
const input = document.querySelector("input");
input.oninput = function () {
    let max = parseInt(this.max);
    if (parseInt(this.value) > max) {
        this.value = max;
    }
}

// using if.. else..
btnHoroskopIf.addEventListener("click", () => {
    const p = document.createElement("p");
    const randomNumber = Date.now();
    let result = "";
    if (randomNumber % 10 < 3) {
        result = "Hebat!!";
    } else if (randomNumber % 10 < 6) {
        result = "Boleh juga!";
    } else {
        result = "Mengerikan";
    }
    p.innerHTML = result;
    divHoroskop.appendChild(p);
});

// using switch.. if..
btnHoroskopSwitch.addEventListener("click", () => {
    const p = document.createElement("p");
    const randomNumber = Date.now();
    const randomLucky = randomNumber % 10;
    let result = "";
    switch (randomLucky) {
        case 1:
            result = "Hebat";
            break;
        case 3:
            result = "Boleh juga!";
            break;
        case 5:
            result = "Boleh";
            break;
        case 7:
            result = "Mengerikan";
            break;
        default:
            result = "Sangat Mengerikan";
    }
    p.innerHTML = result;
    divHoroskop.appendChild(p);
});


/// using math.random with if.. else..
btnHoroskopProb.addEventListener("click", () => {
    const p = document.createElement("p");
    const probability = Math.random();
    let result = "";
    if (probability < 0.2) {
        result = "Hebat!"
    } else if (probability < 0.8) {
        result = "Boleh juga!"
    } else {
        result = "Mengerikan"
    }
    p.innerHTML = result;
    divHoroskop.appendChild(p);
});

btnFizzBuzz.addEventListener("click", () => {
    divFizzBuzz.innerHTML = "";
    const p = document.createElement("p");
    let result = "";
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            result += " Fizz! ";
        } else if (i % 5 === 0) {
            result += " Buzz! ";
        } else if (i % 5 === 0 && i % 3 === 0) {
            result += " FizzBuzz! "
        } else {
            result += ` ${i} `;
        }
    }
    p.innerHTML = result;
    divFizzBuzz.appendChild(p);
});

btnFizzBuzzResult.addEventListener("click", () => {
    const p = document.createElement("p");
    const value = input.value;
    let result = "";
    if (value != "" && value % 3 == 0) {
        result = "Fizz!";
    } else if (value != "" && value % 5 == 0) {
        result = "Buzz!";
    } else if (value != "" && value % 5 == 0 && value % 3 == 0) {
        result = "FizzBuzz!"
    } else if (value != 0 || value != "") {
        result = ` ${value} `;
    } else {
        result = "invalid input";
    }
    p.innerHTML = result;
    divFizzBuzzResult.appendChild(p);
});

btnFizzBuzzReset.addEventListener("click", () => {
    divFizzBuzz.innerHTML = "";
});

btnFizzBuzzResultReset.addEventListener("click", () => {
    divFizzBuzzResult.innerHTML = "";
});

btnHoroskopReset.addEventListener("click", () => {
    divHoroskop.innerHTML = "";
});