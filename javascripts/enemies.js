"use strict";
var Robo = ((roboEnemy) => {

	roboEnemy.enemies = {};

	roboEnemy.enemies.Opponent = function(name) {
		this.name = name;
		this.species = "alien";
		this.allowedEnemies = [];
		this.attackText = [];
		this.attack = 15;
		this.weapon = new Robo.weaponOptions.laserCannon();
		this.speed = 3;
		this.health = Math.floor(Math.random() * (100 - 70)) + 70;
		this.toString = () => {
			let output =`${this.name} is a space ${this.species} that has ${this.health} health and ${this.attack} attack, weilding a ${this.weapon.weaponName}.`;
			console.log(output);
			return output;
		};
	};
	
	roboEnemy.enemies.Opponent.prototype.addAttack = function(add){
		this.attack += add;
	};
	roboEnemy.enemies.Opponent.prototype.generateEnemy = () => {
    // get a random index from the name array
    var random = Math.round(Math.random() * (this.allowedEnemies.length -1));
    //get the string at the index
    var randomEnemy = this.allowedEnemies[random];
    //compose the corresponding enemy into the player object
    // this.name = randomEnemy.name;
    return randomEnemy;
    };

    roboEnemy.enemies.Opponent.prototype.generateAttack = () => {
    var random = Math.round(Math.random() * (this.attackText.length -1));
    var randomText = this.attackText[random];
    return randomText;
    };
    
return roboEnemy;
})(Robo || {});