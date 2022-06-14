// document.addEventListener("DOMContentLoaded", () => {})         pa no olvidarme
const userList = [];
class UserData {
  constructor(user, password, mail, personajes) {
    this.user = user;
    this.password = password;
    this.mail = mail;
    this.personajes = personajes;
  }
}
//Variables declaradas
let user = "";
let raza = "";
let clase = "";
let password = "";
let password2 = "";
let mail = "";
const personajes = [];

let btnReg = document.getElementById("btn1");
btnReg.addEventListener("click", (e)=>{e.preventDefault()})
btnReg.addEventListener("click",() => {
  ()=>{return user = document.getElementById("user").value}
  ()=>{return password = document.getElementById("password").value}
  ()=>{return password2 = document.getElementById("password2").value}
  ()=>{return mail = document.getElementById("mail").value}
  console.log(user)
  console.log(password)
  console.log(password2)
  console.log(mail)
})

