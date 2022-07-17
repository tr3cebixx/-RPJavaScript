//creo base de datos y clase UserData para crear cada perfil
let BBDD = [];
document.addEventListener("DOMContentLoaded", () => {
  class UserData {
    constructor(user, password, mail, personajes, inventario) {
      this.user = user;
      this.password = password;
      this.mail = mail;
      this.personajes = personajes;
      this.inventario = inventario
    }
  }
  let profile = "";

  let user = "";
  let password = "";
  let password2 = "";
  let mail = "";
  let personajes = [];
  let inventario = [];
  //funcion para tomar inputs en variables
  const getElems = () => {
    user = document.getElementById("user");
    password = document.getElementById("password");
    password2 = document.getElementById("password2");
    mail = document.getElementById("mail");
  };
  //sweet alert
  function alertReg() {
    Swal.fire({
      title: "Perfecto!",
      text: "Es solo cuestión de tiempo hasta que te comiencen a llegar las proximas ediciones del JS Times.",
      icon: "success",
      confirmButtonText:
        '<a href="./character.html">Haz click aquí para crear tu personaje</a>',
    });
  }

  getElems();
  //agrego evento "click" al boton de registro, tomo los values de los inputs, traigo la database del local storage y si no esta vacía, concatenamos con la BBDD. luego creo un nuevo profile clase UserData, pusheandolo a la BBDD y seteando BBDD y profile en el local storage.
  let btnReg = document.getElementById("btn1");
  btnReg.addEventListener("click", (e) => {
    e.preventDefault();
  });
  btnReg.addEventListener("click", () => {
    user = user.value;
    password = password.value;
    password2 = password2.value;
    mail = mail.value;

    let database = localStorage.getItem("BBDD");
    database = JSON.parse(database);
    if (database != null) {
      BBDD = BBDD.concat(database);
    }
    profile = new UserData(user, password, mail, personajes, inventario);
    BBDD.push(profile);
    console.table(BBDD);

    localStorage.setItem("BBDD", JSON.stringify(BBDD));
    localStorage.setItem("profile", JSON.stringify(profile));
    //el .pop() es para evitar que al crear muchos usuarios, se multipliquen en la base de datos, luego vuelvo a tomar los inputs en las variables para el proximo evento de click y tiro la sweet alert
    BBDD.pop();
    getElems();
    alertReg();
  });
  //clase hidden de los mensajes de error y success
  user.addEventListener("input", () => {
    user.value !== ""
      ? document.getElementById("errorUser").classList.add("displayHidden")
      : document.getElementById("errorUser").classList.remove("displayHidden");
  });
  password.addEventListener("input", () => {
    password.value != ""
      ? document.getElementById("errorPass").classList.add("displayHidden")
      : document.getElementById("errorPass").classList.remove("displayHidden");
  });
  password2.addEventListener("input", () => {
    if (password2.value === password.value && password2.value !== "") {
      document.getElementById("errorPass2").classList.add("displayHidden");
      document.getElementById("approvalPass").classList.remove("displayHidden");
    } else {
      document.getElementById("errorPass2").classList.remove("displayHidden");
    }
  });
  mail.addEventListener("input", () => {
    mail.value !== "" && mail.value.includes("@")
      ? document.getElementById("errorMail").classList.add("displayHidden")
      : document.getElementById("errorMail").classList.remove("displayHidden");
  });
});
