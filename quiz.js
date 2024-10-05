// Function to check the selected answer
function checkAnswer() {
    // Correct answer for the quiz
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Get the feedback element to display results
    const feedbackElement = document.getElementById("feedback");

    // Check if the user has selected an answer
    if (userAnswer) {
        // Check if the selected answer is correct
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        // If no answer is selected, prompt the user
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);