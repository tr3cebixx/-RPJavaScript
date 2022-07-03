let arrayFetch = "";

const fetchBS = async () => {
    await fetch("https://www.gw2spidy.com/api/v0.9/json/all-items/all")
    // Exito
    .then((response) => response.json()) // convertir a json
    .then((json) => (arrayFetch = json.results)) //pasar el array del fetch a una variable
    .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores
    console.log(arrayFetch);

    let divBS = document.getElementById("divBS");
    console.log(divBS)
    for (let i = 1; i <= 20; i++) {
        let divChildBS = document.createElement("div");
        divChildBS.className += "divChildBS";
        divBS.appendChild(divChildBS);
        divChildBS.innerHTML = `
        <h3>${JSON.stringify(arrayFetch[i].name)}</h3>
        <img href=${JSON.stringify(arrayFetch[i].img)}>
        <p class="p">$$x1 (max offer)=${JSON.stringify(arrayFetch[i].max_offer_unit_price)}</p>
        <p class="p">$$x1 (min sale)=${JSON.stringify(arrayFetch[i].min_sale_unit_price)}</p>
        <p class="p">Disponibilidad de oferta=${JSON.stringify(arrayFetch[i].offer_availability)}</p>
        <p class="p">Disponibilidad de venta=${JSON.stringify(arrayFetch[i].sale_availability)}</p>
        <p class="p">Rareza=${JSON.stringify(arrayFetch[i].rarity)}</p>
        <p class="restLvl">Nivel requerido=${JSON.stringify(arrayFetch[i].restriction_level)}</p>
        `
  }
};
fetchBS();
