document.addEventListener("DOMContentLoaded", () => {
    BBDD = JSON.parse(localStorage.getItem("BBDD"))
    let user = document.getElementById("user");
    let password = document.getElementById("password");
    let btn1 = document.getElementById("btn1");
    let profile = "";
    btn1.addEventListener("click", (e)=>{e.preventDefault()});
    btn1.addEventListener("click", () => {
        for(i= 0; i< BBDD.length; i++){
            if((user.value == BBDD[i].user)&&(password.value == BBDD[i].password)){
                let div = document.getElementsByClassName("div")
                div = div[0];
                let form = document.getElementsByClassName("form")
                form = form[0];
                div.removeChild(form)
                let successLog = document.createElement("div");
                div.appendChild(successLog);
                successLog.id += "successLog";
                successLog.innerHTML = `<h3 id="h3">Inicio de sesión completado! Bienvenido de vuelta ${BBDD[i].user.toUpperCase()}</h3><button class="boton" id="btn2"><a href="./inicio.html">IR AL INICIO</a></button>`
                let h3 = document.getElementById("h3");
                let btn2 = document.getElementById("btn2")
                
                btn2.style.color = "#000000";
                btn2.style.display = "block";
                btn2.style.backgroundColor = "#7c6a2f";
                btn2.style.border = "goldenrod groove 0.5rem";
                btn2.style.margin = "1rem auto";
                btn2.style.fontSize = "2rem";
                btn2.style.padding = "0.5rem";

                h3.style.color = "#000000";
                h3.style.display = "block";
                h3.style.backgroundColor = "#0e4b4d";
                h3.style.border = "#336559 groove 0.5rem";
                h3.style.margin = "1rem auto";
                h3.style.fontSize = "5rem";
                h3.style.padding = "0.5rem";
                
                h3.style.textDecorationColor = "black"
                
                successLog.style.color = "#000000";
                successLog.style.display = "block";
                successLog.style.backgroundColor = "#474541";
                successLog.style.border = "#474541 groove 0.5rem";
                successLog.style.margin = "0.5rem";
                successLog.style.fontSize = "1rem";
                successLog.style.padding = "0.3rem";
                
                profile = BBDD[i];
                console.log(profile)
            }
        }
    })
})