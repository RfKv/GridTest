
var class_fighter = document.getElementsByClassName('fighter');
var class_mage = document.getElementsByClassName('mage');
var class_gunner = document.getElementsByClassName('gunner');
var character = document.getElementsByClassName('character');

var a_btn = document.getElementById("a_btn");
var f_btn = document.getElementById("f_btn");
var m_btn = document.getElementById("m_btn");
var g_btn = document.getElementById("g_btn");

console.log(typeof(class_mage));

function displayAll(){
	for(var i;i<class_fighter.length;i++){
		class_fighter[i].style.color = 'blue';
		class_mage[i].style.color = 'blue';
		class_gunner[i].style.color = 'blue';
	}
}

function displayFighter(){
	class_fighter.style.display = "block";
	class_mage.style.visibility = "hidden";
	class_gunner.style.display = "none";
}

function displayMage(){
	class_fighter.style.display = "none";
	class_mage.style.display = "block";
	class_gunner.style.display = "none";
}

function displayGunner(){
	class_fighter.style.display = "none";
	class_mage.style.display = "none";
	class_gunner.style.display = "block";
}