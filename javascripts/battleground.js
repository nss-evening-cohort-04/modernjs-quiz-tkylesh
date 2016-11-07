'use strict';
var Robo = (function(battle) {

	let player, enemy;


	battle.updateEnemyHealth = function(maxHealth) {
		console.log(maxHealth);
		let updatedHealthVal = Math.max(Math.round((enemy.health/maxHealth)*100), 0);
		console.log(updatedHealthVal);

		$('#enemyProgress').css("width",`${updatedHealthVal}%`);
		let enemyHealth = Math.max(enemy.health, 0);
		$('#enemyHP')[0].innerText = `${enemyHealth} / ${maxHealth}`;
	};

	battle.updatePlayerHealth = function(maxHealth) {
		console.log(maxHealth);
		let updatedHealthVal = Math.max(Math.round((player.health/maxHealth)*100), 0);
		console.log(updatedHealthVal);

		$('#playerProgress').css("width",`${updatedHealthVal}%`);
		let playerHealth = Math.max(player.health, 0);
		$('#playerHP')[0].innerText = `${playerHealth} / ${maxHealth}`;
	};

	battle.initializeBattleground = function(currentPlayer,enemyPlayer) {
		player = currentPlayer;
		enemy = enemyPlayer;
		// maxHealthPlayer = player.health;
		// maxHealthEnemy = enemy.health;
		//output player info to dom info div.
		$("#player-stats").html(
			`<h1 class="white caption">${player.name}</h1>
			<h3 class="topMargin">${player.species} Robot with ${player.weapon.weaponName}</h3>
			<h3 class="bgStats">Health:</h3><span id="playerHP">${player.health} / ${player.health}</span><div class="progress">
			 <div id="playerProgress" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow=${player.health}
			 aria-valuemin="0" aria-valuemax=${player.health} style="width:100%">
			 </div>
			</div>
			<h4>Attack: ${player.attack}</h4>`
		);
		// output enemy info to the dom.
		$("#enemy-stats").html(
			`<h1 class="white caption">${enemy.name}</h1>
			<h3 class="topMargin">${enemy.species} with ${enemy.weapon.weaponName}</h3>
			<h3 class="bgStats">Health:</h3><span id="enemyHP">${enemy.health} / ${enemy.health}</span><div class="progress">
			 <div id="enemyProgress" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow=${enemy.health}
			 aria-valuemin="0" aria-valuemax=${enemy.health} style="width:100%">
			 </div>
			</div>
			<h4>Attack: ${enemy.attack}</h4>`
		);
	};

	// $("#fightBtn").click(function() {
	//     playerOne.addAttack(playerOne.weapon.addDamage);
	//     console.log("playerOne: ",playerOne);
	//     console.log("playerOne weapon", playerOne.weapon);
	//     playerOne.toString();
	//     //creates a random instance of enemey alien player
	//     playerTwo = new Robo.enemies.Opponent(enemyName);
	//     playerTwo.addAttack(playerTwo.weapon.addDamage);
	//     console.log("playerTwo: ",playerTwo);
	//     console.log("playerTwo weapon: ", playerTwo.weapon);
	//     playerTwo.toString();

	//     //Initialize the battleground
	//     battle.initializeBattleground(playerOne, playerTwo);
 //  	});

 //  	//this is a click function for the battle
	// $("#attackButton").on("click", function(){
	// 	console.log("attackwords", $('#attackWords'));
	// 	$('#attackWords')[0].innerText = "";
	// 	let playerAttackMath = Math.floor(Math.random() * (player.attack - 10))+10;
	// 	let enemyAttackMath = Math.floor(Math.random()* (enemy.attack - 10))+10;
	// 	// console.log("player hp", player.health);
	// 	// console.log("player attack", playerAttackMath);
	// 	// console.log("enemy hp", enemy.health);
	// 	// console.log("enemy attack", enemyAttackMath);
	// 	enemy.health -= playerAttackMath;
	// 	console.log("player attack", playerAttackMath);
	// 	console.log("enemy hp", enemy.health);
	// 	//call to update health after attack
	// 	battle.updateEnemyHealth(maxHealthEnemy);
	// 	if (enemy.health <= 0) {
	// 		enemy.health = 0;
	// 		$('#enemyProgress').css("width",`0%`);
	// 		$("#attackButton").attr("disabled", true);
	// 		$("#attackButton").addClass('hidden');
	// 		$("#rematchButton").removeClass('hidden');
	// 	  	$('#attackWords')[0].innerText = "You Win!";
	// 	  	$('#attackWords')[0].className = "gameOver";
	// 	}else {
	// 			//Enemy attack after 2 seconds
	// 			setTimeout(function(){
	// 				$('#attackWords')[0].innerText = playerTwo.generateAttack();
	// 				player.health -= enemyAttackMath;
	// 				console.log("enemy attack", enemyAttackMath);
	// 				console.log("player hp", player.health);
	// 				battle.updatePlayerHealth(maxHealthPlayer);
	// 				//check if any healths are zero and do somethin about it!
	// 				if (player.health <= 0) {
	// 					player.health = 0;
	// 					$('#playerProgress').css("width",`0%`);
	// 					$("#attackButton").attr("disabled", true);
	// 					$("#attackButton").addClass('hidden');
	// 					$("#rematchButton").removeClass('hidden');
	// 			  		$('#attackWords')[0].innerText = "You Lose!";
	// 			  		$('#attackWords')[0].className = "gameOver";		
	// 				}
	// 			}, 2000);
	// 		}
	// });
return battle;
})(Robo || {});