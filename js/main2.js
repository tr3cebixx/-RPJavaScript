//Funciones para registro
function agregarEvent(vari, label, evento, fn) {
  vari = document.getElementById(label);
  if (vari) {
    vari.addEventListener(evento, fn);
  }
}

const refresh = (vari, claseHTML, textoHTML) => {
  vari = document.getElementById(claseHTML);
  vari.innerHTML = textoHTML;
  return vari;
};

const acceptUser = () => {
  agregarEvent(userBtn, "btn1", "click", () => {
    refresh(
      userBtn,
      "regSelects",
      `<p class="approvalText"><strong>Así que te llamas ${user}? Un nombre apropiado para uno de los defensores del Código.</strong></p>
          <button id="btn2" class="boton">Siguiente</button>`
    );
  });
};

const contraseña = () => {
  agregarEvent(passBtn, "btn2", "click", () => {
    refresh(userBtn, "regSelects", "")
    refresh(
      passBtn,
      "charStats",
      `<p class="registerText">Repite tu contraseña, para asegurarnos que la recuerdes</p>
      <label for="password2" class="label"></label>
      <input type="password" name="password" id="password2">
      <button id="btn3" class="boton">Esta será mi contraseña!</button>`
    );
  });
  console.log(passBtn);
};

