"use strict";
var Robo = ((roboTypes) => {

	var Robot = () => {
		this.name= null;
		this.weapon = null;
		this.attack = 10;
		this.type = null;
		this.speed = 2;
		this.health = (min, max) => {
			//will generate random number between min & max (both inclusive)
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random(max-min))+min;
		};
		this.toString = () => {
			let output =`${this.name} is a ${this.type} robot that has ${this.health} health and ${this.attack} attack, weilding a ${this.weapon}.`;

		};
	};

	roboTypes.Drone = () => {
		this.type = "aerial";
		this.allowedWeapons = ["lightMachineGun","flamethrower"];
		this.speed = 7;
		this.health(60, 90);
	};
	roboTypes.Drone.prototype = new Robot();

	roboTypes.Bipedal = () => {
		this.type = "ground";
		this.allowedWeapons = ["lightMachineGun","Mortar"];
		this.speed = 3;
		this.health(80, 100);

	};
	roboTypes.Bipedal.prototype = new Robot();

	roboTypes.ATV = () => {
		this.type = "amphibious";
		this.allowedWeapons = ["lightMachineGun","heavyTurret"];
		this.speed = 4;
		this.health(80, 110);

	};
	roboTypes.ATV.prototype = new Robot();

	return roboTypes;
})(Robo || {});