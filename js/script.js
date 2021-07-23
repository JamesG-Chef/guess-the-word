// Create global variables to select the following elements:

// The unordered list where the player's guessed letters will appear.
const guessedList = document.querySelector(".guessed_letters");
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
const word = "magnolia";
// create a new global variable called 'guessedLetters' with an empty array
const guessedLetters = [];

// Write a Function to Add Placeholders for Each Letter
const placeHolder = function (word) {
	const placeHolderLetters = [];
	for (const letter of word) {
		console.log (letter)
		placeHolderLetters.push("●");
	}

// Use an array and then join it back to a string using the .join("") method.
wordInProgress.innerText = placeHolderLetters.join("");

};


// Call the function and pass it the word variable as the argument.
placeHolder(word);



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

// create a variable that saves the successful return of the validateInput function
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



const makeGuess = function (guess) {
	// convert the guess to uppercase
	guess = guess.toUpperCase();
	// check to see if the array includes the current guessed letter.
	if (guessedLetters.includes(guess)) {
		message.innerText = "You've already guessed that letter, try again."
	} else {
	// If the guess is good add to the guessletters array
		guessedLetters.push(guess);
		console.log(guessedLetters);
	}
};








