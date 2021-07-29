// Create global variables to select the following elements:

// The unordered list where the player's guessed letters will appear.
const guessedList = document.querySelector(".guessed-letters");
// The button with the text "Guess!" in it.
const guessButton = document.querySelector(".guess");
// The text input where the player will guess a letter.
const guessInput = document.querySelector(".letter");
// The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");
// The paragraph where the remaining guesses will display.
const remainingGuessesElement = document.querySelector(".remaining");
// The span inside the paragraph where the remaining guesses will display.
const remainingGuessesSpan = document.querySelector(".remaining span");
// The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");
// The hidden button that will appear prompting the player to play again.
const hiddenButton = document.querySelector(".play-again hide");

// Create another global variable called word and give it the value of "magnolia". 
// Magnolia is your starting word to test out the game until you fetch words from a hosted file in a later step.
let word = "magnolia";
// create a new global variable called 'guessedLetters' with an empty array
const guessedLetters = [];
// Create a global variable called remainingGuesses and set it to a value of 8
let remainingGuesses = 8;

// add an async function called getWord() to fetch data from a file (in this case a list of words)
const getWord = async function () {
	const fetchWords = await fetch (`https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt`);
	// the data is being fetched from a text file rather than a JSON file so use .text() rather than .json().
	const words = await fetchWords.text();
	// Log out the data retrieved
	console.log(words);
	// transform the data into an array - the words are each seperated by a line break "\n", so this needs to be used as the 'delimiter'
	// (the character to separate the words) when the 'split()' method is used.
	const wordArray = words.split("\n")
	console.log(wordArray);
	// grab a random word index from the wordArray
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    // pull out a random word and remove any extra whitespace using the 'trim()' method
    // assign this random word to the global 'word' variable then change the declaration (at the top) from 'const' to 'let' so that it can change
    word = wordArray[randomIndex].trim();
    // 
    console.log(word);
    // call the 'placeholder' function, passing it the 'word' variable
    placeHolder(word);
};

 // Start the game with a new word
getWord();

// Write a Function to Add Placeholders for Each Letter
const placeHolder = function (word) {
	const placeHolderLetters = [];
	for (const letter of word) {
		console.log (letter)
		placeHolderLetters.push("●");
	}

// Change the text of the word in progress into the placeholders for each letter
// Use an array and then join it back to a string using the .join("") method.
wordInProgress.innerText = placeHolderLetters.join("");

};


// Add an Event Listener for when a player clicks the guess Button
// In the callback function, add a parameter for the event: e.
	
	guessButton.addEventListener("click", function (e) {
// To prevent reloading behavior, add this line of code at the top of the callback function: e.preventDefault();.
	e.preventDefault();
// Empty the text of the message element.
	message.innerText = "";
// Create and name a variable to grab the value of the input. 
	const guess = guessInput.value;
	// Log out the value of the variable capturing the input.
	console.log(guess);

// create a variable that saves the letter validated by the validateInput function
const goodGuess = validateInput(guess);
	console.log(goodGuess);

// Using a conditional statement use the returned value of the validateInput function to call the 
// makeGuess function that will store the array of correct guesses.
if (goodGuess) {
	makeGuess(guess);
}
	// Empty the value of the input. You should see the letter you enter into the input field in the console when the Guess button is clicked. 
	guessInput.value = "";

});




// Create and name a function that accepts the input value as a parameter. This function's purpose is to validate the player's input.
const validateInput = function (inputValue) {
// Inside the function, create a variable for the accepted letter sequence, use a regular expression to ensure the player inputs a letter!
		const acceptedLetter = /[a-zA-Z]/;
// Still inside the function, use a conditional block to check for different scenarios. First, check if the input is empty.
		if (inputValue.length === 0) {
		message.innerText = "You forgot to input a letter, try again";
		
// Check if the player has entered more than one letter.
		} else if (inputValue.length > 1) {
		message.innerText = "I only need 1 letter at a time please, try again.";
		
// Check if they've entered a character that doesn't match the regular expression pattern using the.match() method here.  
		} else if (!inputValue.match(acceptedLetter)) {
		message.innerText = "I'm afraid that isn't a letter, please try again."
	}
// If all the other conditions aren't met, the input is a letter, which is what you're looking for! Return the input.
		else {
		return inputValue;
	}
 };


// Create a function to store the players correct inputs as the same format 
// Create a new empty array to store the correct inputs

const makeGuess = function (guess) {
	// convert the guess to uppercase
	guess = guess.toUpperCase();
	// check to see if the array includes the current guessed letter.
	if (guessedLetters.includes(guess)) {
		message.innerText = "You've already guessed that letter, try again."
	} else {
	// If the guess is good add the letter to the guessletters array
		guessedLetters.push(guess);
		console.log(guessedLetters);
		showGuessedLetters();
		countRemainingGuesses(guess);
		updateWordInProgress(guessedLetters);
		
	}
};

// Create a Function to Show the Guessed Letters

// Create and name a function to update the page with the letters the player guesses (see screenshot above).
const showGuessedLetters = function () {
// Empty the innerHTML of the unordered list where the player’s guessed letters will display.
	guessedList.innerHTML = " ";
// Create a new list item for each letter inside your guessedLetters array (i.e., the global variable) and add it to the unordered list.
	for (const letter of guessedLetters) {
		const li = document.createElement("li");
		li.innerText = letter;
		guessedList.append(li);
	}
// Call the function inside the else statement of the makeGuess function so the letter displays when it hasn’t been guessed before.

};


// Create and name a function to update the word in progress that accepts the guessedLetters array as a parameter. 
// This function will replace the circle symbols with the correct letters guessed.

const updateWordInProgress = function (guessedLetters) {
	// Create a variable called wordUpper to change the word variable to uppercase. 
	const wordUpper = word.toUpperCase();
	// Create a variable to split the word string into an array so that the letter can appear in the guessedLetters array: 
	const wordArray = wordUpper.split("");
	// Check if the wordArray contains any letters from the guessedLetters array. 
	// You’ll want to create a new array with the updated characters.
	const revealWord = [];
	for (const letter of wordArray) {
		// If it does contain any of the letters, update the circle symbol with the correct letter.
		if (guessedLetters.includes(letter)) {
			revealWord.push(letter.toUpperCase());
		} else {
			revealWord.push("●");
		}
	}
	// use join() to update the empty paragraph where the word in progress will appear.
	wordInProgress.innerText = revealWord.join("");
	hasPlayerWon();
	
};
// Call the function at the bottom of the else statement inside the makeGuess function and pass it guessedLetters as an argument.


// Create a Function to Count Guesses Remaining
const countRemainingGuesses = function (guess) {
	const upperWord = word.toUpperCase();
	if (!upperWord.includes(guess)) {
		message.innerText = "Sorry that's a wrong guess";
		remainingGuesses -= 1;
	} else { 
		message.innerText = `Well done! ${guess} is a good guess!`;
	}

	if (remainingGuesses === 0) {
		message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
	} else if (remainingGuesses === 1) {
		remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
	} else {
		remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
	}
};



// Create a Function to Check If the Player Won
const hasPlayerWon = function () {
	if (word.toUpperCase() === wordInProgress.innerText) {
		message.classList.add(".win")
		message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`
	} 
}; 

















