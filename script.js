
// Get the target element and game area
var target = document.getElementById('target');
var gameArea = document.getElementById('gameArea');

// Set the initial position of the target
var maxX = gameArea.clientWidth - target.clientWidth;
var maxY = gameArea.clientHeight - target.clientHeight;
var targetX = Math.random() * maxX;
var targetY = Math.random() * maxY;
target.style.top = targetY + 'px';
target.style.left = targetX + 'px';

// Function to update the target's position
function updateTargetPosition() {
  targetX = Math.random() * maxX;
  targetY = Math.random() * maxY;
  target.style.top = targetY + 'px';
  target.style.left = targetX + 'px';
}

// Function to handle the mouse click event
function handleClick(event) {
  var rect = gameArea.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  var distance = Math.sqrt(Math.pow(targetX - x, 2) + Math.pow(targetY - y, 2));

  if (distance < 25) { // Radius of the ball is 25px
    alert('You caught me!');
    updateTargetPosition();
  }
}

// Add the event listener to the game area
gameArea.addEventListener('click', handleClick);

// Update the target's position every 1 second
setInterval(updateTargetPosition, 1000);