console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name, creatureType){
        this.name = name,
        this.creatureType = creatureType,
        this.foodInTummy = 10,
        this.restedness = 10,
        this.health = 10
    }
    cry() {
        this.foodInTummy -= 1;
        console.log(`${this.name} cries.. WAHH!`);
    }
    puke() {
        this.foodInTummy -= 1;
        console.log(`${this.name} pukes.. ugh, so gross!`);
    }
    yawn() {
        this.restedness -= 1;
        console.log(`${this.name} yawns.. so cute! Restedness: ${this.restedness}`);
    }
    hungerTimer() {
        setInterval(() => {this.cry()}, 6000);
    }
    yawnTimer() {
        setInterval(() => {this.yawn()}, 10000);
    }
    sickTimer() {
        setInterval(() => {this.puke()}, 24000);
    }
    start() {
            this.hungerTimer();
            this.yawnTimer();
            this.sickTimer();
    }
}

//create new Tamagotchis
const cecil = new Tamagotchi("Cecil", "Frobit");
const rosa = new Tamagotchi("Rosa", "Bunbun");
const kain = new Tamagotchi("Kain", "Beastie");
const edge = new Tamagotchi("Edge", "Leem")

//test out your Tamagotchies below via console.logs
cecil.cry();
rosa.cry();
kain.cry();
edge.cry();
edge.puke();
kain.yawn();
rosa.cry();
cecil.yawn();
cecil.start();
rosa.start();
kain.start();
edge.start();