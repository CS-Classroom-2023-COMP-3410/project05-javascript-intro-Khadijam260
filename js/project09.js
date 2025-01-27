// Sorting Visualization Tool JavaScript Implementation

let array = [];
let sorting = false;

// DOM Elements
const arrayContainer = document.getElementById("array-container");
const algorithmSelect = document.getElementById("algorithm-select");
const speedInput = document.getElementById("speed-input");
const generateButton = document.getElementById("generate-button");
const startButton = document.getElementById("start-button");
const commentary = document.getElementById("commentary");

// Generate a random array
function generateArray(size = 20) {
  if (sorting) return;
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
  renderArray();
}

// Render the array as bars
function renderArray() {
  arrayContainer.innerHTML = "";
  array.forEach((value) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}%`;
    arrayContainer.appendChild(bar);
  });
}

// Swap Bars
function swap(bars, i, j) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tempHeight = bars[i].style.height;
      bars[i].style.height = bars[j].style.height;
      bars[j].style.height = tempHeight;
      resolve();
    }, getDelay());
  });
}

// Get delay based on user input
function getDelay() {
  return 300 - speedInput.value;
}

// Bubble Sort Algorithm
async function bubbleSort() {
  commentary.textContent = "Starting Bubble Sort...";
  sorting = true;
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";

      if (array[j] > array[j + 1]) {
        commentary.textContent = `Swapping ${array[j]} and ${array[j + 1]}`;
        await swap(bars, j, j + 1);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }

      bars[j].style.backgroundColor = "blue";
      bars[j + 1].style.backgroundColor = "blue";
    }
    bars[array.length - i - 1].style.backgroundColor = "green";
  }
  commentary.textContent = "Array is sorted!";
  sorting = false;
}

// Insertion Sort Algorithm
async function insertionSort() {
  commentary.textContent = "Starting Insertion Sort...";
  sorting = true;
  const bars = document.querySelectorAll(".bar");

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    bars[i].style.backgroundColor = "red";

    while (j >= 0 && array[j] > key) {
      bars[j].style.backgroundColor = "red";
      await swap(bars, j + 1, j);
      array[j + 1] = array[j];
      bars[j].style.backgroundColor = "blue";
      j--;
    }

    array[j + 1] = key;
    bars[i].style.backgroundColor = "blue";
  }

  bars.forEach((bar) => (bar.style.backgroundColor = "green"));
  commentary.textContent = "Array is sorted!";
  sorting = false;
}

// Selection Sort Algorithm
async function selectionSort() {
  commentary.textContent = "Starting Selection Sort...";
  sorting = true;
  const bars = document.querySelectorAll(".bar");

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    bars[minIndex].style.backgroundColor = "red";

    for (let j = i + 1; j < array.length; j++) {
      bars[j].style.backgroundColor = "yellow";

      if (array[j] < array[minIndex]) {
        bars[minIndex].style.backgroundColor = "blue";
        minIndex = j;
        bars[minIndex].style.backgroundColor = "red";
      }
      await new Promise((resolve) => setTimeout(resolve, getDelay()));
      bars[j].style.backgroundColor = "blue";
    }

    if (minIndex !== i) {
      commentary.textContent = `Swapping ${array[i]} and ${array[minIndex]}`;
      await swap(bars, i, minIndex);
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }

    bars[i].style.backgroundColor = "green";
  }

  commentary.textContent = "Array is sorted!";
  sorting = false;
}

// Merge Sort Algorithm
async function mergeSort(start = 0, end = array.length - 1) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);

  await mergeSort(start, mid);
  await mergeSort(mid + 1, end);
  await merge(start, mid, end);
}

async function merge(start, mid, end) {
  const tempArray = [];
  const bars = document.querySelectorAll(".bar");

  let i = start;
  let j = mid + 1;

  while (i <= mid && j <= end) {
    bars[i].style.backgroundColor = "red";
    bars[j].style.backgroundColor = "red";

    await new Promise((resolve) => setTimeout(resolve, getDelay()));

    if (array[i] <= array[j]) {
      tempArray.push(array[i++]);
    } else {
      tempArray.push(array[j++]);
    }

    bars.forEach((bar) => (bar.style.backgroundColor = "blue"));
  }

  while (i <= mid) {
    tempArray.push(array[i++]);
  }

  while (j <= end) {
    tempArray.push(array[j++]);
  }

  for (let k = start; k <= end; k++) {
    array[k] = tempArray[k - start];
    bars[k].style.height = `${array[k]}%`;
    bars[k].style.backgroundColor = "green";
    await new Promise((resolve) => setTimeout(resolve, getDelay()));
  }
}

// Start Sorting
async function startSorting() {
  if (sorting) return;
  const algorithm = algorithmSelect.value;

  if (algorithm === "bubble") {
    await bubbleSort();
  } else if (algorithm === "insertion") {
    await insertionSort();
  } else if (algorithm === "selection") {
    await selectionSort();
  } else if (algorithm === "merge") {
    commentary.textContent = "Starting Merge Sort...";
    sorting = true;
    await mergeSort();
    sorting = false;
    commentary.textContent = "Array is sorted!";
  } else {
    commentary.textContent = "Algorithm not implemented yet.";
  }
}

// Event Listeners
generateButton.addEventListener("click", () => generateArray(20));
startButton.addEventListener("click", startSorting);

// Initialize
generateArray();
