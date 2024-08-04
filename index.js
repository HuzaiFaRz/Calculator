var calcInput = document.querySelector(".calc-input");
var num1 = document.querySelector(".num-1");
// var num2 = document.querySelector(".num-2");
// var num3 = document.querySelector(".num-3");
// var num4 = document.querySelector(".num-4");
// var num5 = document.querySelector(".num-5");
// var num6 = document.querySelector(".num-6");
// var num7 = document.querySelector(".num-7");
// var num8 = document.querySelector(".num-8");
// var num9 = document.querySelector(".num-9");
// var num1 = document.querySelector(".num-0");
// var num1 = document.querySelector(".num-1");
// var num1 = document.querySelector(".num-1");
// var num1 = document.querySelector(".num-1");
// var num1 = document.querySelector(".num-1");

var nums = document.querySelectorAll("#num");
for (var i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", function () {
    calcInput.innerHTML = "32";
  });
}
