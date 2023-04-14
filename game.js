import { snakeSpeed, update as updateSnake , draw as drawSnake, isSnakeIntersect as isSnakeIntersect, snakeBody } from './snake.js';
import { update as updateFood , draw as drawFood } from './food.js';
const gameBoard = document.querySelector(`.game-board`);
let lastRenderTime = 0;
let failtue = false;

function mainGame(cuurTime){
    requestAnimationFrame(mainGame);
    let secSinceLastRender = (cuurTime-lastRenderTime)/1000;
    if(secSinceLastRender < (1/snakeSpeed))return;
    //start the changes
    lastRenderTime = cuurTime;
    if(failtue){
            failtue=false;
            alert(`Game Over your score was: ${snakeBody.length-1}`)
            return location.reload()
        }
        checkIfGameOver()
        update();
        draw();
    }
    requestAnimationFrame(mainGame);


function update(){
    updateFood()
    updateSnake()
}
function draw(){
    gameBoard.innerHTML =``;
    drawFood(gameBoard)
    drawSnake(gameBoard)

}

function checkIfGameOver(){
    failtue = isSnakeIntersect();
}