document.addEventListener("DOMContentLoaded", () => {
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
  let user = document.getElementById("user");
  let password = document.getElementById("password");
  let password2 = document.getElementById("password2");
  let mail = document.getElementById("mail");
  let personajes = [];
  let profile = "";
  let btnReg = document.getElementById("btn1");

  btnReg.addEventListener("click", (e) => {
    e.preventDefault();
  });
  btnReg.addEventListener("click", () => {
    user = user.value;
    password = password.value;
    password2 = password2.value;
    mail = mail.value;
    document.getElementById("approvalForm").classList.remove("displayHidden")
    profile = new UserData(user, password, mail, personajes)
    localStorage.setItem("profile", JSON.stringify(profile));
  });
  user.addEventListener("input", () => {
    (user.value !== "")?(document.getElementById("errorUser").classList.add("displayHidden")):(document.getElementById("errorUser").classList.remove("displayHidden"));
  })
  password.addEventListener("input", () => {
    (password.value != "")?(document.getElementById("errorPass").classList.add("displayHidden")):(document.getElementById("errorPass").classList.remove("displayHidden"))
  })
  password2.addEventListener("input", () => {
    if((password2.value === password.value)&&(password2.value !=="")){
      document.getElementById("errorPass2").classList.add("displayHidden");
      document.getElementById("approvalPass").classList.remove("displayHidden");
    }else{
      (document.getElementById("errorPass2").classList.remove("displayHidden"))
    }})
  mail.addEventListener("input", () => {
    ((mail.value !== "")&&(mail.value.includes("@")))?(document.getElementById("errorMail").classList.add("displayHidden")):(document.getElementById("errorMail").classList.remove("displayHidden"));
  })
});
