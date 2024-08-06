const calculatorInput = document.querySelector(".calc-input");
const calculatorAllClearBtn = document.querySelector(".AllClear");
const calculatorNumbers = document.querySelectorAll(".number");
const calculatorSignBtns = document.querySelectorAll(".sign");
const numberAnimation = document.querySelector(".number-animation");
let calculate = "";

calculatorInput.addEventListener("focus", (e) => {
  calculatorInput.blur();
});

const numberAnimationGsap = (e) => {
  numberAnimation.textContent = e;
  gsap.from(numberAnimation, {
    opacity: 0,
    scale: 1.6,
    duration: 0.5,
    ease: Power2.easeInOut,
  });
};

Array.from(calculatorNumbers).forEach((calculatorNumbersElems) => {
  calculatorNumbersElems.addEventListener(
    "click",
    (calculatorNumbersElemsTargets) => {
      try {
        if (calculatorNumbersElemsTargets.currentTarget.textContent === "+") {
          console.log("dfd");
          
          numberAnimationGsap("Plus");
        } else {
          numberAnimationGsap(
            calculatorNumbersElemsTargets.currentTarget.textContent
          );
        }

        numberAnimation.textContent =
          calculatorNumbersElemsTargets.currentTarget.textContent;
        if (calculatorNumbersElemsTargets.currentTarget.textContent === "=") {
          if (calculatorInput.value !== 0) {
            calculate = eval(calculate);
            calculatorInput.value = calculate;
            numberAnimation.textContent = calculate;
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
          calculatorNumbersElemsTargets.currentTarget.textContent === "EC"
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
