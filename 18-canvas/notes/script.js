let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

// let playerSize = 25;
// let stretcherWidth = 70;
// let stretcherHeight = 20;

// let movementSpeed = 30;

// let playerX = canvas.width / 2 - playerSize / 2;
// let playerY = canvas.height - playerSize;

// let stretcherX = canvas.width / 2 - stretcherWidth / 2;
// let stretcherY = canvas.height - stretcherHeight / 2;


// let playerRow = 6;
// let playerCol = 1;

// let stretcherRow = 6;
// let stretcherCol = 2;

// // Define map data
// const mapWidth = 10;
// const mapHeight = 8;



// // let objects = [];
// let score = 0;


// const keys = {};

let objects = [];
let enemies = [];

let backgroundImage = new Image()
backgroundImage.src = "https://cdn.vectorstock.com/i/1000x1000/18/01/empty-hospital-corridor-clinic-hallway-interior-vector-18521801.webp"


let player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: 20,
  height: 20,
  color: "#00FF00",
  speed: 5,
  health: 100
};

// Event listeners
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

function draw() {
  clearCanvas();
  handlePlayerMovement();
  drawPlayer();
  updateObjects();
  drawObjects();
  updateEnemies();
  drawEnemies();
  checkCollision();
  spawnObjects();
  spawnEnemies();
  requestAnimationFrame(draw);
  drawHealthBar()
}


// Handle player movement
let keys = {};
function handleKeyDown(event) {
  keys[event.keyCode] = true;
}

function handleKeyUp(event) {
  keys[event.keyCode] = false;
}

function handlePlayerMovement() {
  if (keys[37]) {  // Left arrow key
    player.x -= player.speed;
  }
  if (keys[39]) {  // Right arrow key
    player.x += player.speed;
  }
  if (keys[38]) {  // Up arrow key
    player.y -= player.speed;
  }
  if (keys[40]) {  // Down arrow key
    player.y += player.speed;
  }
}

// Draw functions
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(backgroundImage, 0,0, canvas.width, canvas.height)

  // Draw walls
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, 20);
  context.fillRect(0, canvas.height - 20, canvas.width, 20);
  context.fillRect(0, 0, 20, canvas.height);
  context.fillRect(canvas.width - 20, 0, 20, canvas.height);
}


function drawPlayer() {
  context.fillStyle = player.color;
  context.fillRect(player.x, player.y, player.width, player.height);
}

function drawObjects() {
  for (let i = 0; i < objects.length; i++) {
    let obj = objects[i];
    context.fillStyle = obj.color;
    context.fillRect(obj.x, obj.y, obj.width, obj.height);
  }
}

function drawEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    context.fillStyle = enemy.color;
    context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
  }
}

function drawHealthBar(){
  let barWidth = 100;
    let barHeight = 10;
    let healthPercentage = player.health / 100;
    let fillWidth = barWidth * healthPercentage;

    let barX = canvas.width - barWidth - 10
    let barY = 10
    context.fillStyle = "#FF0000";  // Red 
    context.fillRect(barX, barY, barWidth, barHeight);

    context.fillStyle = "#00FF00";  // Green 
    context.fillRect(barX, barY, fillWidth, barHeight);
}

function updatePlayerHealth() {
  player.health += value;
  if (player.health <= 0) {
      player.health = 0;
      handleGameOver("Game Over! Your health reached zero.");
  }
  if (player.health >= 100) {
      player.health = 100;
  }
  drawHealthBar()
}


// Object spawn
function spawnObjects() {
  if (Math.random() < 0.02) {
    var obj = {
      x: canvas.width,
      y: Math.random() * (canvas.height - 30), // Adjusted to prevent objects going out of bounds
      width: 30,
      height: 30,
      color: "#FF0000",
      speed: 3
    };
    objects.push(obj);
  }
}
// spawn enemy
function spawnEnemies() {
  if (Math.random() < 0.01) {
    var enemy = {
      x: canvas.width,
      y: Math.random() * (canvas.height - 40), // Adjusted to prevent enemies going out of bounds
      width: 40,
      height: 40,
      color: "#0000FF",
      speed: 4
    };
    enemies.push(enemy);
  }
}

// Collision detection
function checkCollision() {
  for (let i = 0; i < objects.length; i++) {
    var obj = objects[i];
    if (
      player.x < obj.x + obj.width &&
      player.x + player.width > obj.x &&
      player.y < obj.y + obj.height &&
      player.y + player.height > obj.y
    ) {
      updatePlayerHealth(-10);
    }
  }

  // Collision detection between player and enemies
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    if (
      player.x < enemy.x + enemy.width &&
      player.x + player.width > enemy.x &&
      player.y < enemy.y + enemy.height &&
      player.y + player.height > enemy.y
    ) {
      // Player collided with enemy, decrease health
      updatePlayerHealth(-10);
    }
  }
  //collision with walls
  if (
    player.x < 20 ||                                          // Left wall
    player.x + player.width > canvas.width - 20 ||            // Right wall
    player.y < 20 ||                                          // Top wall
    player.y + player.height > canvas.height - 20             // Bottom wall
  ) {
    // Player collided with a wall, game over
    console.log("Game Over! You collided with a wall.");
  }

  // Collision detection between player and objects
  for (let i = 0; i < objects.length; i++) {
    let obj = objects[i];
    if (
      player.x < obj.x + obj.size &&
      player.x + player.size > obj.x &&
      player.y < obj.y + obj.size &&
      player.y + player.size > obj.y
    ) {
      updatePlayerHealth(-10);
    }
  }



  // Collision detection between player and enemies
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    if (
      player.x < enemy.x + enemy.width &&
      player.x + player.width > enemy.x &&
      player.y < enemy.y + enemy.height &&
      player.y + player.height > enemy.y
    ) {
      updatePlayerHealth(-10);
    }
  }
}


// Object and enemy update functions
function updateObjects() {
  for (let i = 0; i < objects.length; i++) {
    let obj = objects[i];
    obj.x -= obj.speed;
    if (obj.x + obj.width < 0) {
      objects.splice(i, 1);
      i--;
    }
  }
}

function updateEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    let enemy = enemies[i];
    enemy.x -= enemy.speed;
    if (enemy.x + enemy.width < 0) {
      enemies.splice(i, 1);
      i--;
    }
  }
}
requestAnimationFrame(draw);

draw()