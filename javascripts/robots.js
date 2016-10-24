"use strict";
var Robo =((roboTypes) => {

	roboTypes.types = {};

	roboTypes.types.Robot = function(){
		this.name= null;
		this.weapon = null;
		this.attack = 10;
		this.species = null;
		this.speed = 2;
		this.health = function(min, max) {
			//will generate random number between min & max (both inclusive)
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min))+min;
		};
	};

	roboTypes.types.Robot.prototype.addAttack = function(add){
		this.attack += add;
	};



	roboTypes.types.Drone = function() {
		this.species = "aerial";
		this.speed = 7;
		this.health = this.health(70, 100);
		this.toString = () => {
			let output =`${this.name} is an ${this.species} robot that has ${this.health} health and ${this.attack} attack, weilding a ${this.weapon.weaponName}.`;
			console.log(output);
			return output;
		};
	};
	roboTypes.types.Drone.prototype = new roboTypes.types.Robot();

	roboTypes.types.Bipedal = function() {
		this.species = "ground";
		this.speed = 4;
		this.health =this.health(80, 100);
		this.toString = () => {
			let output =`${this.name} is a ${this.species} robot that has ${this.health} health and ${this.attack} attack, weilding a ${this.weapon.weaponName}.`;
			console.log(output);
			return output;
		};

	};
	roboTypes.types.Bipedal.prototype = new roboTypes.types.Robot();

	roboTypes.types.ATV = function() {
		this.species = "amphibious";
		this.speed = 5;
		this.health = this.health(90, 110);
		this.toString = () => {
			let output =`${this.name} is an ${this.species} robot that has ${this.health} health and ${this.attack} attack, weilding a ${this.weapon.weaponName}.`;
			console.log(output);
			return output;
		};

	};
	roboTypes.types.ATV.prototype = new roboTypes.types.Robot();

return roboTypes;
})(Robo || {});