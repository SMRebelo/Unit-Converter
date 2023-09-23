import hexRgb from "hex-rgb";
import rgbHex from "rgb-hex";

export function clear(event) {
  document.getElementById("inputSelection").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("calculationWindow").innerHTML = "";
}

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

export function binary() {
  let valueOne = document.getElementById("inputSelection").value;
  let inputOneRes = document.getElementById("inputOne").value;
  let inputTwoRes = document.getElementById("inputTwo").value;

  let res;

  if (inputOneRes === "Bit") {
    switch (inputTwoRes) {
      case "Dec":
        res = parseInt(valueOne, 2);
        break;
      default:
        alert("Can't compare same types");

    }
  }
  if (inputOneRes === "Dec") {
    switch (inputTwoRes) {
      case "Bit":
        res = Number(valueOne).toString(2);
        break;
      default:
        alert("Can't compare same types");

    }
  }
  document.getElementById("result").innerHTML = res;
}

//? HERE STARTS THE FUNCTION FOR THE BYTES CONVERTER

export function bytes() {
  let valueOne = document.getElementById("inputSelection").value;
  let inputOneRes = document.getElementById("inputOne").value;
  let inputTwoRes = document.getElementById("inputTwo").value;
  let res;
  let display;

  if (inputOneRes === "bytes") {
    switch (inputTwoRes) {
      case "piB":
        res = (valueOne / 1125899906842624).toFixed(3) + " " + "PiB";
        display = `${valueOne} bytes = ${valueOne / 1125899906842624} PiB`;
        break;
      case "tiB":
        res = (valueOne / 1099511627776).toFixed(3) + " " + "TiB";
        display = `${valueOne} bytes = ${valueOne / 1099511627776} TiB`;
        break;
      case "giB":
        res = (valueOne / 1073741824).toFixed(3) + " " + "GiB";
        display = `${valueOne} bytes = ${valueOne / 1073741824} GiB`;
        break;
      case "miB":
        res = (valueOne / 1048576).toFixed(3) + " " + "MiB";
        display = `${valueOne} bytes = ${valueOne / 1048576} MiB`;
        break;
      case "kiB":
        res = (valueOne / 1024).toFixed(3) + " " + "KiB";
        display = `${valueOne} bytes = ${valueOne / 1024} KiB`;
        break;
      default:
        alert("Can't compare same values");
    }
  }

  if (inputOneRes === "kiB") {
    switch (inputTwoRes) {
      case "bytes":
        res = (valueOne * 1024).toFixed(3) + " " + "bytes";
        display = `${valueOne} KiB = ${valueOne * 1024} bytes`;
        break;
      case "miB":
        res = (valueOne / 1024).toFixed(3) + " " + "MiB";
        display = `${valueOne} KiB = ${(valueOne / 1024).toFixed(3)} MiB`;
        break;
      case "giB":
        res = (valueOne / 1048576).toFixed(3) + " " + "GiB";
        display = `${valueOne} KiB = ${(valueOne / 1048576).toFixed(3)} GiB`;
        break;
      case "tiB":
        res = (valueOne / 1073741824).toFixed(3) + " " + "TiB";
        display = `${valueOne} KiB = ${(valueOne / 1073741824).toFixed(3)} TiB`;
        break;
      case "piB":
        res = (valueOne / 1099511627776).toFixed(3) + " " + "PiB";
        display = `${valueOne} KiB = ${(valueOne / 1099511627776).toFixed(
          3
        )} PiB`;
        break;
      default:
        alert("Can't compare same values");
    }
  }

  if (inputOneRes === "miB") {
    switch (inputTwoRes) {
      case "bytes":
        res = (valueOne * 1048576).toFixed(3) + " " + "bytes";
        display = `${valueOne} MiB = ${valueOne * 1048576} bytes`;
        break;
      case "kiB":
        res = (valueOne * 1024).toFixed(3) + " " + "KiB";
        display = `${valueOne} MiB = ${valueOne * 1024} KiB`;
        break;
      case "giB":
        res = (valueOne / 1024).toFixed(3) + " " + "GiB";
        display = `${valueOne} MiB = ${(valueOne / 1024).toFixed(3)} GiB`;
        break;
      case "tiB":
        res = (valueOne / 1048576).toFixed(3) + " " + "TiB";
        display = `${valueOne} MiB = ${(valueOne / 1048576).toFixed(3)} TiB`;
        break;
      case "piB":
        res = (valueOne / 1073741824).toFixed(3) + " " + "PiB";
        display = `${valueOne} MiB = ${(valueOne / 1073741824).toFixed(3)} PiB`;
        break;
      default:
        alert("Can't compare same values");
    }
  }

  if (inputOneRes === "giB") {
    switch (inputTwoRes) {
      case "bytes":
        res = (valueOne * 1073741824).toFixed(3) + " " + "bytes";
        display = `${valueOne} GiB = ${valueOne * 1073741824} bytes`;
        break;
      case "kiB":
        res = (valueOne * 1048576).toFixed(3) + " " + "KiB";
        display = `${valueOne} GiB = ${valueOne * 1048576} KiB`;
        break;
      case "miB":
        res = (valueOne * 1024).toFixed(3) + " " + "MiB";
        display = `${valueOne} GiB = ${valueOne * 1024} MiB`;
        break;
      case "tiB":
        res = (valueOne / 1073741824).toFixed(3) + " " + "TiB";
        display = `${valueOne} GiB = ${valueOne / 1073741824}. TiB`;
        break;
      case "piB":
        res = (valueOne / 1099511627776).toFixed(3) + " " + "PiB";
        display = `${valueOne} GiB = ${valueOne / 1099511627776} PiB`;
        break;
      default:
        alert("Can't compare same values");
        break;
    }
  }
  if (inputOneRes === "tiB") {
    switch (inputTwoRes) {
      case "bytes":
        res = (valueOne * 1099511627776).toFixed(3) + " " + "bytes";
        display = `${valueOne} TiB = ${valueOne * 1099511627776} bytes`;
        break;
      case "kiB":
        res = (valueOne * 1073741824).toFixed(3) + " " + "KiB";
        display = `${valueOne} TiB = ${valueOne * 1073741824} KiB`;
        break;
      case "miB":
        res = (valueOne * 1048576).toFixed(3) + " " + "MiB";
        display = `${valueOne} TiB = ${valueOne * 1048576} MiB`;
        break;
      case "giB":
        res = (valueOne * 1024).toFixed(3) + " " + "GiB";
        display = `${valueOne} TiB = ${valueOne * 1024} GiB`;
        break;
      case "piB":
        res = (valueOne / 1024).toFixed(3) + " " + "PiB";
        display = `${valueOne} TiB = ${(valueOne / 1024).toFixed(3)} PiB`;
        break;
      default:
        alert("Can't compare same values");
        break;
    }
  }
  if (inputOneRes === "piB") {
    switch (inputTwoRes) {
      case "bytes":
        res = (valueOne * 1125899906842624).toFixed(3) + " " + "bytes";
        display = `${valueOne} PiB = ${valueOne * 1125899906842624} bytes`;
        break;
      case "kiB":
        res = (valueOne * 1099511627776).toFixed(3) + " " + "KiB";
        display = `${valueOne} PiB = ${valueOne * 1099511627776} KiB`;
        break;
      case "miB":
        res = (valueOne * 1073741824).toFixed(3) + " " + "MiB";
        display = `${valueOne} PiB = ${valueOne * 1073741824} MiB`;
        break;
      case "giB":
        res = (valueOne * 1048576).toFixed(3) + " " + "GiB";
        display = `${valueOne} PiB = ${valueOne * 1048576} GiB`;
        break;
      case "tiB":
        res = (valueOne * 1024).toFixed(3) + " " + "TiB";
        display = `${valueOne} PiB = ${valueOne * 1024} TiB`;
        break;
      default:
        alert("Can't compare same values");
        break;
    }
  }
  document.getElementById("result").innerHTML = res;
  document.getElementById("calculationWindow").innerHTML = display;
}
