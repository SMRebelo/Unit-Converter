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

  function pixels() {
    let valueOne = (+document.getElementById("inputSelection")).value;
    let inputOne = document.getElementById("inputOne");
    let inputTwo = document.getElementById("inputTwo");
    
    if(inputOne == "Px"){
      let res=0;
      switch (inputTwo) {
        case "Em":
          res=valueOne/16;
          document.getElementById("result").innerHTML = res;
          break;
        case "Rem":

          break;
        default:
          break;
      }
    }
  
  }






  buttonSubmit.addEventListener("click", () => {
    pixels();
  })
});
