//get the divs that we will need for the itneractive experience
graphic = document.getElementById("graphic");
option1 = document.getElementById("option1");
option2 = document.getElementById("option2");
nextButton = document.getElementById("next-button");
dialogueText = document.getElementById("dialogue-text");

//what number of the dialogue options we are currently on
dialogueNum = 0;

//the giant list of dialogue options
dialogueOptions = [
		[false, "Lorem Ipsum", "", ""],
		[true, "Ipsum Lorem", '<button type="button" onclick=\'optionChoice(true, "")\'>Test</button>', "<button type=\"button\" onclick=\"optionChoice(false, failTexts[0])\">Test</button>"],
		[false, "You chose correctly", "", ""]
	];

//all of the failure dialogues
failTexts = [
		"You chose incorrectly"
	];

//pulls up new dialogue and options if applicable
function newDialogue(option) {
	//set the new dialogue
	dialogueText.innerHTML = dialogueOptions[dialogueNum][1];
	
	//set up the options
	console.log("Should be changing the options");
	console.log(dialogueOptions[dialogueNum][2]);
	console.log(dialogueOptions[dialogueNum][3]);
	option1.innerHTML = dialogueOptions[dialogueNum][2];
	option2.innerHTML = dialogueOptions[dialogueNum][3];
	
	//set up the next button for the next dialogue option
	if(option) {
		nextButton.innerHTML = "<button type=\"button\" disabled>Next</button>";
	} else {
		nextButton.innerHTML = "<button type=\"button\" onclick=\"newDialogue(" + dialogueOptions[dialogueNum + 1][0] + ")\">Next</button>";
	}
	
	//increment the dialogue number
	dialogueNum += 1;
}

//for selecting one of the options
function optionChoice(correct, failText) {
	//if correct, proceed with the story
	if (correct) {
		//set the new dialogue
		dialogueText.innerHTML = dialogueOptions[dialogueNum][1];
		
		//clear the options
		option1.innerHTML = "";
		option2.innerHTML = "";
		
		//set up the next button for the next dialogue option
		nextButton.innerHTML = "<button type=\"button\" onclick=\"newDialogue(" + dialogueOptions[dialogueNum + 1][0] + ")\">Next</button>";
		
		//increment the dialogue number
		dialogueNum += 1;
	}
	//otherwise we give the fail text
	else {
		//set the fail dialogue
		dialogueText.innerHTML = failText;
		
		//clear the options
		option1.innerHTML = "";
		option2.innerHTML = "";
	}
}

//resets the interactive experience
function reset() {
	//reset to the beginning dialogue
	dialogueText.innerHTML = "Press the Next button to start the interactive experience.";
	
	//clear the options
	option1.innerHTML = "";
	option2.innerHTML = "";
	
	//set up the next button for the first dialogue option
	nextButton.innerHTML = "<button type=\"button\" onclick=\"newDialogue(" + dialogueOptions[0][0] + ")\">Next</button>";
	
	//reset dialogueNum
	dialogueNum = 0;
}
