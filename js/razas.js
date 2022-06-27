//Acá, creo las razas permitidas, con su nombre, facción y habilidad pasiva; y su array correspondiente.
class Raza {
  constructor(race, faction, passive, city) {
    this.race = race;
    this.faction = faction;
    this.passive = passive;
    this.city = city;
  }
}
class Faction {
  constructor(nombre, integrantes, ciudades, capital, lideres) {
    this.nombre = nombre;
    this.integrantes = integrantes;
    this.ciudades = ciudades;
    this.capital = capital;
    this.lideres = lideres;
  }
}
class City {
  constructor(nombre, lider, razaNata, poblacion, faccionAlly, capital) {
    this.nombre = nombre;
    this.lider = lider;
    this.razaNata = razaNata;
    this.poblacion = poblacion;
    this.faccionAlly = faccionAlly;
    this.capital = capital;
  }
}

const humano = new Raza("Humano", "codeDefenders", "Orgullo humano", "Rasganorte");
const orco = new Raza("Orco", "demonicLegion", "Furia ciega", "LokTarOgar");
const elfo = new Raza("Elfo", "codeDefenders", "Ojo de Halcón", "SilverCitadel");
const enano = new Raza("Enano", "codeDefenders", "Dureza Ferrea", "Nordinbad");
const goblin = new Raza("Goblin", "codeDefenders", "Ingenio goblin", "Metropoblinks");
const trol = new Raza("Trol", "demonicLegion", "Cazador nato", "VolJamba");
const demonio = new Raza("Demonio", "demonicLegion", "Presencia demoníaca", "AbyssalVoid");

const Rasganorte = new City(
  "Rasganorte",
  "Varyann Hunterville",
  humano,
  250000,
  "codeDefenders",
  false
);
const SilverCitadel = new City(
  "Ciudadela de Plata",
  "Idril Elentari",
  elfo,
  400000,
  "codeDefenders",
  true
);
const Nordinbad = new City(
  "Nordinbad",
  ["Thorin Thundergrimm", "Thurimar Thundergrimm", "Magni Thundergrimm"],
  enano,
  200000,
  "codeDefenders",
  false
);
const Metropoblinks = new City(
  "Metrópoblinks",
  "Dazz Gallywix",
  goblin,
  200000,
  "codeDefenders",
  false
);
const LokTarOgar = new City(
  "Fuerte Lok'Tar Ogar",
  "Zug Ironhand",
  orco,
  350000,
  "demonicLegion",
  false
);
const VolJamba = new City(
  "Aldea Vol'Jamba",
  "Jah'Mamba Blackspear",
  trol,
  200000,
  "demonicLegion",
  false
);
const AbyssalVoid = new City(
  "Vacío Abisal",
  "Azazel Morningstar",
  demonio,
  500000,
  "demonicLegion",
  true
);

const codeDefenders = new Faction(
  "Defensores del Código",
  [humano, elfo, enano, goblin],
  [Rasganorte, SilverCitadel, Nordinbad, Metropoblinks],
  SilverCitadel,
  []
);
const demonicLegion = new Faction(
  "Legión Demoníaca",
  [orco, trol, demonio],
  [LokTarOgar, VolJamba, AbyssalVoid],
  AbyssalVoid,
  []
);

const razasPermitidas = [];
razasPermitidas.push(humano, orco, elfo, enano, goblin, trol, demonio);

const CiudadesDefenders = [];
CiudadesDefenders.push(Rasganorte, SilverCitadel, Nordinbad, Metropoblinks);
for (const i in CiudadesDefenders) {
  i.faccionAlly = codeDefenders;
}
const CiudadesLegion = [];
CiudadesLegion.push(LokTarOgar, VolJamba, AbyssalVoid);
for (const i in CiudadesLegion) {
  i.faccionAlly = demonicLegion;
}
const ciudades = CiudadesDefenders.concat(CiudadesLegion);
console.table(ciudades);
