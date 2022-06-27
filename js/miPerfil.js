document.addEventListener("DOMContentLoaded", () => {
  let profile = JSON.parse(localStorage.getItem("profile"));
  console.table(profile);

  let perfilInfo = document.getElementById("miInfo");
  let perfilChars = document.getElementById("misChars");
  
  perfilInfo.innerHTML = `<h3 class="title3">DATOS</h3><ul><li>${profile.user}</li><li>${profile.mail}</li></ul>`;
  for (let i=0; i<profile.personajes.length; i++) {
    let newLi = document.createElement('ul');
    newLi.innerHTML = `<li>${profile.personajes[i].nombre.toUpperCase()}</li><li>${profile.personajes[i].raza.toUpperCase()}</li><li>${profile.personajes[i].clase.toUpperCase()}</li>`;
    perfilChars.append(newLi);
  }
});
