// Predefined quiz questions
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      answer: 0, // Index of the correct answer
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: 1,
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: 3,
    },
  ];
  
  // DOM Elements
  const quizContent = document.getElementById("quiz-content");
  const nextButton = document.getElementById("next-button");
  const restartButton = document.getElementById("restart-button");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Display the current question
  function displayQuestion() {
    const question = questions[currentQuestionIndex];
  
    quizContent.innerHTML = `
      <div class="question">${question.question}</div>
      <ul class="options">
        ${question.options
          .map(
            (option, index) => `
          <li>
            <button onclick="handleAnswer(${index})">${option}</button>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  
    nextButton.style.display = "none";
  }
  
  // Handle the user's answer
  function handleAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".options button");
  
    // Disable all buttons after selecting an answer
    buttons.forEach((button) => (button.disabled = true));
  
    if (selectedIndex === question.answer) {
      buttons[selectedIndex].classList.add("correct");
      score++;
    } else {
      buttons[selectedIndex].classList.add("wrong");
      buttons[question.answer].classList.add("correct");
    }
  
    // Show the next button
    nextButton.style.display = "block";
  
    // If it's the last question, change the next button to "Finish"
    if (currentQuestionIndex === questions.length - 1) {
      nextButton.textContent = "Finish Quiz";
    }
  }
  
  // Move to the next question or show the results
  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
    } else {
      showResults();
    }
  }
  
  // Display the quiz results
  function showResults() {
    quizContent.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>You scored ${score} out of ${questions.length}.</p>
      <h3>Review Answers:</h3>
      <ul class="review">
        ${questions
          .map(
            (question, index) => `
          <li>
            <div><strong>Q${index + 1}:</strong> ${question.question}</div>
            <div><strong>Your Answer:</strong> ${
              document.querySelectorAll(".options button")[index]?.innerText || "Not Answered"
            }</div>
            <div><strong>Correct Answer:</strong> ${
              question.options[question.answer]
            }</div>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  
    nextButton.style.display = "none";
    restartButton.style.display = "block";
  }
  
  // Restart the quiz
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    restartButton.style.display = "none";
    nextButton.textContent = "Next Question";
    displayQuestion();
  }
  
  // Event listeners
  nextButton.addEventListener("click", nextQuestion);
  restartButton.addEventListener("click", restartQuiz);
  
  // Start the quiz
  displayQuestion();
  