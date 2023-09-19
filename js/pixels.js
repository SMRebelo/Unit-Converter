const button = document.getElementById("logoOne");
const buttonSubmit = document.getElementById("buttonSubmit");

button.addEventListener("click", (event) => {
  document.getElementById("titleRight").innerHTML = `Pixel Converter`;
  document.getElementById("opcionInputOne").innerHTML = `Px`;
  document.getElementById("opcionInputTwo").innerHTML = `Em`;
  document.getElementById("opcionInputThree").innerHTML = `Rm`;
  document.getElementById("opcionOutputOne").innerHTML = `Px`;
  document.getElementById("opcionOutputTwo").innerHTML = `Em`;
  document.getElementById("opcionOutputThree").innerHTML = `Rm`;

  
});

