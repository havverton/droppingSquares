var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var fps=1000/60;
var squares = [];



function Square(x,y){
    this.width = 50;
    this.height = 50;
    this.color = "#000";
    this.speed = 10; //Math.floor(Math.random()*5+1)+1;
    this.x = x;
    this.y = y;


this.fall = function (){
                  
                    
                    ctx.clearRect(0,0,600,600);
                    //отрисовка квадрата
                    ctx.fillStyle = this.color;
                    ctx.fillRect(this.x,this.y,this.height, this.width);
                   // alert("Это х " + this.x + " Это Y " + this.y )
                   this.y+=this.speed;

}

   
}
  
/*function drop(square){
    var timerId = setTimeout(function tick() {
        square.fall();
        timerId = setTimeout(tick, 1000);
      }, 1000);
  }
*/


  function game(){
    for(var i = 0; i<=100; i++){
    var square = new Square(getRandX(),0);
    squares.push(square); }
           squares.forEach(function(square){
                square.fall();
              //  debugger;
           
        })
   
    }
  

  
game();

 
  



function getRandX(){
    var x=Math.floor(Math.random()*550);
    return x;
}

function getRandOffsetY(){
    var x=Math.floor(Math.random()*(10-5))+5;
    return x;
}


/*
function startGame(){
    setInterval(function (){
       
       
        var i=square.y;
        var n=square.x;
        var d=square.delay;
                //Интервал падения
                var timerId = setTimeout(function () 
                {
                   
                      //очистка квадрата
                  // ctx.fillStyle = "#fff";
                  ctx.clearRect(0,0,600,600)

                    //отрисовка квадрата
                    ctx.fillStyle = square.color;
                    ctx.fillRect(n,i,square.height, square.width);
                    
                 ;


                    i+=square.offsetY;

                }
                    ,square.delay);
                //Интервал падения
        
                square.x = getRandX();
                square.offsetY = getRandOffsetY();}
                
        , 1000);
}
