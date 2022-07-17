import { dataBS } from "./blacksmith.js";
//importo dataBS para modelar exactamente igual los items
document.addEventListener("DOMContentLoaded", () => {
  //traigo profile para trabajar con personajes, items y datos
  let profile = JSON.parse(localStorage.getItem("profile"));
  console.table(profile);
  //declaracion de variables que estan dentro de dataBS()
  let img = "";
  let restLvl = "";
  let p = "";
  let h3 = "";
  //atrapo elementos del DOM
  let perfilInfo = document.getElementById("miInfo");
  let perfilChars = document.getElementById("misChars");
  let perfilInventario = document.getElementById("inventario");
  let perfilEquipamiento = document.getElementById("equipamiento");
  let inventario = profile.inventario;
  let equipado = "";
  //informacion del usuario y personajes creados
  perfilInfo.innerHTML = `<h3 class="title3">DATOS</h3><ul><li>${profile.user}</li><li>${profile.mail}</li></ul>`;
  for (let i = 0; i < profile.personajes.length; i++) {
    let newLi = document.createElement("ul");
    newLi.innerHTML = `<li>${profile.personajes[i].nombre.toUpperCase()}</li>
    <li>${profile.personajes[i].raza.toUpperCase()}</li>
    <li>${profile.personajes[i].clase.toUpperCase()}</li>
    <li>${profile.personajes[i].lvl}</li>
    <li><button id="btnCh${i}">SELECCIONAR</li>`;
    perfilChars.append(newLi);
    //aca creo un equipamiento individual por cada personaje
    let btnCh = document.getElementById(`btnCh${i}`);
    btnCh.style.backgroundColor = "#669d9f"
    btnCh.style.border = "none"
    btnCh.style.height = "auto"
    btnCh.style.fontSize = "1.5rem"
    btnCh.style.paddingTop = "0.5rem";
    btnCh.style.color = "#0e4b4d"
    btnCh.addEventListener("click", ()=>{
      profile.personajes.forEach(el => {
        el.logged = false;
      });
      profile.personajes[i].logged = true;
      equipado = profile.personajes[i].equipamiento;
      console.log(profile.personajes[i])
    })
  }
  //plasmo los items del inventario en el DOM y les doy estilos
  for (let i = 0; i < inventario.length; i++) {
    let invItem = document.createElement("div");
    invItem.className += "invItem";
    perfilInventario.appendChild(invItem);
    invItem.innerHTML = `
    <h3 class="h3">${inventario[i].name}</h3>
    <img class="img" src=${inventario[i].img}>
    <p class="p">Max. Offer: ${inventario[i].max_offer_unit_price}</p>
    <p class="p">Min. Sale: ${inventario[i].min_sale_unit_price}</p>
    <p class="p">Rarity=${inventario[i].rarity}</p>
    <button class="equip">EQUIP</button>
    <p class="restLvl">Nivel requerido=${inventario[i].restriction_level}</p>
    `;
  }
  let invItem = document.getElementsByClassName("invItem");
  for (let i = 0; i < invItem.length; i++) {
    invItem[i].style.backgroundColor = "#0e4b4d";
    invItem[i].style.border = "#474541 groove 1rem";
    invItem[i].style.margin = "1rem";
    invItem[i].style.display = "inline-block";
    invItem[i].style.padding = "0.5rem";
  }
  dataBS();
  //estilos de boton y evento "click" para pushear el item de inventario a equipado y plasmar en el DOM
  let btnEquip = document.getElementsByClassName(`equip`);
  for (let i = 0; i < btnEquip.length; i++) {
    btnEquip[i].style.color = "#000000";
    btnEquip[i].style.display = "inline-block";
    btnEquip[i].style.backgroundColor = "#474541";
    btnEquip[i].style.border = "#474541 groove 0.5rem";
    btnEquip[i].style.margin = "0.5rem";
    btnEquip[i].style.fontSize = "1rem";
    btnEquip[i].style.padding = "0.3rem";
    btnEquip[i].style.backgroundColor = "#7c6a2f";
    btnEquip[i].addEventListener("click", () => {
      equipado.push(inventario[i]);
      btnEquip[i].innerText = "EQUIPED";
      let equipItem = document.createElement("div");
      equipItem.className += "equipItem";
      perfilEquipamiento.appendChild(equipItem);
      equipItem.innerHTML = `
      <h3 class="h3">${inventario[i].name}</h3>
      <img class="img" src=${inventario[i].img}>
      <p class="p">Max. Offer: ${inventario[i].max_offer_unit_price}</p>
      <p class="p">Min. Sale: ${inventario[i].min_sale_unit_price}</p>
      <p class="p">Rarity=${inventario[i].rarity}</p>
      <button class="unequip">UNEQUIP</button>
      <p class="restLvl">Nivel requerido=${inventario[i].restriction_level}</p>
      `;
      equipItem.style.backgroundColor = "#0e4b4d";
      equipItem.style.border = "#474541 groove 1rem";
      equipItem.style.margin = "1rem";
      equipItem.style.display = "inline-block";
      equipItem.style.padding = "0.5rem";
      //estoy teniendo un problema, cuando apreto unequip en un item de indice mas alto, los de indice mas bajo (dentro de la HTMLCollection equipItem) tambien se desequipan, o sea que el último item me desequipa todo el equipamiento :/ la idea es darle un evento que capture la HTMLCollection y elimine el elemento deseado, cambiando el boton equiped de inventario del mismo item, a "equip"
      let btnUnequip = document.getElementsByClassName("unequip");
      for (let i = 0; i < btnUnequip.length; i++) {
        btnUnequip[i].style.color = "#000000";
        btnUnequip[i].style.display = "inline-block";
        btnUnequip[i].style.backgroundColor = "#474541";
        btnUnequip[i].style.border = "#474541 groove 0.5rem";
        btnUnequip[i].style.margin = "0.5rem";
        btnUnequip[i].style.fontSize = "1rem";
        btnUnequip[i].style.padding = "0.3rem";
        btnUnequip[i].addEventListener("click", () => {
          equipItem = document.getElementsByClassName("equipItem")
          perfilEquipamiento.removeChild(equipItem[i]);
          btnEquip[i].innerText = "EQUIP";
        });
      }
    });
  }
});
