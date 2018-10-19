$(document).ready(function(){



// Global Variables


// Game Questions 
var triviaQuestions = [{
    question: "What is a group of bears called?",
    answers: ["A Den", "A Pack", "A Sleuth", "A Tribe"],
    correct: "c",
}, {
    question: "What is a group of hedgehogs called?",
    answers: ["An Array", "A Burrow", "A Crowd", "A Den"],
    correct: "a",
}, {
    question: "What is a group of monkeys called?",
    answers: ["A Barrel", "A Troop", "A Carload", "All of the Above"],
    correct: "d",
}, {
    question: "What is a group of jaguars called?",
    answers: ["A Pounce", "A Prowl", "A Growl", "A Purr"],
    correct: "b",
}, {
    question: "What is a group of cobras called?",
    answers: ["An Arsenal", "A Magazine", "A Pit", "A Quiver"],
    correct: "d",
}, {
    question: "What is a group of mice called?",
    answers: ["A Mischief", "A Scurrying", "A Burrowing", "A Peep"],
    correct: "a",
}, {
    question: "What is a group of ravens called?",
    answers: ["A Murder", "An Unkindness", "A Smattering", "A Squawk"],
    correct: "b",
}, {
    question: "What is a group of porcupines called?",
    answers: ["A Quiver", "A Sharpness", "A Prickle", "A Poke"],
    correct: "c",
}, {
    question: "What is a group of giraffes called?",
    answers: ["A Tower", "A Skyscraper", "A Castle", "A Treetop"],
    correct: "a",
}, {
    question: "What is a group of weasels called?",
    answers: ["A Cloak", "A Harbor", "A Stash", "A Sneak"],
    correct: "d",
}]

// Game Functions




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
