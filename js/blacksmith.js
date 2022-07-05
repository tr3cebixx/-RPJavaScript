let arrayFetch = "";
let divChildBS = "";
let img = "";
let p = "";
let btn = "";
let restLvl = "";
let h3 = "";
let inventario = [];
let btnBuy = "";
let btnSell = "";

const childBS = () => {
  divChildBS = document.getElementsByClassName("divChildBS");
  for (i = 0; i < divChildBS.length; i++) {
    divChildBS[i].style.backgroundColor = "#0e4b4d";
    divChildBS[i].style.border = "#474541 groove 1rem";
    divChildBS[i].style.margin = "1rem";
    divChildBS[i].style.display = "inline-block";
    divChildBS[i].style.padding = "0.5rem";
  }
};
const fetchBS = async () => {
  await fetch("https://www.gw2spidy.com/api/v0.9/json/all-items/all")
    // Exito
    .then((response) => response.json()) // convertir a json
    .then((json) => (arrayFetch = json.results)) //pasar el array del fetch a una variable
    .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores

  let divBS = document.getElementById("divBS");
  divBS.style.border = "goldenrod groove 1rem";
  divBS.style.backgroundColor = "#7c6a2f";
  //Elimino resultados innecesarios del arrayFetch
  arrayFetch = arrayFetch.filter((item) => item.name != "RC Controller");
  for (i = 0; i < 30; i++) {
    arrayFetch.shift();
  }
  arrayFetch.forEach(x=>x.data_id = arrayFetch.indexOf(x))
  console.log(arrayFetch);
  //Plasmo items al DOM
  for (i = 0; i <= 200; i++) {
    divChildBS = document.createElement("div");
    divChildBS.className += "divChildBS";
    divBS.appendChild(divChildBS);
    divChildBS.innerHTML = `
          <h3 class="h3">${arrayFetch[i].name}</h3>
          <img class="img" src=${arrayFetch[i].img}>
          <p class="p">Max. Offer: ${arrayFetch[i].max_offer_unit_price}</p>
          <p class="p">Min. Sale: ${arrayFetch[i].min_sale_unit_price}</p>
          <p class="p">Offer Availability=${arrayFetch[i].offer_availability}</p>
          <p class="p">Sale Availability=${arrayFetch[i].sale_availability}</p>
          <p class="p">Rarity=${arrayFetch[i].rarity}</p>
          <button class="btn btnBuy">BUY</button>
          <button class="btn btnSell">SELL</button>
          <p class="restLvl">Nivel requerido=${arrayFetch[i].restriction_level}</p>
          `;
  }
  //Estilos de los items y sus etiquetas
  childBS();
  img = document.getElementsByClassName(`img`);
  for (i = 0; i < img.length; i++) {
    img[i].style.height = "5rem";
    img[i].style.width = "5rem";
    img[i].style.border = "#474541 groove 0.5rem";
    img[i].style.margin = "1rem";
  }

  restLvl = document.getElementsByClassName(`restLvl`);
  for (i = 0; i < restLvl.length; i++) {
    restLvl[i].style.color = "#4d0000";
    restLvl[i].style.fontSize = "1.5rem";
    restLvl[i].style.border = "0.3rem #000000 groove";
    restLvl[i].style.backgroundColor = "#474541";
  }

  p = document.getElementsByClassName(`p`);
  for (i = 0; i < p.length; i++) {
    p[i].style.color = "#151a1a";
  }

  h3 = document.getElementsByClassName("h3");
  for (i = 0; i < img.length; i++) {
    h3[i].style.border = "goldenrod 0.3rem groove";
    h3[i].style.backgroundColor = "#474541";
  }

  btn = document.getElementsByClassName(`btn`);
  for (i = 0; i < btn.length; i++) {
    btn[i].style.color = "#000000";
    btn[i].style.display = "inline-block";
    btn[i].style.backgroundColor = "#474541";
    btn[i].style.border = "#474541 groove 0.5rem";
    btn[i].style.margin = "0.5rem";
    btn[i].style.fontSize = "1rem";
    btn[i].style.padding = "0.3rem";
    btn[i].style.backgroundColor = "#7c6a2f";
  }
  //Agregar item al inventario, todavia no encuentro la forma
  btnBuy = document.getElementsByClassName("btnBuy");
  for (i = 0; i < btnBuy.length; i++) {
    btnBuy[i].addEventListener("click", () => {
      if (arrayFetch[i].data_id = i){
        inventario.push(arrayFetch[i]);
        console.log(arrayFetch[i])
      }
    });
  }
  btnSell = document.getElementsByClassName("btnSell");
  //tengo q ver como meter los a:
  //           a:link,
  //           a:visited,
  //           a:hover,
  //           a:active {
  //               text-decoration: none;
  //               color: #000000;
  //           }
};
fetchBS();
