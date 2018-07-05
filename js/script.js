var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var fps=1000/60;
var squares = [];



function Square(x){
this.width = 50;
this.height = 50;
this.color = "#000";
this.speed = 1; //Math.floor(Math.random()*5+1)+1;
this.x = x;
this.y = 10;


this.fall = function (){
                  
                    this.y+= this.speed;
                    ctx.clearRect(0,0,600,600)
                    //отрисовка квадрата
                    ctx.fillStyle = this.color;
                    ctx.fillRect(this.x,this.y,this.height, this.width);
                   // alert("Это х " + this.x + " Это Y " + this.y )
                   
     

}



 
}



  
function drop(square){
    var timerId = setTimeout(function tick() {
        square.fall();
        timerId = setTimeout(tick, 1000);
      }, 1000);
  }
  
  function game(){
    for(var i = 0; i<=100; i++){
    var square = new Square(getRandX()); 
    squares.push(square);
    
        squares.forEach(function(square){
            drop(square);
        })
   
    }
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

/*
function startGame(){
    setInterval(function (){
       
       
        var i=square.y;
        var n=square.x;
        var d=square.delay;
                //Интервал падения
                var timerId = setInterval(function () 
                {
                   
                   //очистка квадрата
                   ctx.fillStyle = "#fff";
                   ctx.fillRect(n,i-50,50,50)

                    //отрисовка квадрата
                    ctx.fillStyle = square.color;
                    ctx.fillRect(n,i,square.height, square.width);
                    
                    

                    i+=square.offsetY;

                }
                    ,square.delay);
                //Интервал падения
        
                square.x = getRandX();
                square.delay =getRandDelay();}
                
        , 1000);
}






function dropSquare(n){
    
    var i=square.y;
        var timerId = setInterval(function () 
        {
            n//отрисовка квадрата
            ctx.fillStyle = square.color;
            ctx.fillRect(n,i,square.height, square.width);
            
            //очистка квадрата
            ctx.fillStyle = "#fff";
            ctx.fillRect(n,i-50,50,50)

            i+=square.offsetY;

        }
            ,square.delay);

    // alert(n);
     

 }


 */

 /*function dropSquare(){
    var i=square.y;
    var n=square.x;
 
    for(i;i<650;i+=square.offsetY){
     ctx.clearRect(n-50,Math.abs(i)-50,n, i);
     ctx.fillRect(n,i,square.height, square.width);
     
     i+=square.offsetY;
   
 }
 }
*/