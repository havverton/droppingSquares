var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var square = new Object();

square.color = "#000";
square.height = 50;
square.width = 50;
square.x = getRandX();
square.y = 0;
square.offsetY = 5;
square.delay =getRandDelay();


//ctx.fillRect(0,0,50,50);

function getRandX(){
    var x=Math.floor(Math.random()*550);
    return x;
}

function getRandDelay(){
    var x=Math.floor(Math.random()*(50-15))+15;
    return x;
}

startGame( );

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
            //отрисовка квадрата
            ctx.fillStyle = square.color;
            ctx.fillRect(n,i,square.height, square.width);
            
            //очистка квадрата
            ctx.fillStyle = "#fff";
            ctx.fillRect(square.x,i-50,50,50)

            i+=square.offsetY;

        }
            ,square.delay);

    // alert(n);
     

 }




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