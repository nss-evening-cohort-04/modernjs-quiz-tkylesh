'use strict';
$(document).ready(() => {
  /*test out the creation of robot and alien player*/
  var playerOne = new Robo.types.Bipedal();
  playerOne.name="taylor-Bot";
  playerOne.weapon= new Robo.weaponOptions.lightMachineGun();
  playerOne.addAttack(playerOne.weapon.addDamage);
  console.log("playerOne: ",playerOne);
  console.log("playerTwo weapon: ",playerOne.weapon);
  playerOne.toString();

  var playerTwo = new Robo.enemies.Opponent();
  //creates a random instance of enemey alien player
  playerTwo = playerTwo.generateEnemy();
  playerTwo.addAttack(playerTwo.weapon.addDamage);
  console.log("playerTwo: ",playerTwo);
  console.log("playerTwo weapon: ", playerTwo.weapon);
  playerTwo.toString();


 /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  //event listener to set player class
  $(".btn--blue").click(function() {
    $(".btn--blue").addClass('selected');
    $(".btn--orange").removeClass('selected');
  });
  $(".btn--orange").click(function() {
    $(".btn--orange").addClass('selected');
    $(".btn--blue").removeClass('selected');
  });
  $("#talkingpoints").click(function() {
    $("#talkingpoints").addClass('selected');
    $("#experience").removeClass('selected');
    $("#barehands").removeClass('selected');
  });
  $("#experience").click(function() {
    $("#experience").addClass('selected');
    $("#talkingpoints").removeClass('selected');
    $("#barehands").removeClass('selected');
  });
  $("#barehands").click(function() {
    $("#barehands").addClass('selected');
    $("#talkingpoints").removeClass('selected');
    $("#experience").removeClass('selected');
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
        moveAlong = ($(".btn--blue").hasClass('selected') || $(".btn--orange").hasClass('selected'));
        break;
      case "card--battleground":
        moveAlong = ($("#talkingpoints").hasClass('selected') || $("#experience").hasClass('selected') || $("#barehands").hasClass('selected'));
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


});