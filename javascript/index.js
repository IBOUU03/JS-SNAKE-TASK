const scoreSnake = document.querySelector("#score span");
const snake = document.querySelector("#snake");
const food = document.querySelector("#food");
let snakePosition = { top: 280, left: 80 };
const snakeSize = {padding: 0};
let score = 0;
snakeGame();
placeFood();




function snakeGame() {
    document.addEventListener("keydown", (ev) => {
       const { key: eventKey } = ev;  
      switch (eventKey) { 
        case "ArrowDown":
          snake.style.transform = 'rotate(90deg)';
          snakePosition.top += 40;
          limitSize();
          snake.style.top = `${snakePosition.top}px`;
          checkFood()
          break;
        case "ArrowRight":
          snake.style.transform = 'rotate(360deg)';
          snakePosition.left += 40;
          limitSize();
          snake.style.left = `${snakePosition.left}px`;
          checkFood()
          break;
        case "ArrowUp":
          snake.style.transform = 'rotate(270deg)';
          snakePosition.top -= 40;
          limitSize();
          snake.style.top = `${snakePosition.top}px`;
          checkFood()
          break;
        case "ArrowLeft":
          snake.style.transform = 'rotate(180deg)';
          snakePosition.left -= 40;
          limitSize();
          snake.style.left = `${snakePosition.left}px`;
          checkFood()
          break;
      }
    }); 
}
function limitSize() {
    if (snakePosition.top < 0 || snakePosition.top > 560  || snakePosition.left < 0 || snakePosition.left > 760) {
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
        const snakeSize = { width: 40, height: 40 };
        snake.style.width = `${snakeSize.width}px`;
        snake.style.height = `${snakeSize.height}px`;
        score = 0
        scoreSnake.innerText = score;
      });
}
  function placeFood() {
    const top = Math.floor(Math.random() * 14) * 40;
    const left = Math.floor(Math.random() * 19) * 40;
    food.style.top = `${top}px`;
    food.style.left = `${left}px`;
  }

function checkFood() {
  if ( food.style.top === snake.style.top  && food.style.left === snake.style.left) {
    score++;
    scoreSnake.innerText = score;
    placeFood();
  }
}
  
