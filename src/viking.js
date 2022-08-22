// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength 
        
    }
    receiveDamage(damage) {
        this.health = this.health - damage 
        
        
        
    }
    
}



// Viking
class Viking extends Soldier {

    constructor (name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    battleCry() {
        return "Odin Owns You All!"
    }

    receiveDamage(dmg){
        this.health -= dmg
if (this.health > 0){
    return `${this.name} has received ${dmg} points of damage`;
} if (this.health <= 0) {
    return `${this.name} has died in act of combat`
}
    }
    }

    

// Saxon
class Saxon extends Soldier  {
    constructor ( health, strength, name){

        super(health, strength)
        this.name = name;
    }
    receiveDamage(dmg){
        this.health -= dmg
if (this.health > 0){
    return `A Saxon has received ${dmg} points of damage`;
} if (this.health <= 0) {
    return `A Saxon has died in combat`
}
    }
}

// War
class War {
   constructor() {
 this.vikingArmy = [];
 this.saxonArmy = [];
   }
   addViking(vikingObject) {
    this.vikingArmy.push(vikingObject)
    
   }
   addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj)
    
   }
vikingAttack() {
    let randomSaxon = this.saxonArmy;
   let randomViking = this.vikingArmy;
   let randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
   let randomVikingIndex = Math.floor(Math.random()* this.vikingArmy.length);
    let attack = randomSaxon[randomSaxonIndex].receiveDamage(randomViking[randomVikingIndex].strength);

   if (randomSaxon[randomSaxonIndex].health <= 0) {
    randomSaxon.splice(randomSaxonIndex, 1)
   }
   
   return attack

}
saxonAttack() {
    let randomViking = this.vikingArmy;
    let randomSaxon = this.saxonArmy;
    let randomSaxonIndex = [Math.floor(Math.random()*this.saxonArmy.length)];
    let randomVikingIndex = [Math.floor(Math.random()* this.vikingArmy.length)];
let attack = randomViking[randomVikingIndex].receiveDamage(randomSaxon[randomSaxonIndex].strength);

if (randomViking[randomVikingIndex].health <= 0) {
    randomViking.splice(randomVikingIndex, 1)
}
return attack
}
showStatus() {
    if(this.saxonArmy.length === 0){
    return `Vikings have won the war of the century!`;
    }if (this.vikingArmy.length === 0) {
    return `Saxons have fought for their lives and survived another day...`
}else return `Vikings and Saxons are still in the thick of battle.`




}
}