// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name,health,strength){
    super(health,strength);
    this.name = name || "anonymus"
  }

  receiveDamage(damage){
    super.receiveDamage(damage)
    if(this.health > 0)
    return `${this.name} has received ${damage} points of damage`
    else
    return `${this.name} has died in act of combat`
  }

  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    super.receiveDamage(damage);
    if(this.health > 0)
    return `A Saxon has received ${damage} points of damage`
    else
    return `A Saxon has died in combat`
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this. saxonArmy = [];
  }

  addViking(vikingObj){
    this.vikingArmy.push(vikingObj);
  }

  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj);
  }

  vikingAttack(){
    const randomIndexSaxon = 
    Math.floor(Math.random() * this.saxonArmy.length);
    
    const randomIndexViking = 
    Math.floor(Math.random() * this.vikingArmy.length);

    const result =this.saxonArmy[randomIndexSaxon].
    receiveDamage(this.vikingArmy[randomIndexViking].strength);
    
    if(this.saxonArmy[randomIndexSaxon].health <= 0)
    this.saxonArmy.splice(randomIndexSaxon,1);
    return result;
  }

  saxonAttack(){
    const randomIndexSaxon = 
    Math.floor(Math.random() * this.saxonArmy.length);
    
    const randomIndexViking = 
    Math.floor(Math.random() * this.vikingArmy.length);

    const result =this.vikingArmy[randomIndexViking].
    receiveDamage(this.saxonArmy[randomIndexSaxon].strength);

    if(this.vikingArmy[randomIndexViking].health <= 0)
    this.vikingArmy.splice(randomIndexViking,1);
    return result;
  }

  showStatus(){
    if(!this.saxonArmy.length) return "Vikings have won the war of the century!"
    else if(!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
    else return "Vikings and Saxons are still in the thick of battle."
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
