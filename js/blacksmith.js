let arrayFetch = "";
let divChildBS = "";
let img = "";
let p = "";
let btn = "";
let restLvl = "";

const childBS = () => {
  divChildBS = document.createElement("div");
  divChildBS.className += "divChildBS";
  divBS.appendChild(divChildBS);
  divChildBS.style.backgroundColor = "#0e4b4d";
  divChildBS.style.border = "#474541 groove 1rem";
  divChildBS.style.margin = "1rem";
  divChildBS.style.display = "inline-block"
  divChildBS.style.padding = "0.5rem"
};
const fetchBS = async () => {
  await fetch("https://www.gw2spidy.com/api/v0.9/json/all-items/all")
    // Exito
    .then((response) => response.json()) // convertir a json
    .then((json) => (arrayFetch = json.results)) //pasar el array del fetch a una variable
    .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores

  let divBS = document.getElementById("divBS");
  console.log(divBS);
  for (let i = 10; i <= 100; i++) {
    if (arrayFetch[i].name != "RC Controller"){
      childBS();
      divChildBS.innerHTML = `
          <h3>${JSON.stringify(arrayFetch[i].name)}</h3>
          <img class="img${i}" href=${JSON.stringify(arrayFetch[i].img)}>
          <p class="restLvl${i}">Nivel requerido=${JSON.stringify(
            arrayFetch[i].restriction_level
          )}</p>
          <p class="p${i}">Max. Offer: ${JSON.stringify(
            arrayFetch[i].max_offer_unit_price
          )}</p>
          <p class="p${i}">Min. Sale: ${JSON.stringify(
            arrayFetch[i].min_sale_unit_price
          )}</p>
          <p class="p${i}">Offer Availability=${JSON.stringify(
            arrayFetch[i].offer_availability
          )}</p>
          <p class="p${i}">Sale Availability=${JSON.stringify(
            arrayFetch[i].sale_availability
          )}</p>
          <p class="p${i}">Rarity=${JSON.stringify(arrayFetch[i].rarity)}</p>
          <button class="btn${i}">BUY</button>
          <button class="btn${i}">SELL</button>
          `;
  
      img = document.getElementsByClassName(`img${i}`)[0];
      img.style.height = "5rem";

      restLvl = document.getElementsByClassName(`restLvl${i}`)[0];
      restLvl.style.color = "red";

      p = document.getElementsByClassName(`p${i}`);
      btn = document.getElementsByClassName(`btn${i}`)
      for(i= 0; i<= btn.length-1; i++){
        btn[i].style.color = "#000000";
        btn[i].style.display = "inline-block";
        btn[i].style.backgroundColor = "#474541";
        btn[i].style.border = "#474541 groove 1rem";
        btn[i].style.margin = "0.5rem";
        btn[i].style.fontSize = "1rem"
        btn[i].style.padding = "0.3rem"
      }
      //tengo q ver como meter los a:
      //           a:link,
      //           a:visited,
      //           a:hover,
      //           a:active {
      //               text-decoration: none;
      //               color: #000000;
      //           }
      for (i = 0; i <= p.length - 1; i++) {
        p[i].style.color = "#151a1a";
      }
    }
  }
};
fetchBS();
