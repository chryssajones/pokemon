console.log("JavaScript is running");

// declare and initialize variables
var pokemon = {
	pikachu: ["Pikachu", "Thunderbolt", "Quick Attack", 55, 20], 
	squirtle: ["Squirtle", "Bubble", "Water Gun", 40, 60],
	bulbasaur: ["Bulbasaur", "Razor Leaf", "Seed Bomb", 55, 80],
	charmander: ["Charmander", "Ember", "Flamethrower", 30, 75],
	jigglypuff: ["Jigglypuff", "Double Slap", "Body Slam", 15, 65],
}

var userHp = 0;
var userXp = 0;
var machineHp = 0;
var machineXp = 0;

var spanUserHp = $("#spanUserHp");
var spanUserXp = $("#spanUserXp");
var spanUserAttackResult = $("#spanUserAttackResult");
var spanMachineHp = $("#spanMachineHp");
var spanMachineXp = $("#spanMachineXp");
var spanMachineAttackResult = $("#spanMachineAttackResult");

// declare functions

function Attack1(object){
  console.log(object + " was clicked.");
  machineHp -= pokemon.object[3]
  spanMachineHp.textContent = machineHp;
  userXp += (Math.round((pokemon.object[3])/3))
  spanUserXp.textContent = userXp;
  console.log(userXp, machineXp);
 
}

//call functions



