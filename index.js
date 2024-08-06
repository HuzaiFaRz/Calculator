const calculatorInput = document.querySelector(".calc-input");
const calculatorAllClearBtn = document.querySelector(".AllClear");
const calculatorNumbers = document.querySelectorAll(".number");
const calculatorSignBtns = document.querySelectorAll(".sign");
const numberAnimation = document.querySelector(".number-animation");
let calculate = "";

calculatorInput.addEventListener("focus", (e) => {
  calculatorInput.blur();
});

const numberAnimationGsap = (numberanimationtext, numberanimationsize) => {
  numberAnimation.textContent = numberanimationtext;
  numberAnimation.style.fontSize = numberanimationsize;
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
          numberAnimationGsap("Plus", `${40}px`);
        } else if (
          calculatorNumbersElemsTargets.currentTarget.textContent === "-"
        ) {
          numberAnimationGsap("Minus", `${40}px`);
        } else if (
          calculatorNumbersElemsTargets.currentTarget.textContent === "/"
        ) {
          numberAnimationGsap("Devide", `${40}px`);
        } else if (
          calculatorNumbersElemsTargets.currentTarget.textContent === "%"
        ) {
          numberAnimationGsap("Percent", `${40}px`);
        } else {
          numberAnimationGsap(
            calculatorNumbersElemsTargets.currentTarget.textContent,
            "100px"
          );
        }

        if (calculatorNumbersElemsTargets.currentTarget.textContent === "=") {
          if (calculatorInput.value !== "0") {
            calculate = eval(calculate);
            calculatorInput.value = calculate;
            numberAnimationGsap(calculate, `${40}px`);
          }
        } else if (
          calculatorNumbersElemsTargets.currentTarget.textContent === "AC"
        ) {
          numberAnimationGsap("AC", `${40}px`);
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
          numberAnimationGsap("EC", `${40}px`);
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
