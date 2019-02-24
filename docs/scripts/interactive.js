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
		[false, "Billy is a person who isn't the best at computers, but he tries his best to stay safe from being targeted by hackers with malicious intent.", "", "", "Neutral-Expression.png"],
		[true, "Today, Billy is going through his emails to see if there is anything interesting. When he does, he sees an email for some stranger offering a lucrative business deal. What should he do?", '<button type="button" onclick=\'optionChoice(false, failTexts[0])\'>Respond to the email</button>', "<button type=\"button\" onclick=\"optionChoice(true, '')\">Delete the email</button>", "Phishing-attempts.png"],
		[false, "Billy deleted the email, successfully avoiding the phishing scam.", "", "", "Neutral-Expression.png"],
		[true, "Continuing through his email, Billy comes across an email that says it is from the IRS, and wants its payment in Gift Cards. What should Billy do?", '<button type="button" onclick=\'optionChoice(false, failTexts[0])\'>Respond to the email</button>', "<button type=\"button\" onclick=\"optionChoice(true, '')\">Delete the email</button>", "Phishing-attempts.png"],
		[false, "Deleting the email, Billy was saved from another attempt at getting viruses onto his computer.", "", "", "Neutral-Expression.png"],
		[true, "Billy was just about done looking through his emails, when he noticed one more that seemed a little bit off. It was someone claiming to be a long lost relative that needed money to pay for bail. What should he do now?", '<button type="button" onclick=\'optionChoice(false, failTexts[0])\'>Respond to the email</button>', "<button type=\"button\" onclick=\"optionChoice(true, '')\">Delete the email</button>", "Phishing-attempts.png"],
		[false, "Billy manages to avoid the last attempt at putting viruses onto his computer and goes about the rest of his day not having to worry about his computer randomly crashing on him.", "", "", "Neutral-Expression.png"],
		[false, "You have ocmpleted the interactive experience, go to the information pages to learn more about protecting yourself and others from malicious hackers.", "", "", "BlackScreen.png"]
	];

//all of the failure dialogues
failTexts = [
		["Billy attempted to open the email, and instead ended up getting a virus!", "Pissed-Expression.png"]
	];

//pulls up new dialogue and options if applicable
function newDialogue(option) {
	//change the image if applicable
	if (dialogueOptions[dialogueNum][4] != "") {
		graphic.innerHTML = "<img src=\"images/" + dialogueOptions[dialogueNum][4] + "\">";
	}
	
	//set the new dialogue
	dialogueText.innerHTML = dialogueOptions[dialogueNum][1];
	
	//set up the options
	option1.innerHTML = dialogueOptions[dialogueNum][2];
	option2.innerHTML = dialogueOptions[dialogueNum][3];
	
	//set up the next button for the next dialogue option
	if(option) {
		nextButton.innerHTML = "<button type=\"button\" disabled class=\"hidden\">Next</button>";
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
		//change the image if applicable
		console.log(dialogueNum);
		if (dialogueOptions[dialogueNum][4] != "") {
			graphic.innerHTML = "<img src=\"images/" + dialogueOptions[dialogueNum][4] + "\">";
		}
		
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
		dialogueText.innerHTML = failText[0];
		
		//set the fail image, if applicable
		if (failText[1] != "") {
			graphic.innerHTML = "<img src=\"images/" + failText[1] + "\">";
		}
		
		//clear the options
		option1.innerHTML = "";
		option2.innerHTML = "";
	}
}

//resets the interactive experience
function reset() {
	//reset the image
	graphic.innerHTML = "<img src=\"images/BlackScreen.png\">";
	
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
