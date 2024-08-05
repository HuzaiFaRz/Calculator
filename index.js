const calculatorInput = document.querySelector(".calc-input");
const calculatorNumber = document.querySelectorAll(".number");
const calculatorEqualBtn = document.querySelector("#equal");
const calculatorDeleteBtn = document.querySelector("#delete");

Array.from(calculatorNumber).forEach((calculatorNumberElem) => {
  calculatorNumberElem.addEventListener(
    "click",
    (calculatorNumberElemTarget) => {
      let calculatorNumberElemTargetTextContent =
        calculatorNumberElemTarget.currentTarget.textContent;

      calculatorInput.value += calculatorNumberElemTargetTextContent;
      if (calculatorNumberElemTarget.currentTarget.textContent === "+") {
        calculatorEnterBtn.addEventListener("click", () => {
          console.log(this);

          calculatorInput.value = calculatorInput.value +=
            calculatorInput.value;
        });
      }
      if (calculatorNumberElemTargetTextContent === "Delete") {
        calculatorInput.value = "";
      }
    }
  );
});
