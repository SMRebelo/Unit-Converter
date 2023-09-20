import hexRgb from "hex-rgb";
import rgbHex from "rgb-hex";

export function pixels() {
  let valueOne = +document.getElementById("inputSelection").value;
  let inputOneRes = document.getElementById("inputOne").value;
  let inputTwoRes = document.getElementById("inputTwo").value;
  let res = 0;
  let formula = "";

  if (inputOneRes === "Px") {
    switch (inputTwoRes) {
      case "Em":
      case "Rem":
        formula = `Px = ${inputTwoRes} / Font-size `;
        res = valueOne / 16; //! DONT FORGET TO ADD SOMETHING TO GET THE FONT-SIZE FROM THE BROWSER
        break;
      default:
        alert("Error chose another type.");
        document.getElementById("inputTwo").focus();
    }
  }
  if (inputOneRes === "Em") {
    switch (inputTwoRes) {
      case "Px":
      case "Rem":
        formula = `Em = ${inputTwoRes} * Font-size `;
        res = valueOne * 16;
        break;
      default:
        alert("Error chose another type.");
        document.getElementById("inputTwo").focus();
    }
  }
  if (inputOneRes === "Rem") {
    switch (inputTwoRes) {
      case "Px":
      case "Em":
        formula = `Rem = ${inputTwoRes} * Font-size`;
        res = valueOne * 16;
        break;

      default:
        alert("Error chose another type.");
        document.getElementById("inputTwo").focus();
    }
  }
  document.getElementById("result").innerHTML = res;
  document.getElementById("calculationWindow").innerHTML = formula;
  //? ONE OF THE BIG PROBLEMS WAS THAT I WASN´T CALLING THE FUNCTION IN THE END OF THE CLICK BUT OUTSIDE THE FUNCTION!!!
}

//! IMPORT LIBRARY FOR HEXADECIMAL TO RGB!!!

export function hexadecimal() {
  let valueOne = +document.getElementById("inputSelection").value;
  let inputOneRes = document.getElementById("inputOne").value; //! tens que mudar o value para alem do html em todos no js pixels.js
  let inputTwoRes = document.getElementById("inputTwo").value;
  let res = 0;
  console.log(inputOneRes);
  if (inputOneRes === "Hex") {
    switch (inputTwoRes) {
      case "Rgb":
        res = hexRgb(valueOne);
        break;

      default:
        alert("Cant compare same values");
    }
  }
  document.getElementById("result").innerHTML = res;
}
