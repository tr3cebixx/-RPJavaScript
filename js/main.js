// document.addEventListener("DOMContentLoaded", () => {})         pa no olvidarme
const userList = [];
//Variables declaradas
let user = "";
let raza = "";
let clase = "";
let password = "";
let mail = "";

let btnReg = "";
let userBtn = "";
let passBtn = "";

agregarEvent(btnReg, "btnRegister", "click", () => {
  refresh(btnReg, "btnPadre", "");
});

agregarEvent(btnReg, "btnRegister", "click", () => {
  refresh(
    btnReg,
    "regSelects",
    `<p class="registerText">Bienvenido a Javascriptia, defensor del Código. Elige tu nombre <strong>(con cuidado, todos lo recordarán!)</strong></p>
        <label for="user" class="label">Tu nombre:</label>
        <input type="text" id="user">
        <button type="submit" id="btn1" class="boton">Este es mi nombre!</button>`
  );
  acceptUser()
});



