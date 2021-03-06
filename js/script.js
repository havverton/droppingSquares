var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var scoreTable = document.getElementById("score");
var startButton = document.getElementById("start");
var restartButton = document.getElementById("restart");

var fps = 1000 / 60;
var squares = [10];
var colors = ["#000", "#ff0000", "#00ff00", "#0000ff"];
var color;
var lastX = 0;
var lastY = 0;
var score = 0;

var clickX = 0;
var clickY = 0;

var isStart = false;
var isRestart = false;
var isClicked = false;
var isDelete = false;

cvs.onclick = function (event) {
    clickX = event.offsetX;
    clickY = event.offsetY;
}

function Square(x, y, speed, color) {
    this.width = 50;
    this.height = 50;
    this.color = color;
    this.speed = speed;
    this.x;
    this.Xmax;
    this.y;
    this.Ymax;



    if (x <= lastX || x >= lastX + 50) {
        lastX = x;
        this.x = x;
    } else {
        x += 50;
        this.x = x;
    }

    if (y <= lastY || y >= lastY + 50) {
        lastY = y;
        this.y = y;
    } else {
        y -= 50;
        this.y = y;
    }

    //падение квадрата
    this.fall = function () {
        this.y += this.speed;
        if (this.y >= 550) {
            this.y = y;
        }
    }

    //отрисовка
    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.height, this.width);

    }
    //смена цвета


    this.check = function () {  //проверка на совпадение клика и квадрата
        if (clickX >= this.x && clickX <= this.x + 50) {
            if (clickY <= this.y && clickY >= this.y - 50) {
                //this.y = y;
                clickY = 0;
                clickX = 0;
                score++;
                scoreTable.innerHTML = score;
                isDelete = true;

            }
        }
    }

    this.remove = function (i) {
        if (isDelete) {
            var square = new Square(getRandX(), getRandY(), getRandSpeed(1, 3), getRandColor());
            squares.splice(i, 1, square);
            isDelete = false;
        }
    }
}


//очистка экрана 60 кад/cек
function clearScreen() {
    setInterval(function () {
        ctx.clearRect(0, 0, 600, 600);
    }, fps)
}

function game(isRestart) {
    this.isRestart = isRestart;

    for (var i = 0; i < 10; i++) {
        squares[i] = new Square(getRandX(), getRandY(), getRandSpeed(1, 3), getRandColor());

    }

    //  clearScreen();

    var timerId = requestAnimationFrame(drawing);

    if (isRestart) {
        score = 0;
        scoreTable.innerHTML = score;
        i = 0;

        game(!isRestart);
    }
    isStart = true;
}

function drawing() {
    requestAnimationFrame(drawing);
    ctx.clearRect(0, 0, 600, 600);
    for (var i = 0; i < 10; i++) {
        squares[i].check();
        squares[i].fall();
        squares[i].draw();
        squares[i].remove(i);


    }
}


function getRandX() {
    var x = Math.floor(Math.random() * 550);
    return x;
}

function getRandY() {
    var x = Math.floor((Math.random() * -500 + (-100)) - 100);
    return x;
}

function getRandSpeed(a, b) {
    var x = Math.floor(Math.random() * (b - a)) + a;
    return x;
}

function getRandColor() {
    var x = Math.floor(Math.random() * (3 - 0)) + 0;

    return colors[x];
}

startButton.onclick = function () {
    if (!isStart) {
        game(isRestart);
    }
}

restartButton.onclick = function () {
    game(!isRestart);

}

