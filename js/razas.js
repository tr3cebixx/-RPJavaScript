//Acá, creo las razas permitidas, con su nombre, facción y habilidad pasiva; y su array correspondiente.
class Raza{
    constructor(race, faction, passive){
        this.race = race;
        this.faction = faction;
        this.passive = passive;
    }
}

const humano = new Raza("Humano", "Defensores del Código", "Orgullo humano");
const orco = new Raza("Orco", "Defensores del Código", "Furia ciega");
const elfo = new Raza("Elfo", "Defensores del Código", "Ojo de Halcón");
const enano = new Raza("Enano", "Defensores del Código", "Dureza Ferrea");
const goblin = new Raza("Goblin", "Defensores del Código", "Ingenio goblin");
const trol = new Raza("Trol", "Defensores del Código", "Cazador nato");
const demonio = new Raza("Demonio", "Legión Demoníaca", "Presencia demoníaca");

const razasPermitidas = [];
razasPermitidas.push(humano, orco, elfo, enano, goblin, trol, demonio);
// console.table(razasPermitidas);
