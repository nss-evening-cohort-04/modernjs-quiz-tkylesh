// "use strict";
// var Robo = ((roboEnemy) => {

// 	roboEnemy.robots.Opponent = (name) => {
// 		this.name = name;
// 		this.species = "alien";
// 		this.allowedEnemies = [];
// 		this.attackText = [];
// 		this.attack = 15;
// 		this.weapon = "laserCannon";
// 		this.speed = 3;
// 		this.health = 100;
// 	};
	
// 	this.generateEnemy = () => {
//     // get a random index from the name array
//     var random = Math.round(Math.random() * (this.allowedEnemies.length -1));
//     //get the string at the index
//     var randomEnemy = this.allowedEnemies[random];
//     //compose the corresponding enemy into the player object
//     // this.name = randomEnemy.name;
//     return randomEnemy;
//     };

//     this.generateAttack = () => {
//     var random = Math.round(Math.random() * (this.attackText.length -1));
//     var randomText = this.attackText[random];
//     return randomText;
//     };
    
// return roboEnemy;
// })(Robo || {});