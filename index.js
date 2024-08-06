const calculatorInput = document.querySelector(".calc-input");
const calculatorAllClearBtn = document.querySelector(".AllClear");
const calculatorNumbers = document.querySelectorAll(".number");
const calculatorSignBtns = document.querySelectorAll(".sign");
const numberAnimation = document.querySelector(".number-animation");
let calculate = "";

Array.from(calculatorNumbers).forEach((calculatorNumbersElems) => {
  calculatorNumbersElems.addEventListener(
    "click",
    (calculatorNumbersElemsTargets) => {
      try {
        numberAnimation.textContent =
          calculatorNumbersElemsTargets.currentTarget.textContent;
        if (calculatorNumbersElemsTargets.currentTarget.textContent === "=") {
          if (calculatorInput.value !== 0) {
            calculate = eval(calculate);
            calculatorInput.value = calculate;
          }
        } else if (
          calculatorNumbersElemsTargets.currentTarget.textContent === "AC"
        ) {
          if (calculatorInput.value !== "0") {
            if (calculatorInput.value.slice(0, 0) === "") {
              calculate = "";
              calculatorInput.value = calculate;
            } else {
              calculate = calculatorInput.value.slice(0, 0);
              calculatorInput.value = calculate;
            }
          }
        } else if (
          calculatorNumbersElemsTargets.currentTarget.textContent === "C"
        ) {
          if (calculatorInput.value !== "0") {
            if (calculatorInput.value.slice(0, -1) === "") {
              calculate = "";
              calculatorInput.value = calculate;
            } else {
              calculate = calculatorInput.value.slice(0, -1);
              calculatorInput.value = calculate;
            }
          }
        } else {
          calculate += calculatorNumbersElemsTargets.currentTarget.textContent;
          calculatorInput.value = calculate;
        }
      } catch (error) {
        error = "Incorrect Expression";
        calculate = "";
        calculatorInput.value = calculate;
        console.log(error);
      }
    }
  );
});
