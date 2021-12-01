document.querySelector('.flex-container').style.display='none';
document.getElementById('load').classList.add('loader');


setTimeout(()=>{  
document.getElementById('load').classList.remove('loader');
document.querySelector('.flex-container').style.display='flex';},3000)

    //canvas
    function init(){

        var can1 = document.getElementById('c1');
        var can2 = document.getElementById('c2');
        var can3 = document.getElementById('c3');
        var can4 = document.getElementById('c4');
        var can5 = document.getElementById('c5');
        var can6 = document.getElementById('c6');
        
        var context1=can1.getContext('2d');
        var context2=can2.getContext('2d');
        var context3=can3.getContext('2d');
        var context4=can4.getContext('2d');
        var context5=can5.getContext('2d');
        var context6=can6.getContext('2d');
        
        
        var c1w = can1.width;
        var c1h = can1.height;
        
        var c2w = can2.width;
        var c2h = can2.height;
        
        var c3w = can3.width;
        var c3h = can3.height;
        
        var c4w = can4.width;
        var c4h = can4.height;
        
        var c5w = can5.width;
        var c5h = can5.height;
        
        var c6w = can6.width;
        var c6h = can6.height;
        
        x=10; y=10;
        penguinImg=new Image();
        penguinImg.src='./pictures/pingu.jpg';
        penguinImg.onload=function(){
                context1.drawImage(penguinImg,0,0,c1w,c1h);
        }
        
        lionImg=new Image();
        lionImg.src='./pictures/lion.jpg';
        lionImg.onload=function(){
            context2.drawImage(lionImg,x,y,200,200);
        }
          
        
        }