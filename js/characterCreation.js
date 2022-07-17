document.addEventListener("DOMContentLoaded", () => {
  //declaro variables vacias y funcion para asignarle inputs
  let divRazas = "";
  let divClases = "";
  let raza = "";
  let clase = "";
  let nombre = "";
  let dataRace1 = "";
  let dataRace2 = "";
  let dataRaceDiv = "";
  let classUl = "";
  let classLi = "";
  function fnInputs() {
    raza = document.getElementById("raza");
    clase = document.getElementById("clase");
    nombre = document.getElementById("name");
  }
  fnInputs();
  //traigo data del local storage
  JSON.parse(localStorage.getItem("razasPermitidas"));
  JSON.parse(localStorage.getItem("ciudades"));
  //evento "change": agrego data al DOM comparando el value de raza con la informacion de la misma en razasPermitidas
  raza.addEventListener("change", () => {
    divRazas = document.getElementById("divRazas");
    for (i = 0; i < razasPermitidas.length; i++) {
      if (raza.value == razasPermitidas[i].race) {
        divRazas.innerHTML = `
                <p class="dataRace1">RAZA: <span>${razasPermitidas[
                  i
                ].race.toUpperCase()}</span></p>
                <p class="dataRace1">PASIVA: <span>${
                  razasPermitidas[i].passive
                }</span></p>
                <p class="dataRace1">FACCIÓN: <span>${
                  razasPermitidas[i].faction
                }</span></p>
                <div id="dataRaceDiv">
                    <p class="dataRace2">CIUDAD: <span>${
                      razasPermitidas[i].city.nombre
                    }</span></p>
                    <p class="dataRace2">LÍDER: <span>${
                      razasPermitidas[i].city.lider
                    }</span></p>
                    <p class="dataRace2">POBLACIÓN TOTAL: <span>${
                      razasPermitidas[i].city.poblacion
                    }</span></p>
                </div>
        `;
      }
    }
    //estilos de los elementos de divRazas
    dataRace1 = document.getElementsByClassName("dataRace1");
    for (let i = 0; i < dataRace1.length; i++) {
      dataRace1[i].style.border = "#474541 groove 1rem";
      dataRace1[i].style.display = "block";
      dataRace1[i].style.fontSize = "3rem";
      dataRace1[i].style.backgroundColor = "#669d9f";
      dataRace1[i].style.margin = "0.5rem";
    }
    dataRace2 = document.getElementsByClassName("dataRace2");
    for (let i = 0; i < dataRace2.length; i++) {
      dataRace2[i].style.border = "#474541 groove 1rem";
      dataRace2[i].style.display = "block";
      dataRace2[i].style.fontSize = "3rem";
      dataRace2[i].style.backgroundColor = "#4d1d1d";
      dataRace2[i].style.margin = "0.5rem";
    }
    dataRaceDiv = document.getElementById("dataRaceDiv");
    dataRaceDiv.style.margin = "1rem";
  });
  JSON.parse(localStorage.getItem("clasesPermitidas"));
  //mismo evento "change" para la clase
  clase.addEventListener("change", () => {
    divClases = document.getElementById("divClases");
    for (let i = 0; i < clasesPermitidas.length; i++) {
      if (clase.value == clasesPermitidas[i].name) {
        divClases.innerHTML = `
                <ul id="classUl"> 
                    <li class="classLi">CLASE: ${clasesPermitidas[i].name}</li>
                    <li class="classLi">Rango: ${clasesPermitidas[i].distance}</li>
                    <li class="classLi">Especialización 1: ${clasesPermitidas[i].weapon1}</li>
                    <li class="classLi">Especialización 2: ${clasesPermitidas[i].weapon2}</li>
                    <li class="classLi">HP base: ${clasesPermitidas[i].hp}</li>
                    <li class="classLi">Fuente de poder: ${clasesPermitidas[i].powersource}</li>
                    <li class="classLi">AD base: ${clasesPermitidas[i].ad}</li>
                    <li class="classLi">AP base: ${clasesPermitidas[i].ap}</li>
                    <li class="classLi">Defensa base: ${clasesPermitidas[i].def}</li>
                    <li class="classLi">MR base: ${clasesPermitidas[i].mr}</li>
                </ul>`;
      }
    }
    classUl = document.getElementById("classUl");
    classUl.style.listStyle = "none"
    classUl.style.backgroundColor = "#7A8B82"
    classUl.style.border = "groove 1rem #2B201E"
    classLi = document.getElementsByClassName("classLi");
    for(let i=0; i< classLi.length; i++){
      classLi[i].style.border = "#70625F 1rem groove";
      classLi[i].style.display = "inline-block";
      classLi[i].style.fontSize = "2rem";
      classLi[i].style.backgroundColor = "#CDA49B";
      classLi[i].style.margin = "0.5rem";
    }
  });
  //recupero BBDD y profile para modificar a disposición
  let BBDD = JSON.parse(localStorage.getItem("BBDD"));
  let profile = JSON.parse(localStorage.getItem("profile"));
  class NewCharacter {
    constructor(nombre, raza, clase, lvl, equipamiento, logged) {
      this.nombre = nombre;
      this.raza = raza;
      this.clase = clase;
      this.lvl = lvl;
      this.equipamiento = equipamiento;
      this.logged = logged;
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
      let character = new NewCharacter(nombre, raza, clase, 1, [], false);
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
