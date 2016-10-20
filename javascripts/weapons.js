"use strict";
var Robo = ((roboWeapons) => {

	roboWeapons.weaponOptions = {};

	roboWeapons.weaponOptions.Weapon = function() {
		this.weaponName = "";
		this.addDamage = null;
	};

	roboWeapons.weaponOptions.lightMachineGun = function() {
		this.weapon = "lightMachineGun";
		this.weaponName = "Light Machine Gun";
		this.addDamage = 5;
	};
	roboWeapons.weaponOptions.lightMachineGun.prototype = new roboWeapons.weaponOptions.Weapon();

	roboWeapons.weaponOptions.flamethrower = function() {
		this.weapon = "flamethrower";
		this.weaponName = "Flame Thrower";
		this.addDamage = 7;
	};
	roboWeapons.weaponOptions.flamethrower.prototype = new roboWeapons.weaponOptions.Weapon();

	roboWeapons.weaponOptions.heavyTurret = function() {
		this.weapon = "heavyTurret";
		this.weaponName = "Heavy Turret";
		this.addDamage = 9;
	};
	roboWeapons.weaponOptions.heavyTurret.prototype = new roboWeapons.weaponOptions.Weapon();

	roboWeapons.weaponOptions.laserCannon = function() {
		this.weapon = "laserCannon";
		this.weaponName = "Laser Cannon";
		this.addDamage = 4;
	};
	roboWeapons.weaponOptions.laserCannon.prototype = new roboWeapons.weaponOptions.Weapon();

	return roboWeapons;
})(Robo || {});