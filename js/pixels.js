const button = document.getElementById("logoOne");

button.addEventListener("click", (event) => {
  document.getElementById("titleRight").innerHTML = `Pixel Converter`;
  document.getElementById("opcionInputOne").innerHTML = `Px`;
  document.getElementById("opcionInputTwo").innerHTML = `Em`;
  document.getElementById("opcionInputThree").innerHTML = `Rm`;
  document.getElementById("opcionOutputOne").innerHTML = `Px`;
  document.getElementById("opcionOutputTwo").innerHTML = `Em`;
  document.getElementById("opcionOutputThree").innerHTML = `Rm`;

    let valueOne = +(document.getElementById("inputSelection").value);

});

