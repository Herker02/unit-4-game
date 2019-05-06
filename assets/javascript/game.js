// $(document).ready(function() {

     $(document).ready(function(){//I need jQuery to run!
     //      var goal=0;
     //      var current=[]; 
     //      var redNumber=[];
     //      var purpleNumber=[];
     //      var blueNumber=[];
     //      var greenNumber=[];
          
     //      var allCrystals = function(){
     //           var redNumber = Math.floor(Math.random()*12);
     //           var purpleNumber = Math.floor(Math.random()*12);
     //           var blueNumber = Math.floor(Math.random()*12);
     //           var greenNumber = Math.floor(Math.random()*12);

     //      }
          
     //      var resetGame = function(){
     //           goal = Math.floor(Math.random()*101 + 19);
     //           var redNumber = Math.floor(Math.random()*12);
     //           var purpleNumber = Math.floor(Math.random()*12);
     //           var blueNumber = Math.floor(Math.random()*12);
     //           var greenNumber = Math.floor(Math.random()*12);
               
     //      }
          
     //      resetGame();

     //      for (var i = 0; i < allCrystals.length; i++) {
     //           var imageCrystal = $("<img>");
     //           imageCrystal.addclass("crystal-image")
     //           imageCrystal.attr("src,","assets/css/style.css");
     //           imageCrystal.attr("crystal-value",allCrystals[i]);
     //           $("#crystals").append(imageCrystal);

     //      }

     
     //      $("#button-red").attr('value', redNumber);
     //      $("#button-blue").attr('value', blueNumber);
     //      $("#button-purple").attr('value', purpleNumber);
     //      $("#button-green").attr('value', greenNumber);
          
     //      $('.crystal-button').click(function(){
     //           // current += parseInt($(this).attr('value'));
     //           // alert("click");
     
     //           var crystalValueRed = ($(this).attr("#button-red"));
     //           crystalValue = parseInt(crystalValue);

     //           var crystalValuePurple = ($(this).attr("#button-purple"));
     //           crystalValue = parseInt(crystalValue);

     //           var crystalValueBlue = ($(this).attr("#button-blue"));
     //           crystalValue = parseInt(crystalValue);

     //           var crystalValueGreen = ($(this).attr("#button-green"));
     //           crystalValue = parseInt(crystalValue);

     //            for (var i = 0; i < allCrystals.length; i++) {
     //           var imageCrystal = $("<img>");
     //           imageCrystal.addclass("crystal-image")
     //           imageCrystal.attr("src,","assets/css/style.css");
     //           imageCrystal.attr("crystal-value",allCrystals[i]);
     //           $("#crystals").append(imageCrystal);

              
     //           goal += allCrystals;
           
     //           alert("New score: " + goal);
           
     //           if (goal === targetNumber) {
     //             alert("You win!");
     //           }
           
     //           else if (goal >= targetNumber) {
     //             alert("You lose!!");

     //      }}});
     
     // });
   
var targetNum = 0;

var userNum = 0;

var wins = 0;

var lose = 0;

var crystalRandom = [];

var crystalNumber;


// Creates random number for target and crystals
function randomNum() {

    targetNum = Math.floor(Math.random() * 102) + 19;

    $("#targetNumber").text(targetNum);

    for (var i = 0; i < crystalNumber.length; i++) {

     crystalNumber = Math.floor(Math.random()*101 + 19);
               var redNumber = Math.floor(Math.random()*12);
               var purpleNumber = Math.floor(Math.random()*12);
               var blueNumber = Math.floor(Math.random()*12);
               var greenNumber = Math.floor(Math.random()*12);

        crystalRandom.push(randomCrystalNumber);

    }

}

// addes value attribute to the crystals
function crystalValue() {

    $(".blue").attr("data-crystalvalue", crystalRandom[0]);
    $(".green").attr("data-crystalvalue", crystalRandom[1]);
    $(".red").attr("data-crystalvalue", crystalRandom[2]);
    $(".yellow").attr("data-crystalvalue", crystalRandom[3]);

}
// score keeping
function updateScore() {

    $("#wins").text(wins);
    $("#lose").text(lose);


}


// on win or lose reset values and html
function reset() {

    crystalRandom.splice(0, crystalRandom.length);

    randomNum();

    crystalValue();

    userNum = 0;

    $("#userNumber").text(userNum);

}    

    $(".crystals").click(function(){
               crystalValue += parseInt($(this).attr('value'));

               crystalRandom += randomNum;
           
                         alert("New score: " + goal);
                     
                         if (userNumber === targetNumber) {
                           alert("You win!");
                         }
                     
                         else if (userNumber >= targetNumber) {
                           alert("You lose!!");
               

}});