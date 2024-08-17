const calculatorInput = document.querySelector(".calc-input");
const calculatorAllClearBtn = document.querySelector(".AllClear");
const calculatorNumbers = document.querySelectorAll(".number");
const calculatorSignBtns = document.querySelectorAll(".sign");
const numberAnimation = document.querySelector(".number-animation");
let calculate = "";
let clickBtnText;

calculatorInput.addEventListener("focus", () => {
  calculatorInput.blur();
});

let gsapTl = gsap.timeline();
console.log(gsapTl);

const numberAnimationGsap = (text, size) => {
  numberAnimation.textContent = text;
  numberAnimation.style.fontSize = size;
  gsapTl.from(numberAnimation, {
    opacity: 0,
    scale: 2.5,
    duration: 0.5,
    ease: Power2.easeInOut,
    onComplete: () => {
      gsapTl.from(numberAnimation, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: Power2.easeInOut,
      });
    },
  });
};

Array.from(calculatorNumbers).forEach((calculatorNumbersElems) => {
  calculatorNumbersElems.addEventListener(
    "click",
    (calculatorNumbersElemsTargets) => {
      try {
        clickBtnText = calculatorNumbersElemsTargets.currentTarget.textContent;
        if (clickBtnText === "=") {
          if (calculatorInput.value !== "") {
            calculate = eval(calculate);
            calculatorInput.value = calculate;
          }
        } else if (clickBtnText === "AC") {
          if (calculatorInput.value !== "") {
            calculate = "";
            calculatorInput.value = calculate;
          }
        } else if (clickBtnText === "EC") {
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
        switch (clickBtnText) {
          case "AC":
            numberAnimationGsap("AC", `${40}px`);
            break;
          case "EC":
            numberAnimationGsap("EC", `${40}px`);
            break;
          case "=":
            numberAnimationGsap(calculate, `${40}px`);
            break;
          case "+":
            numberAnimationGsap("Plus", `${40}px`);
            break;
          case "-":
            numberAnimationGsap("Minus", `${40}px`);
            break;
          case "/":
            numberAnimationGsap("Devide", `${40}px`);
            break;
          case "%":
            numberAnimationGsap("Percent", `${40}px`);
            break;
          default:
            numberAnimationGsap(clickBtnText, `${70}px`);
            break;
        }
      } catch (error) {
        error = "Incorrect Expression";
        numberAnimationGsap("Error", `${40}px`);
        calculate = "";
        calculatorInput.value = calculate;
        console.log(error);
      }
    }
  );
});
