const calculatorInput = document.querySelector(".calc-input");
const calculatorAllClearBtn = document.querySelector(".AllClear");
const calculatorNumbers = document.querySelectorAll(".number");
const calculatorSignBtns = document.querySelectorAll(".sign");
let calculate = "";

Array.from(calculatorNumbers).forEach((calculatorNumbersElems) => {
  calculatorNumbersElems.addEventListener(
    "click",
    (calculatorNumbersElemsTargets) => {
      try {
        if (calculatorNumbersElemsTargets.currentTarget.textContent === "=") {
          if (calculatorInput.value !== "0") {
            calculate = eval(calculate);
            calculatorInput.value = calculate;
          }
        } else if (
          calculatorNumbersElemsTargets.currentTarget.textContent === "AC"
        ) {
          calculate = "";
          calculatorInput.value = calculate;
        } else {
          calculate += calculatorNumbersElemsTargets.currentTarget.textContent;
          calculatorInput.value = calculate;
        }
      } catch (error) {
        calculate = "";
        calculatorInput.value = calculate;
        console.log(error);
      }
    }
  );
});
