document.addEventListener("DOMContentLoaded", () => {
    let profile = JSON.parse(localStorage.getItem("profile"));
    let user = document.getElementById("user");
    let password = document.getElementById("password");
    (document.getElementById("btn1")).addEventListener("click", (e)=>{e.preventDefault()});
    (document.getElementById("btn1")).addEventListener("click", () => {
        ((user.value == profile.user)&&(password.value == profile.password))&&(alert(`eres el user ${profile.user}!`));
    })
})