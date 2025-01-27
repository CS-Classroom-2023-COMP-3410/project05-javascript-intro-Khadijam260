// Select DOM elements
const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");
const brushColorInput = document.getElementById("brush-color");
const brushSizeInput = document.getElementById("brush-size");
const canvasBgInput = document.getElementById("canvas-bg");
const undoButton = document.getElementById("undo-button");
const clearButton = document.getElementById("clear-button");
const saveButton = document.getElementById("save-button");

// Canvas settings
canvas.width = 500;
canvas.height = 400;
let drawing = false;
let brushColor = brushColorInput.value;
let brushSize = parseInt(brushSizeInput.value);
let strokes = [];
let currentStroke = [];
let canvasBackground = canvasBgInput.value;

// Initialize canvas background
ctx.fillStyle = canvasBackground;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Event listeners
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
brushColorInput.addEventListener("input", (e) => brushColor = e.target.value);
brushSizeInput.addEventListener("input", (e) => brushSize = parseInt(e.target.value));
canvasBgInput.addEventListener("input", changeCanvasBackground);
undoButton.addEventListener("click", undoLastStroke);
clearButton.addEventListener("click", clearCanvas);
saveButton.addEventListener("click", saveCanvas);

// Start drawing
function startDrawing(e) {
  drawing = true;
  currentStroke = {
    color: brushColor,
    size: brushSize,
    points: []
  };
  addPointToStroke(e);
}

// Draw on canvas
function draw(e) {
  if (!drawing) return;
  addPointToStroke(e);
  ctx.strokeStyle = brushColor;
  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";

  ctx.beginPath();
  const points = currentStroke.points;
  ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.stroke();
}

// Stop drawing
function stopDrawing() {
  if (drawing) {
    strokes.push({ ...currentStroke });
    drawing = false;
  }
}

// Add point to the current stroke
function addPointToStroke(e) {
  const rect = canvas.getBoundingClientRect();
  currentStroke.points.push({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  });
}

// Undo the last stroke
function undoLastStroke() {
  if (strokes.length > 0) {
    strokes.pop();
    redrawCanvas();
  }
}

// Clear the canvas
function clearCanvas() {
  strokes = [];
  redrawCanvas();
}

// Redraw the canvas
function redrawCanvas() {
  ctx.fillStyle = canvasBackground;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  strokes.forEach(stroke => {
    ctx.strokeStyle = stroke.color;
    ctx.lineWidth = stroke.size;
    ctx.lineCap = "round";
    ctx.beginPath();
    const points = stroke.points;
    for (let i = 1; i < points.length; i++) {
      ctx.moveTo(points[i - 1].x, points[i - 1].y);
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
  });
}

// Change canvas background color
function changeCanvasBackground(e) {
  canvasBackground = e.target.value;
  redrawCanvas();
}

// Save canvas as an image
function saveCanvas() {
  const link = document.createElement("a");
  link.download = "drawing.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
