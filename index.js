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
        let clickBtnText =
          calculatorNumbersElemsTargets.currentTarget.textContent;
        if (clickBtnText === "+") {
          numberAnimationGsap("Plus", `${40}px`);
        } else if (clickBtnText === "-") {
          numberAnimationGsap("Minus", `${40}px`);
        } else if (clickBtnText === "/") {
          numberAnimationGsap("Devide", `${40}px`);
        } else if (clickBtnText === "%") {
          numberAnimationGsap("Percent", `${40}px`);
        } else if (clickBtnText === "=") {
          try {
            if (calculatorInput.value !== "") {
              calculate = eval(calculate);
              calculatorInput.value = calculate;
              numberAnimationGsap(calculate, `${40}px`);
            }
          } catch (error) {
            numberAnimationGsap("Error", `${40}px`);
            calculate = "";
            calculatorInput.value = calculate;
            console.log("Incorrect Expression");
          }
        } else if (clickBtnText === "AC") {
          numberAnimationGsap("AC", `${40}px`);
          if (calculatorInput.value !== "") {
            calculate = "";
            calculatorInput.value = calculate;
          }
        } else if (clickBtnText === "EC") {
          numberAnimationGsap("EC", `${40}px`);
          if (calculatorInput.value !== "") {
            if (calculatorInput.value.slice(0, -1) === "") {
              calculate = "";
              calculatorInput.value = calculate;
            } else {
              calculate = calculatorInput.value.slice(0, -1);
              calculatorInput.value = calculate;
            }
          }
        } else {
          calculate += clickBtnText;
          calculatorInput.value = calculate;
        }
      } catch (error) {
        numberAnimationGsap("Error", `${40}px`);
        calculate = "";
        calculatorInput.value = calculate;
        console.log("Incorrect Expression");
      }
    }
  );
});
