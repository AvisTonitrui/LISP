//get the divs that we will need for the itneractive experience
graphic = document.getElementById("graphic");
option1 = document.getElementById("option1");
option2 = document.getElementById("option2");
option3 = document.getElementById("option3");
dialogueText = document.getElementById("dialogue-text");

//what number of the dialogue options we are currently on
dialogueNum = 0;

//the giant list of dialogue options
dialogueOptions = [
		"Lorem Ipsum",
		"Ipsum Lorem"
	];

//pulls up new dialogue and options if applicable
function newDialogue(option, options) {
	dialogueText.innerHTML = dialogueOptions[dialogueNum];
	
	if (option) {
		option1.innerHTML = options[0];
		option2.innerHTML = options[1];
		option3.innerHTML = options[2];
	}
	
	//increment the dialogue number
	dialogueNum += 1;
}
