document.addEventListener("DOMContentLoaded", () => {
  //declaro variables vacias y funcion para asignarle inputs
  let divRazas = "";
  let raza = "";
  let clase = "";
  let nombre = "";
  let dataRace1 = "";
  let dataRace2 = "";
  let dataRaceDiv = "";
  function fnInputs() {
    raza = document.getElementById("raza");
    clase = document.getElementById("clase");
    nombre = document.getElementById("name");
  }
  fnInputs();
  JSON.parse(localStorage.getItem("razasPermitidas"));
  JSON.parse(localStorage.getItem("ciudades"));
  raza.addEventListener("change", () => {
    console.log(raza);
    console.log(divRazas);
    divRazas = document.getElementById("divRazas");
    for (i = 0; i < razasPermitidas.length; i++) {
      if (raza.value == razasPermitidas[i].race) {
        divRazas.innerHTML = `
                <p class="dataRace1">RAZA: <span>${razasPermitidas[i].race.toUpperCase()}</span></p>
                <p class="dataRace1">PASIVA: <span>${razasPermitidas[i].passive}</span></p>
                <p class="dataRace1">FACCIÓN: <span>${razasPermitidas[i].faction}</span></p>
                <div id="dataRaceDiv">
                    <p class="dataRace2">CIUDAD: <span>${razasPermitidas[i].city.nombre}</span></p>
                    <p class="dataRace2">LÍDER: <span>${razasPermitidas[i].city.lider}</span></p>
                    <p class="dataRace2">POBLACIÓN TOTAL: <span>${razasPermitidas[i].city.poblacion}</span></p>
                </div>
        `;
      }
    }
    dataRace1 = document.getElementsByClassName("dataRace1");
    for(let i=0; i<dataRace1.length; i++){
        dataRace1[i].style.border = "#474541 groove 1rem"
        dataRace1[i].style.display = "block"
        dataRace1[i].style.fontSize = "3rem"
        dataRace1[i].style.backgroundColor = "#669d9f"
        dataRace1[i].style.margin = "0.5rem"
    }
    dataRace2 = document.getElementsByClassName("dataRace2");
    for(let i=0; i<dataRace2.length; i++){
        dataRace2[i].style.border = "#474541 groove 1rem"
        dataRace2[i].style.display = "block"
        dataRace2[i].style.fontSize = "3rem"
        dataRace2[i].style.backgroundColor = "#4d1d1d"
        dataRace2[i].style.margin = "0.5rem"
    }
    dataRaceDiv = document.getElementById("dataRaceDiv")
    dataRaceDiv.style.margin = "1rem";
  });
  //recupero BBDD y profile para modificar a disposición
  let BBDD = JSON.parse(localStorage.getItem("BBDD"));
  let profile = JSON.parse(localStorage.getItem("profile"));
  class NewCharacter {
    constructor(nombre, raza, clase) {
      this.nombre = nombre;
      this.raza = raza;
      this.clase = clase;
    }
  }
  //eventos al boton de crear personaje (toma values, certifica que no haya undefined y crea un nuevo personaje class NewCharacter. Luego lo pushea tanto al profile como al profile dentro de BBDD. Por ultimo seteamos el profile y BBDD y volvemos a tomar inputs en las variables)
  let btnChar = document.getElementById("btnChar");
  btnChar.addEventListener("click", (e) => {
    e.preventDefault();
  });
  btnChar.addEventListener("click", () => {
    raza = raza.value;
    clase = clase.value;
    nombre = nombre.value;
    if (raza == undefined || clase == undefined || nombre == undefined) {
      alert("El personaje no se guardó, intentelo de nuevo");
    } else {
      let character = new NewCharacter(nombre, raza, clase);
      profile.personajes.push(character);
      for (let i = 0; i < BBDD.length; i++) {
        if (profile.user == BBDD[i].user) {
          BBDD[i].personajes.push(character);
          localStorage.setItem("BBDD", JSON.stringify(BBDD));
        }
      }
      localStorage.setItem("profile", JSON.stringify(profile));
    }
    fnInputs();
  });
});
