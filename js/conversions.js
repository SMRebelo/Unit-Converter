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

//? Here starts the function for the hexadecimal convertion

export function hexadecimal() {
  let valueOne = document.getElementById("inputSelection").value;
  let inputOneRes = document.getElementById("inputOne").value;
  let inputTwoRes = document.getElementById("inputTwo").value;
  let res = 0;

  if (inputOneRes === "Hex") {
    switch (inputTwoRes) {
      case "Rgb":
        res = hexRgb(valueOne);
        break;

      default:
        alert("Cant compare same values");
    }
    document.getElementById(
      "result"
    ).innerHTML = `rgb(${res.red}, ${res.green}, ${res.blue})`;
  }
  if (inputOneRes === "Rgb") {
    switch (inputTwoRes) {
      case "Hex":
        res = rgbHex(valueOne);
        break;

      default:
        alert("Cant compare same values");
    }
    document.getElementById("result").innerHTML = `#${res}`;
  }
}

//? Here starts the function for the birary convertion
//! FORMULA NOT WORKING YET!!!!!
export function binary() {
  let valueOne = document.getElementById("inputSelection").value;
  let inputOneRes = document.getElementById("inputOne").value;
  let inputTwoRes = document.getElementById("inputTwo").value;

  let binary = "";
  let decimal = 0;
  let i;
  let res;

  if (inputOneRes === "Bit") {
    switch (inputTwoRes) {
      case "Dec":
        if (typeof valueOne == "string") {
          // typeof operator checks the value of the argument
          binary = valueOne.split(); // if it is of the value string, splits it .
        } else {
          binary = valueOne.toString().split(); // If its not a string, the operator "toString" transforms it into a string
        }
        for (i = 0; i < binary.length; i++) {
          decimal = decimal * 2 + binary[i];
        }
        break;
      default:
        alert("Cant compare same types");
    }
  }
  document.getElementById("result").innerHTML = decimal;

  if (inputOneRes === "Dec") {
    switch (inputTwoRes) {
      case "Bit":
        if (!Number.isSafeInteger(valueOne) || valueOne < 0) {
          //? "!Number.isSafeInteger" -> if the number its NOT a integer, because of the sign "!". and if its negative, then throws an error!!
          alert("the value cant be a negative integer");
        }
        if (valueOne === 1) {
          return "1";
        }
        if (valueOne === 0) {
          return "0";
        }
        res = Math.floor(valueOne / 2) + (valueOne % 2);
        break;

      default:
        alert("Cant compare same types");
    }
    document.getElementById("result").innerHTML = res;
  }
}
//? HERE STARTS THE FUNCTION FOR THE BYTES CONVERTER

export function bytes() {
  let valueOne = document.getElementById("inputSelection").value;
  let inputOneRes = document.getElementById("inputOne").value;
  let inputTwoRes = document.getElementById("inputTwo").value;
  let res;

  if (inputOneRes === "bytes") {
    switch (inputTwoRes) {
      case "piB":
        res = (valueOne / 1125899906842624).toFixed(2) + " " + "PiB";
        break;
      case "tiB":
        res = (valueOne / 1099511627776).toFixed(2) + " " + "TiB";
        break;
      case "giB":
        res = (valueOne / 1073741824).toFixed(2) + " " + "GiB";
        break;
      case "miB":
        res = (valueOne / 1048576).toFixed(2) + " " + "MiB";
        break;
      case "kiB":
        res = (valueOne / 1024).toFixed(2) + " " + "KiB";
        break;
      default:
        alert("cant compare same values");
    }
  }document.getElementById("result").innerHTML = res;

  if(inputOneRes === "kiB"){
    switch (key) {
      case value:
        
        break;
    
      default:
        break;
    }
  }





}

