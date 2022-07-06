//Acá, creo las razas permitidas, con su nombre, facción y habilidad pasiva; y su array correspondiente.
class Raza {
  constructor(race, faction, passive, city) {
    this.race = race;
    this.faction = faction;
    this.passive = passive;
    this.city = city;
  }
}

const humano = new Raza("Humano", "Defensores del Código", "Orgullo humano", "Rasganorte");
const orco = new Raza("Orco", "Legión Demoníaca", "Furia ciega", "Fuerte Lok'Tar Ogar");
const elfo = new Raza("Elfo", "Defensores del Código", "Ojo de Halcón", "Ciudadela de Plata");
const enano = new Raza("Enano", "Defensores del Código", "Dureza Férrea", "Nordinbad");
const goblin = new Raza("Goblin", "Defensores del Código", "Ingenio goblin", "Metropoblinks");
const trol = new Raza("Trol", "Legión Demoníaca", "Cazador nato", "Aldea Vol'Jamba");
const demonio = new Raza("Demonio", "Legión Demoníaca", "Presencia demoníaca", "Vacío Abisal");

const defensores = [humano, elfo, goblin, enano];
const legion = [orco, trol, demonio];
const razasPermitidas = defensores.concat(legion);

class Ciudad {
  constructor(nombre, lider, razaNata, poblacion, faccionAlly, capital) {
    this.nombre = nombre;
    this.lider = lider;
    this.razaNata = razaNata;
    this.poblacion = poblacion;
    this.faccionAlly = faccionAlly;
    this.capital = capital;
  }
}

const Rasganorte = new Ciudad("Rasganorte", "Varyann Hunterville", "Humano", 250000, "Defensores del Código", false );
humano.city = Rasganorte;
const SilverCitadel = new Ciudad("Ciudadela de Plata", "Idril Elentari", "Elfo", 400000, "Defensores del Código", true);
elfo.city = SilverCitadel;
const Nordinbad = new Ciudad("Nordinbad", ["Thorin Thundergrimm", "Thurimar Thundergrimm", "Magni Thundergrimm"], "Enano", 200000, "Defensores del Código", false);
enano.city = Nordinbad;
const Metropoblinks = new Ciudad("Metrópoblinks", "Dazz Gallywix", "Goblin", 200000, "Defensores del Código", false);
goblin.cit
const LokTarOgar = new Ciudad("Fuerte Lok'Tar Ogar", "Zug Ironhand", "Orco", 350000, "Legión Demoníaca", false);
const VolJamba = new Ciudad("Aldea Vol'Jamba", "Jah'Mamba Blackspear", "Trol", 200000, "Legión Demoníaca", false);
const AbyssalVoid = new Ciudad("Vacío Abisal", "Azazel Morningstar", "Demonio", 500000, "Legión Demoníaca", true);

const ciudades = [Rasganorte, SilverCitadel, Nordinbad, Metropoblinks, LokTarOgar, VolJamba, AbyssalVoid];

razasPermitidas.forEach((x)=>{
  for (let i = 0; i < ciudades.length; i++) {
    if(x.race == ciudades[i].razaNata){
      x.city = ciudades[i];
      console.log(x.city)
    } 
  }
})
console.table(razasPermitidas)
localStorage.setItem("razasPermitidas", JSON.stringify(razasPermitidas));
localStorage.setItem("ciudades", JSON.stringify(ciudades));