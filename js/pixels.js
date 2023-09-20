const button = document.getElementById("logoOne");
const buttonSubmit = document.getElementById("buttonSubmit");

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

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault(); //? The big mistake was that i was making a "form", and in a form we send the information to a API. of course it does stick on the screen!!! to prevent that we call the method "EVENT.PREVENTDEFAULT();" this makes the information displayed stick on the screen

  function pixels() {
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
  } // fim da função pixels
  pixels(); //? ONE OF THE BIG PROBLEMS WAS THAT I WASN´T CALLING THE FUNCTION IN THE END OF THE CLICK BUT OUTSIDE THE FUNCTION!!!
});
