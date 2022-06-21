document.addEventListener("DOMContentLoaded", () => {
    profile = JSON.parse(localStorage.getItem("profile"));
    userList = JSON.parse(localStorage.getItem("userList"))
    console.table(profile);
    console.log(userList);
    let nombre = profile.personajes[0].nombre;
    console.log(nombre);
    let raza = profile.personajes[0].raza;
    console.log(raza);
    let clase = profile.personajes[0].clase;
    console.log(clase);
    let div = document.getElementsByClassName("div");
    if (profile.personajes.length > 0){
        for(i=0; i= profile.personajes.length; i++){
            (div.append(document.createElement("ul"))).innerHTML = `<ul class="characterX">
            <li class= "characterData">Nombre: ${nombre.toUpperCase()}.</li>
            <li class= "characterData">Raza: ${raza.toUpperCase()}.</li>
            <li class= "characterData">Clase: ${clase.toUpperCase()}.</li>
        </ul>`
            
        }
    }

})

