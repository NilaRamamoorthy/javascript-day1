// Array of questions, options, and correct answers
var questions = [
    {
        question: "What is the color of mango?",
        options: ["red", "pink", "yellow"],
        correct_ans: "yellow"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris"],
        correct_ans: "Paris"
    },
    {
        question: "How many days are there in a week?",
        options: ["5", "7", "6"],
        correct_ans: "7"
    }
];

// User's answers (You can modify this dynamically or collect from a form)
let user_answers = ["yellow", "Paris", "7"];

// Function to check answers and calculate the score
function checkAnswers(questions, user_answers) {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        if (user_answers[i] === questions[i].correct_ans) {
            score++; // Increment score if answer is correct
        }
    }

    return score;
}

// Call the function and get the result
let final_score = checkAnswers(questions, user_answers);

// Display results
console.log(`You scored ${final_score} out of ${questions.length}`);

// Show detailed result
for (let i = 0; i < questions.length; i++) {
    console.log(`${i + 1}. ${questions[i].question}`);
    console.log(`Your answer: ${user_answers[i]}`);
    console.log(`Correct answer: ${questions[i].correct_ans}`);
    console.log(user_answers[i] === questions[i].correct_ans ? "✅ Correct!" : "❌ Wrong!");
    console.log("--------------------");
}
