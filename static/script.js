// Set up the game variables
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const gridSize = 20; // Grid size
const tileSize = 20; // Tile size
let snake = [{ x: 5, y: 5 }]; // Initial snake position
let direction = { x: 1, y: 0 }; // Initial direction (moving right)
let food = { x: 10, y: 10 }; // Initial food position
let score = 0;

// Add the canvas to the DOM
canvas.width = gridSize * tileSize;
canvas.height = gridSize * tileSize;
document.body.appendChild(canvas);

// Generate random food position
function generateFood() {
    food.x = Math.floor(Math.random() * gridSize);
    food.y = Math.floor(Math.random() * gridSize);

    // Ensure food doesn't spawn on the snake
    while (snake.some(segment => segment.x === food.x && segment.y === food.y)) {
        food.x = Math.floor(Math.random() * gridSize);
        food.y = Math.floor(Math.random() * gridSize);
    }
}

// Game loop
function gameLoop() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Check for collisions
    const hitWall = head.x < 0 || head.y < 0 || head.x >= gridSize || head.y >= gridSize;
    const hitSelf = snake.some(segment => segment.x === head.x && segment.y === head.y);

    if (hitWall || hitSelf) {
        alert(`Game Over! Your score: ${score}`);
        resetGame();
        return;
    }

    // Add new head to the snake
    snake.unshift(head);

    // Check if the snake eats the food
    if (head.x === food.x && head.y === food.y) {
        score++;
        generateFood();
    } else {
        // Remove the tail of the snake
        snake.pop();
    }

    // Draw the game
    drawGame();
}

// Reset the game
function resetGame() {
    snake = [{ x: 5, y: 5 }];
    direction = { x: 1, y: 0 };
    score = 0;
    generateFood();
    drawGame();
}

// Draw the game
function drawGame() {
    // Clear the canvas
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the snake
    ctx.fillStyle = 'red';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
    });

    // Draw the food
    ctx.fillStyle = 'green';
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);

    // Draw the score
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 20);
}

// Handle keyboard input
document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});

// Start the game
resetGame();
setInterval(gameLoop, 150);

