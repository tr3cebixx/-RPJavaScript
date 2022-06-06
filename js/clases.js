class Clase{
    constructor(name, distance, weapon1, weapon2, hp, powersource, ad, ap, def, mr){
        this.name = name;
        this.distance = distance;
        this.weapon1 = weapon1;
        this.weapon2 = weapon2;
        this.hp = hp;
        this.powersource = powersource;
        this.ad = ad;
        this.ap = ap;
        this.def = def;
        this.mr = mr;
    }
}



const caballero = new Clase("Caballero", "Melee", "Arma de una mano y escudo", "Arma de dos manos", 600, "Furia", 45, 10, 75, 70);
const berserker = new Clase("Berserker", "Melee", "Arma de dos manos", "Doble empuñadura de dos manos", 450, "Furia", 65, 10, 65, 60);
const cazador = new Clase("Cazador", "A distancia", "Arco y flecha/Ballesta", "Arma de fuego", 400, "Energía", 80, 20, 50, 50);
const asesino = new Clase("Asesino", "Melee", "Doble empuñadura de cuchillas", "Doble empuñadura de una mano", 450, "Energía", 90, 5, 50, 55);
const mago = new Clase("Mago", "A distancia", "Bastón de dos manos", "Arma de una mano y arma de mano izquierda", 370, "Maná", 20, 100, 40, 40);
const sacerdote = new Clase("Sacerdote", "A distancia", "Bastón de dos manos", "Arma de una mano y arma de mano izquierda", 350, "Maná", 10, 110, 35, 45);
const espadachin = new Clase("Espadachín", "Híbrido", "Estilo de katana múltiple", "Katana, Tachi y Wakizashi", 450, "Haki", 110, 0, 55, 55);
const caballeroOscuro = new Clase("Caballero Oscuro", "Híbrido", "Arma de dos manos", "Doble empuñadura de una mano", 500, "Necromaná", 60, 40, 45, 55);
const monje = new Clase("Monje", "Melee", "Doble empuñadura de armas de puño/armas de una mano", "Armas de dos manos", 400, "Haki", 65, 65, 35, 35);

