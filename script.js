const canvas = document.querySelector("#snake")
let context = canvas.getContext("2d")
let box = 32

let snake = [] 
snake[0] = {
    x:8 * box,
    y:8 * box
}

let direction = "right"

function createBG(){
    context.fillStyle = "blue"
    context.fillRect(0,0,16*box, 16*box)
}

function createSnake(){
    for(i=0;i < snake.length; i++){
        context.fillStyle = "red"
        context.fillRect(snake[i].x,snake[i].y, box, box)
    }
}

document.addEventListener('keydown', update)

function update (event){
    if(event.keyCode == 37 && directional != "right") 
}

function startGame(){
    createBG()
    createSnake()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(direction == "right")  snakeX += box
    if(direction == "left")  snakeY -= box
    if(direction == "up")  snakeY -= box
    if(direction == "down")  snakeY += box

    snake.pop()

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead)
}



let jogo = setInterval(startGame, 100)