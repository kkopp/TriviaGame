$(document).ready(function() {

    // ** Global Variables ** //

    var currentQuestion;
    var correct;
    var incorrect;
    var unanswered;
    var answered;
    var seconds;
    var time;
    var userChoice;
    var text = {
        correct: "Great guess! You got it right!",
        incorrect: "Aw man, better luck next time!",
        noTime: "Too slow!  You ran out of time!",
        done: "How did you do?"
    }


    // ** Game Questions ** //

    var triviaQuestions = [{
        question: "What is a group of bears called?",
        choices: ["A Den", "A Pack", "A Sloth", "A Tribe"],
        answer: 2,
        image: "assets/images/bears.gif",
        fact: "Unlike many mammals, bears can see in color."
    }, {
        question: "What is a group of hedgehogs called?",
        choices: ["An Array", "A Burrow", "A Crowd", "A Den"],
        answer: 0,
        image: "assets/images/hedgehogs.gif",
        fact: "Hedgehogs have between 5000 and 7000 quills."
    }, {
        question: "What is a group of monkeys called?",
        choices: ["A Barrel", "A Troop", "A Carload", "All of the Above"],
        answer: 3,
        image: "assets/images/monkeys.gif",
        fact: "There are currently 264 known monkey species!"
    }, {
        question: "What is a group of jaguars called?",
        choices: ["A Pounce", "A Prowl", "A Growl", "A Purr"],
        answer: 1,
        image: "assets/images/jaguars.gif",
        fact: "Jaguars can be distinguished from other big cats by the shape of their spots. The spots resemble roses, and as such are known as rosettes."
    }, {
        question: "What is a group of cobras called?",
        choices: ["An Arsenal", "A Magazine", "A Pit", "A Quiver"],
        answer: 3,
        image: "assets/images/cobras.gif",
        fact: "In captivity, the king cobra's average lifespan is 17.1 years!"
    }, {
        question: "What is a group of mice called?",
        choices: ["A Mischief", "A Scurrying", "A Burrowing", "A Peep"],
        answer: 0,
        image: "assets/images/mice.gif",
        fact: "The incisor teeth of mice never stop growing. Their teeth grow at a rate of .3mm a day!"
    }, {
        question: "What is a group of ravens called?",
        choices: ["A Murder", "An Unkindness", "A Smattering", "A Squawk"],
        answer: 1,
        image: "assets/images/ravens.gif",
        fact: "Ravens use gestures to communicate. A study in Austria found that they point with their beaks to indicate objects to other birds, just as we do with our fingers."
    }, {
        question: "What is a group of porcupines called?",
        choices: ["A Quiver", "A Sharpness", "A Prickle", "A Poke"],
        answer: 2,
        image: "assets/images/porcupine.gif",
        fact: "The porcupine is the third largest rodent in the world, and the second largest in North America.  That is right behind the second-place beaver, and first-place capybara!"
    }, {
        question: "What is a group of giraffes called?",
        choices: ["A Tower", "A Skyscraper", "A Castle", "A Treetop"],
        answer: 0,
        image: "assets/images/giraffes.gif",
        fact: "Over short distances, giraffes can run at speeds up to 35mph!"
    }, {
        question: "What is a group of weasels called?",
        choices: ["A Cloak", "A Harbor", "A Stash", "A Sneak"],
        answer: 3,
        image: "assets/images/weasels.gif",
        fact: "Weasels stay warm by lowering their metabolism and curling into balls inside their burrows."
    }];

    // ** MAIN GAME FUNCTIONS ** //

    // hides the game container

    $("#game").hide(); 

    // when you click the start button, the start container hides itself...game starts

    $("#startbtn").on("click", function() {
        $("#gameStart").hide();
        gameStart();

    });

    // when you click the reset button, the results container will hide, game start function will run again

    $("#resetbtn").on("click", function() {
        $("#results").hide();
        gameStart();

    });

    // game start function

    function gameStart() {
        $("#game").show(); //game container is shown
        $("#answers").hide(); //answer container is hidden
        $("#results").hide(); //results container is hidden
        correct = 0; //variables for answers all set to zero
        incorrect = 0
        unanswered = 0;
        currentQuestion = 0; //question array is set to start at zero
        questions(); //call to question function

    }

    // function to add questions to the html

    function questions() {
        $("#answers").hide(); //hides the answers container
        $("#questions").show(); //shows the questions container
        answered = true; //sets answered variable to true

        //writes the quiz question into html div
        $("#quizQuestion").text(triviaQuestions[currentQuestion].question);

        // for loop that creates a div for each choice and assigns in a data value index so it knows which answer is correct
        for (var i = 0; i < triviaQuestions.length; i++) {
            var list = $("<div>");
            list.text(triviaQuestions[currentQuestion].choices[i]);
            list.attr({"data-index": i });
            list.addClass("thisChoice");
            $("#choices").append(list);

    }

    
        countdown(); //calls the timer function

    // timer functions

        $(".thisChoice").on("click", function() {
            userChoice = $(this).data("index");
            clearInterval(time);
            showAnswer();
        })
}
    // function for timer countdown
        function countdown() {
        seconds = 20;
        $("#timer").html(seconds);
        answered = true;
        time = setInterval(countDownShow, 1000);
        }

        function countDownShow() {
        seconds--;
        $("#timer").html(seconds);
        if(seconds < 0) {
            clearInterval(time);
            answered = false;
            showAnswer();
        } 
    }

    // function to show answers 
    function showAnswer() {
        $("#questions").hide(); //hides trivia question container
        $("#results").hide(); //hides the results container
        $("#answers").show(); //shows the answers container
        $(".thisChoice").empty(); //empties the information put in the "thisChoice class"

        //creating variablces to determine right/wrong answers
        var rightAnswerText = triviaQuestions[currentQuestion].choices[triviaQuestions[currentQuestion].answer];
        var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
        //console.log(rightAnswerText);
        //console.log(rightAnswerIndex);

        //variables to add images and facts after each question
        var gifLink = triviaQuestions[currentQuestion].image;
		var gifImg = $("<img>");
		gifImg.attr("Src", gifLink);
		gifImg.addClass("gifImg");
		$("#image").html(gifImg);

		var funFact = triviaQuestions[currentQuestion].fact;
			fact = $("<div>");
			fact.html(funFact);
			fact.addClass("fact");
        	$("#facts").html(fact);

        if ((userChoice === rightAnswerIndex) && (answered === true)) {
			correct++;
			$("#text").html(text.correct);
			$("#correctAnswer").hide();
		} else if ((userChoice !== rightAnswerIndex) && (answered === true)) {
			incorrect++;
			$("#text").html(text.incorrect);
			$("#correctAnswer").show().html("The correct answer was: " + rightAnswerText);
		} else {
			unanswered++;
			$("#text").html(text.noTime);
			$("#correctAnswer").html("The correct answer was: " + rightAnswerText);
			answered = true;
		}


		if (currentQuestion === (triviaQuestions.length-1)) {
			setTimeout(results, 10000);
		} else {
			currentQuestion++;
			setTimeout(questions, 10000);
		}

    }

    // ** End of Game ** //

    function results() {
		$("#answers").hide(); //hides the answers container
		$("#questions").hide(); //hides the questions container
		$("#results").show(); //shows the results container
		$("#result").html(text.done); //adds the text for the game being done
		$("#correct").html("You answered " + correct + " questions correctly."); //shows how many answers you got correct
		$("#incorrect").html("You answered " + incorrect + " questions incorrectly."); //shows how many you guessed incorrectly
		$("#unanswered").html("The time got the best of you on " + unanswered + " questions."); //shows how many you did not answer at all
		$("#resetbtn").show(); //shows the reset button so you can play again
	}

    });
