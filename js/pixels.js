import { binary, hexadecimal, pixels } from "./conversions";

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
});

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
});

buttonThree.addEventListener("click", (event) =>{
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
})

buttonFour.addEventListener("click", (event) =>{







  
})

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
    default:
      break;
  }
});