    // generate a word at random and store it in a variable
    var words = ["monster", "table", "computer", "paper", "phone", "bow"];

    // sets number of lives
    var chances = 7;

    // sets the number of correct guesses
    var correctGuesses = 0;

    // sets an open array
    var lettersGuessed = [];

    // store random array in a variable
    var word = words[Math.floor(Math.random()*words.length)];

    // display the # of letters and word in consolea
    console.log("The # of letters is: " + word.length);
    console.log("The word is: " + word);

    // display dashes on screen for letters in word
    //  make array the same length of the word.length
    var dashes = [];
    for (i = 0; i < word.length; i++) {
      dashes[i] = "_ ";
    }
 
    // Creating variables to hold correct and incorrect values
    var correct = 0;
    var incorrect = 0;

   // ===================== FUNCTION ============================================
    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // adds image to html
    // var myimage1 = document.getElementById("image1");
    // myimage1.innerHTML="<img src='http://lorempixel.com/100/100' >";

      // set userguess to key pressed
      var userGuess = event.key;

      // set guess to false until logic is ran
      var isGoodGuess = false;

      var correctLetterIndex = -1;
      
      // logic to determine if user guess is right or wrong
      for (var j = 0; j < word.length; j++) {

        // check if idvividual letter matches user guess
        if (word[j] === userGuess) {
          console.log("Good " + j);
          isGoodGuess = true;
          correctLetterIndex = j;
          dashes[j] = word[j];
          lettersGuessed = [];
        } else {
          console.log("Bad " + j);
          }
      }
      console.log("Good guess: " + isGoodGuess);

      //Decrease lives on incorrect answer
      if (isGoodGuess === false) {
        chances--;
        console.log("add hang");
        } else {
          correctGuesses++;
        }


      console.log("lives: " + chances);  
      var newLives = chances;


        // Creating a variable to hold our new HTML
        var stats = 
        "<p>You chose: " + userGuess + "</p>" +
        "<p>Correct guess: " + correctGuesses + "</p>" +
        "<p>Lives Left: " + chances + "</p>" + 
        "<p>";

        for (var j = 0; j < dashes.length; j++) {
          stats = stats + dashes[j];
          }

        stats = stats + "</p>";

        var guesses = 
        "<p>Letters guessed: " + lettersGuessed + "</p>";

        // Set the inner HTML contents of the #game div to html string
        document.querySelector("#game").innerHTML = stats;

        //sets image and result variables
        var hang1 = "<img src='assets/images/hang1.png' >";
        var hang2 = "<img src='assets/images/hang2.png' >";
        var hang3 = "<img src='assets/images/hang3.png' >";
        var hang4 = "<img src='assets/images/hang4.png' >";
        var hang5 = "<img src='assets/images/hang5.png' >";
        var hang6 = "<img src='assets/images/hang6.png' >";
        var hang7 = "<img src='assets/images/hang7.png' >";
        var lost = "YOU LOSE!!!";
        var win = "YOU WIN!!!";

        if (chances === 7) {
          document.querySelector("#image").innerHTML = hang1;
        } else if (chances === 6) {
          document.querySelector("#image").innerHTML = hang2;
        } else if (chances === 5) {
          document.querySelector("#image").innerHTML = hang3;
        } else if (chances === 4) {
          document.querySelector("#image").innerHTML = hang4;
        } else if (chances === 3) {
          document.querySelector("#image").innerHTML = hang5;
        } else if (chances === 2) {
          document.querySelector("#image").innerHTML = hang6;
        } else if (chances === 1) {
          document.querySelector("#image").innerHTML = hang7;
        } else {
          document.querySelector("#result").innerHTML = lost;
        } 

        // logic to determin if correct guesses equal the word length
        if (correctGuesses === word.length) {
          document.querySelector("#result").innerHTML = win;
        }

        // if chances = 0 OR correctGuesses = word.length  --> reset game
        // Reset
        if (chances === 0 || correctGuesses === word.length) {
          console.log("RESET");
          chances = 7;
        }
    };