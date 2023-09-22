import { binary, bytes, hexadecimal, pixels } from "./conversions";

const buttonOne = document.getElementById("logoOne");
const buttonTwo = document.getElementById("logoTwo");
const buttonThree = document.getElementById("logoThree");
const buttonFour = document.getElementById("logoFour");

const buttonSubmit = document.getElementById("buttonSubmit");
const title = document.getElementById("titleRight");

buttonOne.addEventListener("click", (event) => {
  document.getElementById("titleRight").innerHTML = `Pixel Converter`;
  document.getElementById("opcionInputOne").innerHTML = `Px`;
  document.getElementById("opcionInputOne").value = `Px`; //? we must also change the value of the element not only its innerHTML
  document.getElementById("opcionInputTwo").innerHTML = `Em`;
  document.getElementById("opcionInputTwo").value = `Em`; //? we must also change the value of the element not only its innerHTML
  if (
    document.getElementById("opcionInputThree").classList.contains("invisible") // ?we must check if the elemente is visible to change it back!
  ) {
    document.getElementById("opcionInputThree").classList.remove("invisible");
    document.getElementById("opcionInputThree").classList.add("visible"); //? Uses a class ->"visible/invisivle" to hide and show the option
  }

  document.getElementById("opcionInputThree").innerHTML = `Rem`; //? we must do another innerHTML to rename the elemente!
  document.getElementById("opcionInputThree").value = `Rem`; //? we must also change the value of the element not only its innerHTML
  if (
    document.getElementById("opcionInputFour").classList.contains("visible")
  ) {
    document.getElementById("opcionInputFour").classList.remove("visible");
    document.getElementById("opcionInputFour").classList.add("invisible");
  }
  if (
    document.getElementById("opcionInputFive").classList.contains("visible")
  ) {
    document.getElementById("opcionInputFive").classList.remove("visible");
    document.getElementById("opcionInputFive").classList.add("invisible");
  }
  if (document.getElementById("opcionInputSix").classList.contains("visible")) {
    document.getElementById("opcionInputSix").classList.remove("visible");
    document.getElementById("opcionInputSix").classList.add("invisible");
  } //? HERE STARTS BUTTON ONE OPTION TWO !
  document.getElementById("opcionOutputOne").innerHTML = `Px`;
  document.getElementById("opcionOutputOne").value = `Px`;
  document.getElementById("opcionOutputTwo").innerHTML = `Em`;
  document.getElementById("opcionOutputTwo").value = `Em`;
  if (
    document.getElementById("opcionOutputThree").classList.contains("invisible") // we must check if the elemente is visible to change it back!
  ) {
    document.getElementById("opcionOutputThree").classList.remove("invisible");
    document.getElementById("opcionOutputThree").classList.add("visible"); // Uses a class ->"visible/invisivle" to hide and show the option
  }
  document.getElementById("opcionOutputThree").innerHTML = `Rem`; // we must do another innerHTML to rename the elemente!
  document.getElementById("opcionOutputThree").value = `Rem`;
  if (
    document.getElementById("opcionOutputFour").classList.contains("visible")
  ) {
    document.getElementById("opcionOutputFour").classList.remove("visible");
    document.getElementById("opcionOutputFour").classList.add("invisible");
  }
  if (
    document.getElementById("opcionOutputFive").classList.contains("visible")
  ) {
    document.getElementById("opcionOutputFive").classList.remove("visible");
    document.getElementById("opcionOutputFive").classList.add("invisible");
  }
  if (
    document.getElementById("opcionOutputSix").classList.contains("visible")
  ) {
    document.getElementById("opcionOutputSix").classList.remove("visible");
    document.getElementById("opcionOutputSix").classList.add("invisible");
  }
});

