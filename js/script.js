// Create global variables to select the following elements:

// The unordered list where the player's guessed letters will appear.
const guessedLetters = document.querySelector(".guessed_letters");
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


// Write a Function to Add Placeholders for Each Letter
// Create and name a function to update the paragraph's innerText for the "words-in-progress" element with circle symbols (●) to represent each letter in the word.
// The symbols will stay on the screen until the correct letter is guessed (in a future step). Hint: Copy and paste the ● symbol into your code!
const placeHolder = function (word) {
	const placeHolderLetters = [];
	for (const letter of word) {
		console.log (letter)
		placeHolderLetters.push("●");
	}

// Call the function and pass it the word variable as the argument. You should see 8 circle symbols on the screen, one for each letter in the word "magnolia." 
// Hint: You'll need to use an array and then join it back to a string using the .join("") method.
wordInProgress.innerText = placeHolderLetters.join("");
};

placeHolder(word);

// Add an Event Listener for the Button

	guessButton.addEventListener("click", function (e) {

// Add an event listener for when a player clicks the Guess button. In the callback function, add a parameter for the event: e.
// Because you're working with a form, you want to prevent the default behavior of clicking a button, the form submitting, and then reloading the page.
// To prevent this reloading behavior, add this line of code at the top of the callback function: e.preventDefault();.
	
	e.preventDefault();

// Create and name a variable to capture the value of the input. Log out the value of the variable capturing the input.
// Then, empty the value of the input. You should see the letter you enter into the input field in the console when the Guess button is clicked. 


	const guess = guessInput.value;
	console.log(guess);
	guessInput.value = "";

});