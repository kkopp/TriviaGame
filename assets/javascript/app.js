$(document).ready(function(){
    // Global Variables


    // Game Questions 
    var triviaQuestions = [{
        question: "What is a group of bears called?",
        choices: ["A Den", "A Pack", "A Sleuth", "A Tribe"],
        answer: 2,
    }, {
        question: "What is a group of hedgehogs called?",
        choices: ["An Array", "A Burrow", "A Crowd", "A Den"],
        answer: 1,
    }, {
        question: "What is a group of monkeys called?",
        choices: ["A Barrel", "A Troop", "A Carload", "All of the Above"],
        answer: 3,
    }, {
        question: "What is a group of jaguars called?",
        choices: ["A Pounce", "A Prowl", "A Growl", "A Purr"],
        answer: 1,
    }, {
        question: "What is a group of cobras called?",
        choices: ["An Arsenal", "A Magazine", "A Pit", "A Quiver"],
        answer: 3,
    }, {
        question: "What is a group of mice called?",
        choices: ["A Mischief", "A Scurrying", "A Burrowing", "A Peep"],
        answer: 0,
    }, {
        question: "What is a group of ravens called?",
        choices: ["A Murder", "An Unkindness", "A Smattering", "A Squawk"],
        answer: 1,
    }, {
        question: "What is a group of porcupines called?",
        choices: ["A Quiver", "A Sharpness", "A Prickle", "A Poke"],
        answer: 2,
    }, {
        question: "What is a group of giraffes called?",
        choices: ["A Tower", "A Skyscraper", "A Castle", "A Treetop"],
        answer: 0,
    }, {
        question: "What is a group of weasels called?",
        choices: ["A Cloak", "A Harbor", "A Stash", "A Sneak"],
        answer: 3,
    }]

    // Game Functions
    for(var i = 0; i < triviaQuestions.length; i++){
        var triviaQuestionArray = triviaQuestions[i];
        $(".quizQuestion").text(triviaQuestions[i].question);
        for(j = 0; j < triviaQuestions[i].answers.length; j++){
            var btn = document.createElement("button");
            var t = document.createTextNode(triviaQuestions[i].answers[j])
            btn.appendChild(t);
            document.body.appendChild(btn);
        }
        $(".correctAnswer").text(triviaQuestions[i].correct);
    }

    // when you click the start button, it hides itself //
    $("button").on("click", function() {
        $(this).hide();

    // start timer on button click, show on page //
    var timer = 15;
    var countdownTimer = setInterval(function() {
        timer--;
        $(".timer").html(timer);
        if (timer <= 0)
            clearInterval(countdownTimer);
    }, 1000);

    });
});