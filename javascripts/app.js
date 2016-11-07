'use strict';

 let playerOne, playerName, playerTwo, enemyName;

// $(document).ready(() => {


  /*test out the creation of robot and alien player*/
  // var playerOne = new Robo.types.Bipedal();
  // playerOne.name="taylor-Bot";
  // playerOne.weapon= new Robo.weaponOptions.lightMachineGun();
  // playerOne.addAttack(playerOne.weapon.addDamage);
  // console.log("playerOne: ",playerOne);
  // console.log("playerTwo weapon: ",playerOne.weapon);
  // playerOne.toString();

  // var playerTwo = new Robo.enemies.Opponent();
  // //creates a random instance of enemey alien player
  // playerTwo = playerTwo.generateEnemy();
  // playerTwo.addAttack(playerTwo.weapon.addDamage);
  // console.log("playerTwo: ",playerTwo);
  // console.log("playerTwo weapon: ", playerTwo.weapon);
  // playerTwo.toString();
  // console.log(playerTwo.generateAttack());
  

 /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

    //event listener to set player name
  $("#robotBtn").click(function() {
    playerName = $("#player-name").val(); // grabs player name
    enemyName = $('#enemy-name').val();//grabs enemy name 
    /* Declare this.voterName = playerName; */
    console.log(playerName);
    console.log(enemyName);
  });


  //event listener to set player class
  $('#drone').click(function() {
        $("#drone").addClass('selected');
        $("#bipedal").removeClass('selected');
        $("#atv").removeClass('selected');
        console.log('drone');
        playerOne = new Robo.types.Drone();
  });

  $('#bipedal').click(function() {
        $("#bipedal").addClass('selected');
        $("#drone").removeClass('selected');
        $("#atv").removeClass('selected');
        console.log('bipedal');
        playerOne = new Robo.types.Bipedal();
  });

  $('#atv').click(function() {
        $("#atv").addClass('selected');
        $("#drone").removeClass('selected');
        $("#bipedal").removeClass('selected');
        console.log('atv');
        playerOne = new Robo.types.ATV();
      });

  $("#weaponBtn").click(function() {
    playerOne.name = playerName;
    console.log(playerOne);
  });

  
  $("#lightmachinegun").click(function() {
    console.log('lightmachinegun');
    $("#lightmachinegun").addClass('selected');
    $("#flamethrower").removeClass('selected');
    $("#heavyturret").removeClass('selected');
    playerOne.weapon = new Robo.weaponOptions.lightMachineGun();
  });
  $("#flamethrower").click(function() {
    console.log('flamethrower');
    $("#flamethrower").addClass('selected');
    $("#heavyturret").removeClass('selected');
    $("#lightmachinegun").removeClass('selected');
    playerOne.weapon = new Robo.weaponOptions.flamethrower();
  });
  $("#heavyturret").click(function() {
    console.log('heavyturret');
    $("#heavyturret").addClass('selected');
    $("#flamethrower").removeClass('selected');
    $("#lightmachinegun").removeClass('selected');
    playerOne.weapon = new Robo.weaponOptions.heavyTurret();
  });

/*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#drone").hasClass('selected') || $("#atv").hasClass('selected') || $('#bipedal').hasClass('selected'));
        break;
      case "card--battleground":
        moveAlong = ($("#lightmachinegun").hasClass('selected') || $("#flamethrower").hasClass('selected') || $("#heavyturret").hasClass('selected'));
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });


// });