//? HERE STARTS FUNCTION FOR  BUTTON LOGO TWO
buttonTwo.addEventListener("click", (event) => {
  document.getElementById("titleRight").innerHTML = `Hexadecimal Converter`;
  document.getElementById("opcionInputOne").innerHTML = `Hex`;
  document.getElementById("opcionInputOne").value = `Hex`;
  document.getElementById("opcionInputTwo").innerHTML = `Rgb`;
  document.getElementById("opcionInputTwo").value = `Rgb`;
  if (
    document.getElementById("opcionInputThree").classList.contains("visible")
  ) {
    document.getElementById("opcionInputThree").classList.remove("visible");
    document.getElementById("opcionInputThree").classList.add("invisible");
  } // Uses a class ->"visible/invisivle" to hide and show the option
  if (
    document.getElementById("opcionInputFour").classList.contains("visible")
  ) {
    document.getElementById("opcionInputFour").classList.remove("visible");
    document.getElementById("opcionInputFour").classList.add("invisible");
  }
  if (
    document.getElementById("opcionInputFive").classList.contains("visible")
  ) {
    document.getElementById("opcionInputFive").classList.remove("visible");
    document.getElementById("opcionInputFive").classList.add("invisible");
  }
  if (document.getElementById("opcionInputSix").classList.contains("visible")) {
    document.getElementById("opcionInputSix").classList.remove("visible");
    document.getElementById("opcionInputSix").classList.add("invisible");
  }

  //? HERE STARTS THE BUTTON TWO FOR OPCION TWO.
  document.getElementById("opcionOutputOne").innerHTML = `Hex`;
  document.getElementById("opcionOutputOne").value = `Hex`;
  document.getElementById("opcionOutputTwo").innerHTML = `Rgb`;
  document.getElementById("opcionOutputTwo").value = `Rgb`;
  if (
    document.getElementById("opcionOutputThree").classList.contains("visible")
  ) {
    document.getElementById("opcionOutputThree").classList.remove("visible");
    document.getElementById("opcionOutputThree").classList.add("invisible");
  } // Uses a class ->"visible/invisivle" to hide and show the option
  if (
    document.getElementById("opcionOutputFour").classList.contains("visible")
  ) {
    document.getElementById("opcionOutputFour").classList.remove("visible");
    document.getElementById("opcionOutputFour").classList.add("invisible");
  }
  if (
    document.getElementById("opcionOutputFive").classList.contains("visible")
  ) {
    document.getElementById("opcionOutputFive").classList.remove("visible");
    document.getElementById("opcionOutputFive").classList.add("invisible");
  }
  if (
    document.getElementById("opcionOutputSix").classList.contains("visible")
  ) {
    document.getElementById("opcionOutputSix").classList.remove("visible");
    document.getElementById("opcionOutputSix").classList.add("invisible");
  }
});

