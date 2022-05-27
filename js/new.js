const userList = [];

const razasPermitidas = [
  "humano",
  "orco",
  "elfo",
  "enano",
  "goblin",
  "trol",
  "demonio",
];

const clasesPermitidas = [
  "caballero",
  "berserker",
  "paladin",
  "cazador",
  "asesino",
  "mago",
  "brujo",
  "sacerdote",
  "espadachin",
  "caballero oscuro",
  "monje",
];

let user = "";
let raza = "";
let clase = "";
let password = "";
let mail = "";

class UserBase {
  constructor(user, raza, clase, password, mail) {
    this.user = user;
    this.raza = raza;
    this.clase = clase;
    this.password = password;
    this.mail = mail;
  }
}

function pickUser() {
  user = prompt(
    "Bienvenido a Javascriptia, defensor del Código. Elige tu nombre (con cuidado, todos lo recordarán!)"
  );

  if (user !== "") {
    alert(
      `Así que te llamas ${user}? Un nombre apropiado para uno de los defensores del Código.`
    );
  } else {
    while (user == "") {
      user = prompt("Estoy seguro de que tienes algún nombre, no seas tímido");
    }
  }

  user = user.toLowerCase();

  return console.log(user); //viendo si lo saco
}

function pickPassword() {
  password = prompt("Ingresa tu contraseña, pero no vayas a olvidarla");
  if (password !== "") {
    let password2 = prompt(
      "Repite tu contraseña, para asegurarnos que la recuerdes"
    );
    if (password2 === password) {
      alert("Muy bien! Esta será tu nueva contraseña");
    } else {
      while (password2 !== password) {
        password2 = prompt(
          `Hey, las contraseñas no coinciden, escribe con mas cuidado, ${user}!`
        );
      }
    }
  } else {
    while (password == "") {
      password = prompt(
        "Debes ingresar una contraseña, sino cualquiera podrá robarte..."
      );
    }
  }
}

function pickMail() {
  mail = prompt(
    `Muy bien, ${user}, ahora necesitaré que me indiques tu correo electrónico para que estés al tanto de todo lo que sucede en Javascriptia`
  );
  if (mail !== "" && mail.includes("@")) {
    alert(
      `Perfecto, ${user}, es solo cuestión de tiempo hasta que te comiencen a llegar las proximas ediciones del JS Times a: ${mail}`
    );
  } else {
    while (mail == "" || !mail.includes("@")) {
      mail = prompt(
        `"${mail}"? Ingresa un formato de correo válido (ej: orcusporcus@mail.com).`
      );
    }
  }
}

function pickRaza() {
  let razasPermitidasMayuscula = razasPermitidas.map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1);
  });
  raza = prompt(
    `Muy bien, ${user} ahora cuentame, de que raza provienes?\n` +
      razasPermitidasMayuscula.join("\n") //me gustaria que la inicial sea en mayuscula
  );

  raza = raza.toLowerCase();
  console.log(raza);

  if (razasPermitidas.includes(raza)) {
    alert(`Oh, un joven ${raza}, tienes mucho potencial.`);
  } else {
    while (!razasPermitidas.includes(raza)) {
      raza = prompt(
        "Esa no es una raza de este mundo! Elige una raza de verdad:\n" +
          razasPermitidas.join("\n")
      );
      raza = raza.toLowerCase();
    }
  }
  console.log(raza);
}

function pickClase() {
  let clasesPermitidasMayuscula = clasesPermitidas.map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1);
  });
  clase = prompt(
    "En RPJS hay guerreros de distintas clases, que te enseñaran todo lo que necesitas para ser un gran defensor, así que deberas elegir una:\n" +
      clasesPermitidasMayuscula.join("\n")
  );

  clase = clase.toLowerCase();
  console.log(clase);

  if (clasesPermitidas.includes(clase)) {
    alert(
      `Entonces serás ${user}, el más grande ${clase} entre todos los ${raza}s.`
    );
  } else {
    while (!clasesPermitidas.includes(clase)) {
      clase = prompt(
        `'${clase}'?? Aquí no tenemos instructores de eso... puedes elegir entre:\n` +
          clasesPermitidas.join("\n")
      );
      clase = clase.toLowerCase();
    }
  }
  console.log(clase);
}

function refresh() {
  let refresh = document.getElementById("btnPadre");
  refresh.innerHTML = "";
}

function regSelects() {
  let regSels = document.getElementById("regSelects");
  regSels.innerHTML = `<form class="formReg">\n<div class="divform">\n<label for="raza">Elige una raza:</label>\n<select id="raza" name="raza" class="selector">\n<option value="humano">Humano</option>\n<option value="orco">Orco</option>\n<option value="elfo">Elfo</option>\n<option value="enano">Enano</option>\n<option value="goblin">Goblin</option>\n<option value="trol">Trol</option>\n<option value="demonio">Demonio</option>\n</select>\n</div>\n<div class="divform">\n<label for="clase">Elige una clase:</label>\n<select id="clase" name="clase" class="selector">\n<option value="caballero">Caballero</option>\n<option value="berserker">Berserker</option>\n<option value="paladin">Paladin</option>\n<option value="cazador">Cazador</option>\n<option value="asesino">Asesino</option>\n<option value="mago">Mago</option>\n<option value="brujo">Brujo</option>\n<option value="sacerdote">Sacerdote</option>\n<option value="espadachin">Espadachin</option>\n<option value="caballero oscuro">Caballero Oscuro</option>\n<option value="monje">Monje</option>\n</select>\n</div>\n</form>`;
}

function stats() {
  let character = document.getElementById("charStats");

  character.innerHTML = `<li class= "liStats">Nombre: ${user.toUpperCase()}.</li>\n<li class= "liStats">Raza: ${raza.toUpperCase()}.</li>\n<li class= "liStats">Clase: ${clase.toUpperCase()}.</li>\n<li class= "liStats">Correo: ${mail.toLowerCase()}</li>`;
}

let profile1 = "";

function createUser() {
  profile1 = new UserBase(user, raza, clase, password, mail);
  console.table(profile1);
  
}

function register() {
  refresh();
  pickUser();
  pickPassword();
  pickMail();
  pickRaza();
  pickClase();
  stats();
  createUser();
}

function login() {
  refresh();
  regSelects();
}

let btnReg = document.getElementById("btnRegister");
btnReg.addEventListener("click", register);

let btnLog = document.getElementById("btnLogin");
btnLog.addEventListener("click", login);

console.log(profile1);
userList.push(profile1);
console.log(userList);
