import { dataBS } from "./blacksmith.js";
document.addEventListener("DOMContentLoaded", () => {
  let profile = JSON.parse(localStorage.getItem("profile"));
  console.table(profile);
  let img = "";
  let restLvl = "";
  let p = "";
  let h3 = "";
  let equipado = [];

  let perfilInfo = document.getElementById("miInfo");
  let perfilChars = document.getElementById("misChars");
  let perfilInventario = document.getElementById("inventario");
  let perfilEquipamiento = document.getElementById("equipamiento");
  let inventario = profile.inventario;
  console.log(perfilInventario, perfilEquipamiento, inventario);

  perfilInfo.innerHTML = `<h3 class="title3">DATOS</h3><ul><li>${profile.user}</li><li>${profile.mail}</li></ul>`;
  for (let i = 0; i < profile.personajes.length; i++) {
    let newLi = document.createElement("ul");
    newLi.innerHTML = `<li>${profile.personajes[
      i
    ].nombre.toUpperCase()}</li><li>${profile.personajes[
      i
    ].raza.toUpperCase()}</li><li>${profile.personajes[
      i
    ].clase.toUpperCase()}</li>`;
    perfilChars.append(newLi);
  }
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
      equipItem = document.getElementsByClassName("equipItem");
      for (let i = 0; i < equipItem.length; i++) {
        equipItem[i].style.backgroundColor = "#0e4b4d";
        equipItem[i].style.border = "#474541 groove 1rem";
        equipItem[i].style.margin = "1rem";
        equipItem[i].style.display = "inline-block";
        equipItem[i].style.padding = "0.5rem";
      }
      let btnUnequip = document.getElementsByClassName("unequip");
      for (let i = 0; i < btnUnequip.length; i++) {
        btnUnequip[i].style.color = "#000000";
        btnUnequip[i].style.display = "inline-block";
        btnUnequip[i].style.backgroundColor = "#474541";
        btnUnequip[i].style.border = "#474541 groove 0.5rem";
        btnUnequip[i].style.margin = "0.5rem";
        btnUnequip[i].style.fontSize = "1rem";
        btnUnequip[i].style.padding = "0.3rem";
        btnUnequip[i].style.backgroundColor = "#7c6a2f";
        btnUnequip[i].addEventListener("click", ()=>{
          perfilEquipamiento.removeChild(equipItem[i]);
          btnEquip[i].innerText = "EQUIP"
        })
      }
    });
  }
});
