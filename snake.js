export const snakeSpeed = parseFloat(prompt(`Enter the game speed 5-50`));
export const snakeBody = [{x:11 , y:11}];
let newMove = {x:0 , y:0};
const gridSize = 21;

window.addEventListener(`keydown`,function (e){
        let keyClicked = e.which ;
        switch (keyClicked) {
            case 37 : 
            case 97 :
                if(newMove.x !== 0)break;
                newMove.x=-1
                newMove.y=0
                break;
            case 38 :
            case 101 :
                if(newMove.y !== 0)break;
                newMove.x=0
                newMove.y=-1
                break;
            case 39 :
            case 99 :
                if(newMove.x !== 0)break;
                newMove.x=1
                newMove.y=0
                break;
            case 40 :
            case 98 :
                if(newMove.y !== 0)break;
                newMove.x=0
                newMove.y=1
                break;
        }
    })

export function update(){
    getItInside(gridSize);
    
    for(let i = snakeBody.length - 2 ; i>=0 ;i--){
        snakeBody[i+1] = {...snakeBody[i]};
    };
    snakeBody[0].x+=newMove.x;
    snakeBody[0].y+=newMove.y;
}
export function draw(gameBoard){
    snakeBody.forEach((segment)=>{
        const snakePart = document.createElement(`div`);
        snakePart.className =`snake`;
        snakePart.style.gridRowStart = segment.y
        snakePart.style.gridColumnStart = segment.x
        gameBoard.appendChild(snakePart);
        }
    )
}

export function snakeExpantion (amount){
    for(let i = 1 ; i <= amount;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
}

export function isSnakeIntersect(){
    for (let i = 1; i < snakeBody.length-1; i++) {
        if(snakeBody[0].x ===  snakeBody[i].x && snakeBody[0].y ===  snakeBody[i].y){
            return true;
        }
    }
}

export function getItInside(gridSize){
    // const snakeHead = snakeBody[0];
    snakeBody.map((el)=>{
        el.x <= 0 ? el.x = gridSize:"";
        el.x > gridSize ? el.x = 0:"";
        el.y <= 0 ? el.y = gridSize:"";
        el.y > gridSize ? el.y = 0:"";
    })
}