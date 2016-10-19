"use strict";
var Robo = ((roboWeapons) => {

	 var Weapon = () => {
		this.weaponName = "";
		this.addDamage = null;
	};

	roboWeapons.lightMachineGun = () => {
		this.weapon = "lightMachineGun";
		this.weaponName = "Light Machine Gun";
		this.addDamage = 5;
	};
	roboWeapons.lightMachineGun.prototype = new Weapon();

	roboWeapons.flamethrower = () => {
		this.weapon = "flamethrower";
		this.weaponName = "Flame Thrower";
		this.addDamage = 7;
	};
	roboWeapons.flamethrower.prototype = new Weapon();

	roboWeapons.heavyTurret = () => {
		this.weapon = "heavyTurret";
		this.weaponName = "Heavy Turret";
		this.addDamage = 9;
	};
	roboWeapons.heavyTurret.prototype = new Weapon();
})(Robo || {});