var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var scoreTable = document.getElementById("score");
var startButton = document.getElementById("start");
var restartButton = document.getElementById("restart");

var fps = 1000 / 60;
var squares = [50];
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

function Square(x, y, speed) {
    this.width = 50;
    this.height = 50;
    this.color = "#000";
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
        ctx.fillRect(this.x, this.y, this.height, this.width);

    }
    //смена цвета
    this.changeColor = function (color) {
        ctx.fillStyle = color;
    }

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

    this.remove = function () {
        if (isDelete) {
            delete squares[i];
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
        squares[i] = new Square(getRandX(), getRandY(), getRandSpeed(1, 3));
    }

    clearScreen();

    var timerId = setInterval(function () {
        for (var i = 0; i < 10; i++) {
            squares[i].check();
            squares[i].fall();
            squares[i].draw();
            squares[i].remove(i);
        }
    }, fps);

    if (isRestart) {
        clearInterval(timerId);
        score = 0;
        scoreTable.innerHTML = score;
        i = 0;

        game(!isRestart);
    }
    isStart = true;
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

startButton.onclick = function () {
    if (!isStart) {
        game(isRestart);
    }
}

restartButton.onclick = function () {
    game(!isRestart);

}
