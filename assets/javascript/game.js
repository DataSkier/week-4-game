
$(document).ready(function() {
//.  Variables
var wins = 0;
var losss = 0;
var targetNumber = getTargetnumber();
var yourTotal = 0;
var chest1Value = getChestValue();
var chest2Value = getChestValue();
var chest3Value = getChestValue();
var Chest4Value = getChestValue();
//   Set Game values
$('#number-wins').text(wins);
$('#number-lost').text(losss);
$('#target-number').text(targetNumber);
$('#your-total').text(yourTotal);
$('#chest1').val(chest1Value);
$('#chest2').val(chest2Value);
$('#chest3').val(chest3Value);
$('#chest4').val(Chest4Value);

//. Set all Functions
    function getTargetnumber(min, max) {
      min = Math.ceil(19);
      max = Math.floor(120);
      return Math.floor(Math.random() * (max - min)) + min;
}
    function getChestValue(min, max) {
      min = Math.ceil(1);
      max = Math.floor(12);
      return Math.floor(Math.random() * (max - min)) + min; 
}
    function playAgain(){
  //. Reset game variables
      targetNumber = getTargetnumber();
      yourTotal = 0;
      chest1Value = getChestValue();
      chest2Value = getChestValue();
      chest3Value = getChestValue();
      Chest4Value = getChestValue();
  //   Reset Game values
      $('#target-number').text(targetNumber);
      $('#your-total').text(yourTotal);
      $('#chest1').val(chest1Value);
      $('#chest2').val(chest2Value);
      $('#chest3').val(chest3Value);
      $('#chest4').val(Chest4Value);
}
//   Game logic
    $('.chest-image').on('click', function(){
      var chestValue = ($(this).attr('value'));
      chestValue = parseInt(chestValue);
      yourTotal = (yourTotal + chestValue);
      $('#your-total').text(yourTotal);
      if (yourTotal == targetNumber) {
        var winNewGame = confirm("Tharghhhhh she be, " + targetNumber + " beautiful coins are now yours. Wish to play again matey?")
        if (winNewGame == true) {
          var addWin = parseInt($('#number-wins').text());
          $('#number-wins').text(addWin+1);
          playAgain();
    }
    else {
      var addWin = parseInt($('#number-wins').text());
      $('#number-wins').text(addWin+1);
      alert("Pirates argh a betting bunch, how about you try again?");
      playAgain();
    }
  } 
  else if (yourTotal > targetNumber) {
    var numberDif = (yourTotal - targetNumber);
    var lostNewGame = confirm("Such is a greedy Pirates life, you went over the " + targetNumber + " goal value by " + numberDif + " coins. Now walk the plank!... or, do you wish to play again?")
    if (lostNewGame == true) {
      var addLost = parseInt($('#number-lost').text());
      $('#number-lost').text(addLost+1);
      playAgain();
    }
    else {
      var addLost = parseInt($('#number-lost').text());
      $('#number-lost').text(addLost+1);
      alert("Pirates argh a betting bunch, how about you try again?");
      playAgain();
    }
  }
});
//. End document.ready
});