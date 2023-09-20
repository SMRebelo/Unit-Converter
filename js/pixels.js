const button = document.getElementById("logoOne");
const buttonSubmit = document.getElementById("buttonSubmit");
let resFinal = 0;

button.addEventListener("click", (event) => {
  document.getElementById("titleRight").innerHTML = `Pixel Converter`;
  document.getElementById("opcionInputOne").innerHTML = `Px`;
  document.getElementById("opcionInputTwo").innerHTML = `Em`;
  document.getElementById("opcionInputThree").innerHTML = `Rem`;
  document.getElementById("opcionOutputOne").innerHTML = `Px`;
  document.getElementById("opcionOutputTwo").innerHTML = `Em`;
  document.getElementById("opcionOutputThree").innerHTML = `Rem`;
  console.log("inicio");
});

buttonSubmit.addEventListener("click", () => {
  pixels();
});

function pixels() {
  let valueOne = +(document.getElementById("inputSelection").value);
  let inputOneRes = document.getElementById("inputOne").value;
  let inputTwoRes = document.getElementById("inputTwo").value;
  let res = 0;

  if (inputOneRes === "Px") {

    switch (inputTwoRes) {
      case "Em": 
        res = valueOne / 16;
        break;
      
      case "Rem":
        res = valueOne / 16;
        break;
      case "Px": 
        alert("Error chose another type.");
        document.getElementById("inputTwo").focus();
        break;
      
      default: 
        alert("default case one");
      
    }
    res = resFinal;
  }
  if (inputOneRes === "Em") {
    switch (inputTwoRes) {
      case "Px":
        res = valueOne * 16;
        break;
      case "Em":
        alert("Error chose another type.");
        document.getElementById("inputTwo").focus();
        break;
      case "Rem":
        res = valueOne * 16;
        break;
      default:
        alert("default case two");
    }
    res = resFinal;
  }
  if (inputOneRes === "Rem") {
    switch (inputTwoRes) {
      case "Px":
        res = valueOne * 16;
        break;
      case "Em":
        res = valueOne * 16;
        break;
      case "Rem":
        alert("Error chose another type.");
        document.getElementById("inputTwo").focus();
        break;

      default:
        alert("default case three");
    }
    res = resFinal;
  }
  document.getElementById("result").innerHTML = resFinal;
} // fim da função pixels
