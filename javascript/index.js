const scoreSnake = document.querySelector("#score span");
const snake = document.querySelector("#snake");
let snakePosition = { top: 280, left: 80 };
let score = 0;
snakeGame();
placeFood();
function snakeGame() {
    document.addEventListener("keydown", (ev) => {
       const { key: eventKey } = ev;

      switch (eventKey) {
        case "ArrowDown":
          snakePosition.top += 40;
          limitSize();
          snake.style.top = `${snakePosition.top}px`;
          checkFood()
          break;
        case "ArrowRight":
          snakePosition.left += 40;
          limitSize();
          snake.style.left = `${snakePosition.left}px`;
          checkFood()
          break;
        case "ArrowUp":
          snakePosition.top -= 40;
          limitSize();
          snake.style.top = `${snakePosition.top}px`;
          checkFood()
          break;
        case "ArrowLeft":
          snakePosition.left -= 40;
          limitSize();
          snake.style.left = `${snakePosition.left}px`;
          checkFood()
          break;
      }
    }); 
}

function limitSize() {
    if (snakePosition.top < 0 || snakePosition.top > 700  || snakePosition.left < 0 || snakePosition.left > 760) {
        document.querySelector("#snake-area").style.display = "none";
        document.querySelector("#over-area").style.display = "flex";
        restartGame();
    }
  }
function restartGame() {
    document.querySelector("#reset").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector("#over-area").style.display = "none";
        document.querySelector("#snake-area").style.display = "block";
        snakePosition = { top: 280, left: 80 };
        snake.style.top = `${snakePosition.top}px`;
        snake.style.left = `${snakePosition.left}px`;
        score = 0
        scoreSnake.innerText = score;
        snakeGame();
      });
}
  function placeFood() {
    const food = document.querySelector("#food");
    const top = Math.floor(Math.random() * 17) * 40;
    const left = Math.floor(Math.random() * 19) * 40;
    food.style.top = `${top}px`;
    food.style.left = `${left}px`;
  
  }

  function checkFood() {
  const food = document.querySelector("#food");
  if (
    food.style.top === snake.style.top &&
    food.style.left === snake.style.left
  ) {
    score++;
    scoreSnake.innerText = score;
    placeFood();
  }
}
  
