'use strict';
var Robo = (function(battle) {

	battle.initializeBattleground = function(currentPlayer, currentEnemy) {
		player = currentPlayer;
		enemy = currentEnemy;
		//output player info to dom info div.
		$("#player-stats").html(
			`<h1 class="white caption">${player.name}</h1>
			<h3 class="topMargin">${player.species} Robot with ${player.weapon.weaponName}</h3>
			<h1 class="bgStats">Health: ${player.health}</h1>
			<h4>Attack: ${player.attack}</h4>`
		);
		// output enemy info to the dom.
		$("#enemy-stats").html(
			`<h1 class="white caption">${enemy.name}</h1>
			<h3 class="topMargin">${enemy.species} with ${enemy.weapon.weaponName}</h3>
			<h1 class="bgStats">Health: ${enemy.health}</h1>
			<h4>Attack: ${enemy.attack}</h4>`
		);
	};

	$("#fightBtn").click(function() {
	    playerOne.addAttack(playerOne.weapon.addDamage);
	    console.log("playerOne: ",playerOne);
	    console.log("playerOne weapon", playerOne.weapon);
	    playerOne.toString();

	    //creates a random instance of enemey alien player
	    playerTwo = new Robo.enemies.Opponent();
	    playerTwo = playerTwo.generateEnemy();
	    playerTwo.addAttack(playerTwo.weapon.addDamage);
	    console.log("playerTwo: ",playerTwo);
	    console.log("playerTwo weapon: ", playerTwo.weapon);
	    playerTwo.toString();
	    console.log(playerTwo.generateAttack());

	    //Initialize the battleground
	    battle.initializeBattleground(playerOne, playerTwo);
  });

return battle;
})(Robo || {});