//? HERE STARTS THE BUTTON FOR LOGO THREE!
buttonThree.addEventListener("click", (event) => {
  document.getElementById("titleRight").innerHTML = `Binary Converter`;
  document.getElementById("opcionInputOne").innerHTML = `Bit`;
  document.getElementById("opcionInputOne").value = `Bit`;
  document.getElementById("opcionInputTwo").innerHTML = `Dec`;
  document.getElementById("opcionInputTwo").value = `Dec`;
  if (
    document.getElementById("opcionInputThree").classList.contains("visible")
  ) {
    document.getElementById("opcionInputThree").classList.remove("visible");
    document.getElementById("opcionInputThree").classList.add("invisible");
  } // Uses a class ->"visible/invisivle" to hide and show the option
  if (
    document.getElementById("opcionInputFour").classList.contains("visible")
  ) {
    document.getElementById("opcionInputFour").classList.remove("visible");
    document.getElementById("opcionInputFour").classList.add("invisible");
  }
  if (
    document.getElementById("opcionInputFive").classList.contains("visible")
  ) {
    document.getElementById("opcionInputFive").classList.remove("visible");
    document.getElementById("opcionInputFive").classList.add("invisible");
  }
  if (document.getElementById("opcionInputSix").classList.contains("visible")) {
    document.getElementById("opcionInputSix").classList.remove("visible");
    document.getElementById("opcionInputSix").classList.add("invisible");
  }

  //? HERE STARTS THE BUTTON THREE FOR OPCION TWO.
  document.getElementById("opcionOutputOne").innerHTML = `Bit`;
  document.getElementById("opcionOutputOne").value = `Bit`;
  document.getElementById("opcionOutputTwo").innerHTML = `Dec`;
  document.getElementById("opcionOutputTwo").value = `Dec`;
  if (
    document.getElementById("opcionOutputThree").classList.contains("visible")
  ) {
    document.getElementById("opcionOutputThree").classList.remove("visible");
    document.getElementById("opcionOutputThree").classList.add("invisible");
  } // Uses a class ->"visible/invisivle" to hide and show the option
  if (
    document.getElementById("opcionOutputFour").classList.contains("visible")
  ) {
    document.getElementById("opcionOutputFour").classList.remove("visible");
    document.getElementById("opcionOutputFour").classList.add("invisible");
  }
  if (
    document.getElementById("opcionOutputFive").classList.contains("visible")
  ) {
    document.getElementById("opcionOutputFive").classList.remove("visible");
    document.getElementById("opcionOutputFive").classList.add("invisible");
  }
  if (
    document.getElementById("opcionOutputSix").classList.contains("visible")
  ) {
    document.getElementById("opcionOutputSix").classList.remove("visible");
    document.getElementById("opcionOutputSix").classList.add("invisible");
  }
});
// ? HERE STARTS THE BUTTON FOR LOGO FOUR.
buttonFour.addEventListener("click", (event) => {
  document.getElementById("titleRight").innerHTML = "Bytes Converter";

  document.getElementById("opcionInputOne").innerHTML = `bytes`;
  document.getElementById("opcionInputOne").value = `bytes`;
  document.getElementById("opcionInputTwo").innerHTML = `kiB`;
  document.getElementById("opcionInputTwo").value = `kiB`;
  if (
    document.getElementById("opcionInputThree").classList.contains("invisible")
  ) {
    document.getElementById("opcionInputThree").classList.remove("invisible");
    document.getElementById("opcionInputThree").classList.add("visible");
  }
  document.getElementById("opcionInputThree").innerHTML = `miB`;
  document.getElementById("opcionInputThree").value = `miB`;
  if (
    document.getElementById("opcionInputFour").classList.contains("invisible")
  ) {
    document.getElementById("opcionInputFour").classList.remove("invisible");
    document.getElementById("opcionInputFour").classList.add("visible");
  }
  document.getElementById("opcionInputFour").innerHTML = `giB`;
  document.getElementById("opcionInputFour").value = `giB`;
  if (
    document.getElementById("opcionInputFive").classList.contains("invisible")
  ) {
    document.getElementById("opcionInputFive").classList.remove("invisible");
    document.getElementById("opcionInputFive").classList.add("visible");
  }
  document.getElementById("opcionInputFive").innerHTML = `tiB`;
  document.getElementById("opcionInputFive").value = `tiB`;
  if (
    document.getElementById("opcionInputSix").classList.contains("invisible")
  ) {
    document.getElementById("opcionInputSix").classList.remove("invisible");
    document.getElementById("opcionInputSix").classList.add("visible");
  }
  document.getElementById("opcionInputSix").innerHTML = `piB`;
  document.getElementById("opcionInputSix").value = `piB`;

  //? HERE STARTS THE BUTTON FOUR FOR OPCION TWO.
  document.getElementById("opcionOutputOne").innerHTML = `bytes`;
  document.getElementById("opcionOutputOne").value = `bytes`;
  document.getElementById("opcionOutputTwo").innerHTML = `kiB`;
  document.getElementById("opcionOutputTwo").value = `kiB`;
  if (
    document.getElementById("opcionOutputThree").classList.contains("invisible")
  ) {
    document.getElementById("opcionOutputThree").classList.remove("invisible");
    document.getElementById("opcionOutputThree").classList.add("visible");
  }
  document.getElementById("opcionOutputThree").innerHTML = `miB`;
  document.getElementById("opcionOutputThree").value = `miB`;
  if (
    document.getElementById("opcionOutputFour").classList.contains("invisible")
  ) {
    document.getElementById("opcionOutputFour").classList.remove("invisible");
    document.getElementById("opcionOutputFour").classList.add("visible");
  }
  document.getElementById("opcionOutputFour").innerHTML = `giB`;
  document.getElementById("opcionOutputFour").value = `giB`;
  if (
    document.getElementById("opcionOutputFive").classList.contains("invisible")
  ) {
    document.getElementById("opcionOutputFive").classList.remove("invisible");
    document.getElementById("opcionOutputFive").classList.add("visible");
  }
  document.getElementById("opcionOutputFive").innerHTML = `tiB`;
  document.getElementById("opcionOutputFive").value = `tiB`;
  if (
    document.getElementById("opcionOutputSix").classList.contains("invisible")
  ) {
    document.getElementById("opcionOutputSix").classList.remove("invisible");
    document.getElementById("opcionOutputSix").classList.add("visible");
  }
  document.getElementById("opcionOutputSix").innerHTML = `piB`;
  document.getElementById("opcionOutputSix").value = `piB`;
});

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault(); //? The big mistake was that i was making a "form", and in a form we send the information to a API. of course it does stick on the screen!!! to prevent that we call the method "EVENT.PREVENTDEFAULT();" this makes the information displayed stick on the screen
  switch (
    title.innerHTML //? "innerHTML" is both to rewrite stuff in HTML and get infomation from HTML
  ) {
    case "Pixel Converter":
      pixels();
      break;
    case "Hexadecimal Converter":
      hexadecimal();
      break;
    case "Binary Converter":
      binary();
      break;
    case "Bytes Converter":
      bytes();
      break;
    default:
      break;
  }
});
