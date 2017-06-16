//global variables

	var words = ["cat", "dog", "hat", "top", "hot", "rot"];
	var computerChoice = "";
	var userChoice = "";
	var wrongGuesses = [];
	var guessesLeft = 10;
	var wins = 0;
	var losses = 0;

//Computer chooses word randomly from word choice array
	function computerMakesChoice(){
		var randomIndex = Math.floor(Math.random () * words.length);
		computerChoice = words[randomIndex];
		console.log("computerChoice", computerChoice);
	}

//function to reset game
	function resetGame (){
		userChoice = "";
		guessesLeft = 10;
		wrongGuesses = [];
		computerMakesChoice();
	}

//Number of dashes display according to the randomized word chosen
	" _ _ _ "

//user enters a letter from letter choice array
	//if user choice is one of the letters from the word
		//alert: Good job
		//number of guesses decrements
		//used letter array increments
		//letter shows on dashes
	//else if letter is wrong
		//alert: wrong letter, try again
		//number of guesses decrements
		//used letter array increments
	//else if user guesses right word
		//alert: You win!
		//wins increment
		//game reset
	//else guesses left < 0
		//losses increment
		//game reset