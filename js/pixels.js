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
  alert("anicio");
  function pixels() {
    let valueOne = +(document.getElementById("inputSelection")).value;
    let inputOne = document.getElementById("inputOne");
    let inputTwo = document.getElementById("inputTwo");
    let res=0;

    if(inputOne == "Px"){
      
      switch (inputTwo) {
        case "Em":
          res=valueOne/16;
          document.getElementById("result").innerHTML = res;
          alert("em")
          break;
        case "Rem":
          res = valueOne/16;
          document.getElementById("result").innerHTML = res;
          alert("rem")
          break;
          case "Px":
          alert("Error chose another type.")
          document.getElementById("inputTwo").focus();
          alert("null")
          break;
        default:
          alert("default")
      }
    }else if(inputOne == "Em"){

      switch (inputTwo) {
        case "Px":
            res = valueOne*16;
            document.getElementById("result").innerHTML = res;
          break;
          case "Em":
            alert("Error chose another type.")
            document.getElementById("inputTwo").focus();
          break;
          case "Rem":
            res = valueOne*16;
            document.getElementById("result").innerHTML = res;
          break;
      
        default:
          break;
          alert("default")
      }
    }else if(inputOne == "Rem"){

      switch (inputTwo) {
        case "Px":
            res = valueOne*16;
            document.getElementById("result").innerHTML = res;
          break;            
          case "Rem":
            res = valueOne*16;
            document.getElementById("result").innerHTML = res;
          break;
          case "Em":
            alert("Error chose another type.")
            document.getElementById("inputTwo").focus();
          break;
      
        default:
          break;
          alert("default")
      }
  }
  buttonSubmit.addEventListener("click", () => {
    pixels();
  })
}});
