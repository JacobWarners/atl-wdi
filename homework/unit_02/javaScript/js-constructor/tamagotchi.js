console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
    constructor(name){
        this.name = name,
        this.foodInTummy = 10,
        this.restedness = 10,
        this.health = 10
    }
    cry() {
        this.foodInTummy -= 1;
        console.log(`${this.name} cries.. WAHH!`);
    }
}

//create new Tamagotchis
const cecil = new Tamagotchi("Cecil");
const kate = new Tamagotchi("Kate");

//test out your Tamagotchies below via console.logs
cecil.cry();
kate.cry();