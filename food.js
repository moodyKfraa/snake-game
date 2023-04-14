import {snakeSpeed, snakeExpantion as snakeExpantion , snakeBody as snakeBody} from './snake.js'
const displayScore = document.querySelector(`.display-score`)
let foodSegment = [{x:11 , y:6}, {x:11,y:16}];
const amount = 1;

export function update(){
    if(snakeBody.some((e)=> e.x === foodSegment[0].x && e.y === foodSegment[0].y )){
        foodEten(foodSegment[0])
    }else if(snakeBody.some((e)=> e.x === foodSegment[1].x && e.y === foodSegment[1].y)){
        foodEten(foodSegment[1])
    }

}
export function draw(gameBoard){
    foodSegment.forEach((segment)=>{
        const foodPart = document.createElement(`div`);
        foodPart.className =`food`;
        foodPart.style.gridColumnStart = segment.x;
        foodPart.style.gridRowStart = segment.y;
        gameBoard.appendChild(foodPart);
})
}

function foodEten(foodPart){
    foodPart.x=Math.ceil(Math.random() * 21);
    foodPart.y= Math.ceil(Math.random() * 21);
    snakeExpantion(amount);
    displayScore.innerText = snakeBody.length-1;
}