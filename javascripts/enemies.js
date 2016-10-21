"use strict";
var Robo = ((roboEnemy) => {

	roboEnemy.enemies = {};

	roboEnemy.enemies.Opponent = function(name) {
		this.name = name;
		this.species = "alien";
		this.allowedEnemies = [roboEnemy.enemies.EvilShredder,  roboEnemy.enemies.RobotChicken, roboEnemy.enemies.Marvin];
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
	
		this.generateEnemy = () => {
	    // get a random index from the name array
	    var random = Math.round(Math.random() * (this.allowedEnemies.length -1));
	    //get the string at the index
	    var randomEnemy = this.allowedEnemies[random];
	    //compose the corresponding enemy into the player object
	    return randomEnemy;
	    };

	    this.generateAttack = () => {
	    var random = Math.round(Math.random() * (this.attackText.length -1));
	    var randomText = this.attackText[random];
	    return randomText;
	    };
	};

    roboEnemy.enemies.Opponent.prototype.addAttack = function(add){
		this.attack += add;
	};  

	roboEnemy.enemies.Marvin = new roboEnemy.enemies.Opponent("Marvin");

	roboEnemy.enemies.RobotChicken = new roboEnemy.enemies.Opponent("Robot Chicken");

	roboEnemy.enemies.EvilShredder = new roboEnemy.enemies.Opponent("Evil Shredder");
return roboEnemy;
})(Robo || {});