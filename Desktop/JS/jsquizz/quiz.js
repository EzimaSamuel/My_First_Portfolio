function checkAnswer() {
    const correctAnswer = "4"; // Correct answer for the question
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = 'Correct! Well done.';
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);