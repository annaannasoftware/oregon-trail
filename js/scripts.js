// character constructor
function Character(name) {
  this.name = name;
  this.health = 100;
  this.status = "good"
  this.illness = []
}
// wagon/inventory constructor
function Wagon() {
  this.food = 2000;
  this.money = 500;
  this.days = 0;
  this.characters = []
}
// illness generator
Character.prototype.illnessGenerator = function() {
  var num = Math.floor(Math.random() * Math.floor(20))
  if (num === 1) {
    this.illness.push("Dysentery")
  } else if (num === 2) {
    this.illness.push("Gonorrhea")
  } else if (num === 3) {
    this.illness.push("Yellow Fever")
  } else if (num === 4) {
    this.illness.push("Pertussis")
  } else if (num === 5){
    this.illness.push("Broken Arm")
  }
}
//illness checker
Character.prototype.illnessChecker = function() {
  if (this.illness.length === 1) {
    this.health -= 2
  } else if (this.illness.length === 2) {
    this.health -= 4
  } else if (this.illness.length === 3) {
    this.health -= 6
  }
}
//status adjuster
Character.prototype.statusAdjuster = function() {
  if (this.health >= 80) {
    this.status = "good"
  } else if (this.health < 80 && this.health >= 20) {
    this.status = "fair"
  } else if (this.health < 20 && this.health > 0) {
    this.status = "poor"
  } else {
    this.status = "dead"
  }
}

function turn() {
  wagon.characters.forEach(function(char){
    this.illnessGenerator()
    this.illnessChecker()
    this.statusAdjuster()
  });
  wagon.food -= (wagon.characters.length * 5 )
  wagon.eventGrabber()
  wagon.dayCounter()
}
// function for resting -- cure illness, gain some health
function rest() {
  wagon.characters.forEach(function(char){
    this.illness = []
    if (this.health < 99) {
    this.health += 2
    }
    this.statusAdjuster()
  });
}
//event grabber
Wagon.prototype.eventGrabber = function() {
  var num = Math.floor(Math.random() * Math.floor(100))
  if (num >= 80) {
    postiveEvent()
    //call positive event
  } else if (num < 80 && num >= 20) {
    neutralEvent()
    //call neutral event
  } else if (num < 20 && num > 5) {
    negativeEvent()
    //call negative event
  } else {
    //call death event
  }
}

function positiveEvent() {
  var num = Math.floor(Math.random() * Math.floor(5))
  if (num === 1) {
    //"As you rest by the river, you find some gold"
    //wagon.money += numbergenerator
  } else if (num === 2) {
    //"You come across an abandoned wagon, you find some unspoiled food"
    // wagon.food += ranNum
  } else if (num === 3) {
    //"You found a wounded deer"
    //wagon.food += ranNum
  } else if (num === 4) {
    //As you travel along, you come across a group of suckers. You got some free shit.
    //give food or gold
  } else if (num === 5){
    //You ambush and murder another party. We feast tonight.
    //wagon.money += 250
    //wagon.food += 200
  }
}

function neutralEvent() {
  var num = Math.floor(Math.random() * Math.floor(5))
  if (num === 1) {
    //One of you ox was pregnant and gave birth. The baby died and she is sad, but continues on.
  } else if (num === 2) {
    //You get a letter from home
  } else if (num === 3) {
    //Your party finds a small lake and decides to go for a swim
  } else if (num === 4) {
    //You find a small bunny and decide to keep it (not as food, what's wrong with you.)
  } else if (num === 5){
    //A member of your party explores their sexuality with a neighbor boy.
  }
}

function negativeEvent() {
  var num = Math.floor(Math.random() * Math.floor(5))
  if (num === 1) {
    //Your party finds a small lake and decides to go for a swim. Unfortunately the lake was full of phirranas
  } else if (num === 2) {
    //You find a small bunny and decide to keep it. The bunny bites CharacterName. CharacterName has gonorrhea
  } else if (num === 3) {
    //Your party is ambush, they hold you hostage and take some of your food
    //food -= number
    //days += number
  } else if (num === 4) {
    //Your wagon wheel broke, in the distance you hear Jesus Take The Wheel
  } else if (num === 5){
    //Some of your food rots because CharacterName wet themselves as they napped on it.
    //food -= number
  }
}
//Hunting
Wagon.prototype.huntingTime = function() {
  this.food += Math.floor(Math.random() * Math.floor(150))
}
//Profession checker
Wagon.prototype.profession = function() {
  if ("[name=profession][value=1]:checked") {
    this.money += 500
  } else if ("[name=profession][value=2]:checked") {
    this.money += 300
  } else if ("[name=profession][value=3]:checked") {
    this.food += 500
  } else if ("[name=profession][value=4]:checked") {
    this.food += 250
    this.money += 250
  } else if ("[name=profession][value=5]:checked") {
    this.money += 400
    this.food += 100
  } else if ("[name=profession][value=6]:checked") {
    this.money += 50
  }
}

Wagon.prototype.dayCounter = function() {
  this.day += 1
}

$(document).ready(function(){
  var playerOneName = $("#char1").val()
  var playerTwoName = $("#char2").val()
  var playerThreeName = $("#char3").val()
  var playerFourName = $("#char4").val()
  var playerFiveName = $("#char5").val()
  var x = 1;
  $('#wagon-images').addClass('sky1');


  $("#startBTN").click(function(){
    $("#start").fadeOut(500);
    $("#characterInput").delay(500).fadeIn(500);
  });
  $("#characterBTN").click(function(){
    var playerOneName = $("#char1").val()
    var playerTwoName = $("#char2").val()
    var playerThreeName = $("#char3").val()
    var playerFourName = $("#char4").val()
    var playerFiveName = $("#char5").val()

    char1 = new Character(playerOneName)
    char2 = new Character(playerTwoName)
    char3 = new Character(playerThreeName)
    char4 = new Character(playerFourName)
    char5 = new Character(playerFiveName)
    wagon = new Wagon()

    wagon.characters.push(char1, char2, char3, char4, char5)
    wagon.profession()
    $("#characterInput").fadeOut(500);
    $("#store").delay(500).fadeIn(500);
    $('#player-one-name').text(char1.name);
    $('#player-two-name').text(char2.name);
    $('#player-three-name').text(char3.name);
    $('#player-four-name').text(char4.name);
    $('#player-five-name').text(char5.name);
    $('#player-one-status').text(char1.status);
    $('#player-two-status').text(char2.status);
    $('#player-three-status').text(char3.status);
    $('#player-four-status').text(char4.status);
    $('#player-five-status').text(char5.status);
    $('#wagon-food-remaining').text(wagon.food);

  });
$("#storeBTN").click(function(){
  $("#store").fadeOut(500);
  $("#gameMainScreen").delay(500).fadeIn(500);
  /* button will eventually add items to wagon's inventory count. presently hardcoded, so, no effect */
});

  $("#continue-button").click(function(){

    // turn()
    console.log("working!")
    if (x < 4) {
      $('#wagon-' + x).toggle();
      $('#wagon-images').removeClass('sky' + x);
      x++;
      $('#wagon-' + x).toggle();
      $('#wagon-images').addClass('sky' + x);
    } else {
      $('#wagon-' + x).toggle();
      $('#wagon-images').removeClass('sky' + x);
      x = 1;
      $('#wagon-' + x).toggle();
      $('#wagon-images').addClass('sky' + x);
    }
  });

  $("#continue-btn").click(function(){
    turn()
  });
});
