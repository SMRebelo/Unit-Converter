const button = document.getElementById("logoOne");
const buttonSubmit = document.getElementeById("submit");

button.addEventListener("click", (event) => {
  document.getElementById("titleRight").innerHTML = `Pixel Converter`;
  document.getElementById("opcionInputOne").innerHTML = `Px`;
  document.getElementById("opcionInputTwo").innerHTML = `Em`;
  document.getElementById("opcionInputThree").innerHTML = `Rm`;
  document.getElementById("opcionOutputOne").innerHTML = `Px`;
  document.getElementById("opcionOutputTwo").innerHTML = `Em`;
  document.getElementById("opcionOutputThree").innerHTML = `Rm`;

buttonSubmit.addEventListener("click"), () => {
  pixels();
})
function pixels()
    var valueOne = +(document.getElementById("inputSelection").value);
var inputSelectOne = document.getElementById("");
  var inputSelectTwo = document.getElementById("");

if(inputSelectOne == "Px"){
  let res = 0;
  switch(inputSelectTwo)
    case: "Em"; 
        res = valueOne/16;
  break;
}

  
  
});
