// Interactive Story Game JavaScript Implementation

// Variables to store game state
let currentScene = "start";
const gameProgress = JSON.parse(localStorage.getItem("gameProgress")) || { currentScene: "start" };

// Get references to DOM elements
const storyContainer = document.getElementById("story-container");
const choicesContainer = document.getElementById("choices-container");
const resetButton = document.getElementById("reset-button");
const progressBar = document.getElementById("progress-bar");

// Scenes of the game
const scenes = {
  start: {
    text: "You wake up in a mysterious forest. What do you do?",
    progress: 0,
    choices: [
      { text: "Explore the forest", nextScene: "forest" },
      { text: "Follow the path", nextScene: "path" }
    ]
  },
  forest: {
    text: "You see a strange creature. It looks friendly. What do you do?",
    progress: 33,
    choices: [
      { text: "Approach the creature", nextScene: "creature" },
      { text: "Run away", nextScene: "run" }
    ]
  },
  path: {
    text: "You find a small village. What do you do?",
    progress: 33,
    choices: [
      { text: "Talk to the villagers", nextScene: "villagers" },
      { text: "Keep walking", nextScene: "walk" }
    ]
  },
  creature: {
    text: "The creature gives you a magical artifact. You win!",
    progress: 100,
    choices: []
  },
  run: {
    text: "You get lost in the forest. Game over.",
    progress: 100,
    choices: []
  },
  villagers: {
    text: "The villagers give you food and shelter. You win!",
    progress: 100,
    choices: []
  },
  walk: {
    text: "You wander aimlessly and get lost. Game over.",
    progress: 100,
    choices: []
  }
};

// Function to update the story based on the current scene
function updateStory() {
  const scene = scenes[currentScene];
  storyContainer.textContent = scene.text;
  progressBar.style.width = `${scene.progress}%`;

  // Clear previous choices
  choicesContainer.innerHTML = "";

  // Create choice buttons
  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.addEventListener("click", () => {
      currentScene = choice.nextScene;
      gameProgress.currentScene = currentScene;
      localStorage.setItem("gameProgress", JSON.stringify(gameProgress));
      updateStory();
    });
    choicesContainer.appendChild(button);
  });
}

// Function to reset the game
function resetGame() {
  currentScene = "start";
  gameProgress.currentScene = "start";
  localStorage.setItem("gameProgress", JSON.stringify(gameProgress));
  updateStory();
}

// Load saved progress and start game
if (localStorage.getItem("gameProgress")) {
  const continueButton = document.createElement("button");
  continueButton.textContent = "Continue Game";
  continueButton.addEventListener("click", () => {
    currentScene = gameProgress.currentScene;
    updateStory();
    continueButton.remove();
  });
  document.body.insertBefore(continueButton, document.body.firstChild);
}

// Event listener for reset button
resetButton.addEventListener("click", resetGame);

// Load the saved game progress or start fresh
currentScene = gameProgress.currentScene;
updateStory();
