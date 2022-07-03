document.addEventListener("DOMContentLoaded", () => {
    //declaro variables vacias y funcion para asignarle inputs
    let divRazas = document.getElementById("divRazas")
    let raza = "";
    let clase = "";
    let nombre = "";
    function fnInputs(){
        raza = document.getElementById("raza");
        clase = document.getElementById("clase");
        nombre = document.getElementById("name");
    }
    fnInputs();
    raza.addEventListener("change", ()=>{
        arrayFetch.forEach((param)=>{
            if(raza.value == param.race){
               let x = document.createElement("p");
               divRazas.append()
               x.innerHTML=`<p>${param}</p>`
            }
        })
        
    })
    //recupero BBDD y profile para modificar a disposición
    let BBDD = JSON.parse(localStorage.getItem("BBDD"));
    let profile = JSON.parse(localStorage.getItem("profile"));
    class NewCharacter {
        constructor (nombre, raza, clase){
            this.nombre = nombre;
            this.raza = raza;
            this.clase = clase;
        }
    }
    //eventos al boton de crear personaje (toma values, certifica que no haya undefined y crea un nuevo personaje class NewCharacter. Luego lo pushea tanto al profile como al profile dentro de BBDD. Por ultimo seteamos el profile y BBDD y volvemos a tomar inputs en las variables)
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
            profile.personajes.push(character);
            for (let i = 0; i < BBDD.length; i++) {
                if (profile.user == BBDD[i].user) {
                    BBDD[i].personajes.push(character);
                    localStorage.setItem("BBDD", JSON.stringify(BBDD));
                    
                }
            }
            localStorage.setItem("profile", JSON.stringify(profile));
        }
        fnInputs();
    })
    
})