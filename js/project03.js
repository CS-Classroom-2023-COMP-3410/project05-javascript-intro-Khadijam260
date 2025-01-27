const gameBoard = document.getElementById("game-board");
const moveCounter = document.getElementById("move-counter");
const timeCounter = document.getElementById("time-counter");
const restartButton = document.getElementById("restart-button");

let cards = [];
let firstCard = null;
let secondCard = null;
let moves = 0;
let timer = null;
let timeElapsed = 0;

const icons = ["🍎", "🍌", "🍇", "🍒", "🍍", "🥝", "🍓", "🍉"];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startGame() {
  cards = shuffle([...icons, ...icons]);
  gameBoard.innerHTML = "";
  moves = 0;
  timeElapsed = 0;
  moveCounter.textContent = moves;
  timeCounter.textContent = "00:00";

  cards.forEach((icon, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.icon = icon;
    card.innerHTML = `
      <div class="card-back"></div>
      <div class="card-front">${icon}</div>
    `;
    card.addEventListener("click", () => flipCard(card));
    gameBoard.appendChild(card);
  });

  if (timer) clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

function flipCard(card) {
  if (
    card.classList.contains("flipped") ||
    card.classList.contains("matched") ||
    firstCard && secondCard // If two cards are already selected, don't allow flipping a third card
  ) {
    return;
  }

  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
    checkMatch();
  }
}

function checkMatch() {
  moves++;
  moveCounter.textContent = moves;

  if (firstCard.dataset.icon === secondCard.dataset.icon) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    resetCards();

    if (document.querySelectorAll(".card:not(.matched)").length === 0) {
      clearInterval(timer);
      alert(`You won in ${moves} moves and ${formatTime(timeElapsed)}!`);
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetCards();
    }, 1000); // Delay to allow players to see the flipped cards
  }
}

function resetCards() {
  firstCard = null;
  secondCard = null;
}

function updateTime() {
  timeElapsed++;
  timeCounter.textContent = formatTime(timeElapsed);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

restartButton.addEventListener("click", startGame);

// Initialize game
startGame();
