document.addEventListener("DOMContentLoaded", () => {
    let raza = document.getElementById("raza");
    let clase = document.getElementById("clase");
    let nombre = document.getElementById("name");
    let profile = JSON.parse(localStorage.getItem("profile"));
    class NewCharacter {
        constructor (nombre, raza, clase){
            this.nombre = nombre;
            this.raza = raza;
            this.clase = clase;
        }
    }
    let btnChar = document.getElementById("btnChar");
    btnChar.addEventListener("click", (e)=>{e.preventDefault()})
    btnChar.addEventListener("click", () => {
        raza = raza.value;
        clase = clase.value;
        nombre = nombre.value;
        if(raza==undefined||clase==undefined||nombre==undefined){
            alert("El personaje no se guardó, intentelo de nuevo")
        }else{
            let character = new NewCharacter (nombre, raza, clase);
            console.log(character);
            console.log(profile.personajes)
            profile.personajes.push(character);
            console.log(profile.personajes)
            localStorage.setItem("profile", JSON.stringify(profile));
        }
    })

})