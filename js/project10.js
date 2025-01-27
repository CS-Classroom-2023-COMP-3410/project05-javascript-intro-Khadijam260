// Customizable Keyboard Trainer JavaScript Implementation

// DOM Elements
const textDisplay = document.getElementById("text-display");
const inputField = document.getElementById("input-field");
const difficultySelect = document.getElementById("difficulty-select");
const startButton = document.getElementById("start-button");
const resultsContainer = document.getElementById("results-container");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const restartButton = document.getElementById("restart-button");

// Variables
let targetText = "";
let startTime;
let totalTyped = 0;
let errors = 0;
let interval;

// Word lists for difficulties
const wordLists = {
  easy: ["cat", "dog", "book", "tree", "house", "car", "apple", "orange", "fish", "chair"],
  medium: ["journey", "mountain", "keyboard", "javascript", "building", "program", "bicycle", "picture", "holiday", "bridge"],
  hard: ["synchronization", "implementation", "unpredictable", "miscommunication", "responsibility", "cryptography", "configuration", "transformation", "representation", "classification"],
};

// Generate random text from word list
function generateRandomText(difficulty) {
  const words = wordLists[difficulty];
  const wordCount = difficulty === "easy" ? 10 : difficulty === "medium" ? 15 : 20;
  let text = "";
  for (let i = 0; i < wordCount; i++) {
    text += words[Math.floor(Math.random() * words.length)] + (i === wordCount - 1 ? "" : " ");
  }
  return text;
}

// Start a new typing session
function startSession() {
  const difficulty = difficultySelect.value;
  targetText = generateRandomText(difficulty);
  textDisplay.innerHTML = "";
  targetText.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    textDisplay.appendChild(span);
  });

  inputField.value = "";
  inputField.disabled = false;
  inputField.focus();
  startTime = Date.now();
  totalTyped = 0;
  errors = 0;
  resultsContainer.style.display = "none";

  clearInterval(interval);
  interval = setInterval(updateMetrics, 100);
}

// Update real-time metrics (WPM and accuracy)
function updateMetrics() {
  const elapsedTime = (Date.now() - startTime) / 60000; // Convert ms to minutes
  const wordsTyped = totalTyped / 5; // Average word length is 5 characters
  const wpm = Math.round(wordsTyped / elapsedTime);
  const accuracy = Math.max(0, Math.round((1 - errors / totalTyped) * 100));

  wpmDisplay.textContent = wpm || 0;
  accuracyDisplay.textContent = accuracy || 100;
}

// Handle user input
inputField.addEventListener("input", (e) => {
  const inputText = e.target.value;
  totalTyped = inputText.length;

  // Check for errors in real-time
  errors = 0;
  const spans = textDisplay.querySelectorAll("span");
  for (let i = 0; i < targetText.length; i++) {
    if (i < inputText.length) {
      if (inputText[i] === targetText[i]) {
        spans[i].classList.add("correct");
        spans[i].classList.remove("error");
      } else {
        spans[i].classList.add("error");
        spans[i].classList.remove("correct");
        errors++;
      }
    } else {
      spans[i].classList.remove("correct", "error");
    }
  }

  // Check if the input matches the target text
  if (inputText === targetText) {
    clearInterval(interval);
    showResults();
  }
});

// Display results
function showResults() {
  inputField.disabled = true;
  const elapsedTime = (Date.now() - startTime) / 60000; // Convert ms to minutes
  const wordsTyped = totalTyped / 5; // Average word length is 5 characters
  const wpm = Math.round(wordsTyped / elapsedTime);
  const accuracy = Math.max(0, Math.round((1 - errors / totalTyped) * 100));

  wpmDisplay.textContent = wpm;
  accuracyDisplay.textContent = accuracy;
  resultsContainer.style.display = "block";
}

// Restart the session
restartButton.addEventListener("click", () => {
  startSession();
});

// Start button event listener
startButton.addEventListener("click", () => {
  startSession();
});
