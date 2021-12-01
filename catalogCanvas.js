    //canvas
    function init(){

        var can1 = document.getElementById('c1');
        var can2 = document.getElementById('c2');
        var can3 = document.getElementById('c3');
        var can4 = document.getElementById('c4');
        var can5 = document.getElementById('c5');
        var can6 = document.getElementById('c6');
        var can7 = document.getElementById('c7');
        var can8 = document.getElementById('c8');
        var can9 = document.getElementById('c9');
        var can10 = document.getElementById('c10');
        var can11 = document.getElementById('c11');
        
        var context1=can1.getContext('2d');
        var context2=can2.getContext('2d');
        var context3=can3.getContext('2d');
        var context4=can4.getContext('2d');
        var context5=can5.getContext('2d');
        var context6=can6.getContext('2d');
        var context7=can7.getContext('2d');
        var context8=can8.getContext('2d');
        var context9=can9.getContext('2d');
        var context10=can10.getContext('2d');
        var context11=can11.getContext('2d');
        
        
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
        
        x=0; y=0;
        penguinImg=new Image();
        penguinImg.src='./pictures/1800.jpeg';
        penguinImg.onload=function(){
                context1.drawImage(penguinImg, x,y, c1w, c1h);        
                 //drawGrayscaleImage(context1, c1w,c1h);

        }
        
        lionImg=new Image();
        lionImg.src='./pictures/lion.jpg';
        lionImg.onload=function(){
            context2.drawImage(lionImg,0,0, c2w, c2h);
        }

        bearImg=new Image();
        bearImg.src='./pictures/bear.jpg';
        bearImg.onload=function(){
            context3.drawImage(bearImg,0,0, c3w, c3h);
     //       drawGrayscaleImage(context1,c1w,c1h)
        }

       // context1.addEventListener('click', drawGrayscaleImage());       
       can1.addEventListener("click",function(){console.log("clicked");},false);
      // can1.addEventListener("click",drawGrayscaleImage(context1,c1w, c1h),false);
       can1.addEventListener("click",context1.clearRect(0,0,c1w, c1h),false);

       
       function drawGrayscaleImage(context1,c1w,c1h) {
            imageData = context1.getImageData(x, y, c1w, c1h);
            imgPixels = imageData.data;
            for ( i = 0; i < imgPixels.length; i += 4) {
                red = imgPixels[i];
                green = imgPixels[i + 1];
                blue = imgPixels[i + 2];
                avg = (red + green + blue) / 3;
                imgPixels[i] = avg;
                imgPixels[i + 1] = avg;
                imgPixels[i + 2] = avg;
            }

            context1.clearRect(0,0,c1w, c1h);
          //  context1.putImageData(imageData, 0, 0);
        }
      
    }   
     
    

        function demo(g) {
            g.context1.font = "bold 16px Arial";
        
            g.draw = function () {
                g.context1.clearRect(0, 0, g.width, g.height)
        
                var posX = 0;
                var posY = 0;
                g.context1.drawImage(image, posX, posY);
        
                if (g.mouseX > posX && g.mouseX < image.width &&
                    g.mouseY > posY && g.mouseY < image.height &&
                    g.mousePressed)
                g.context1.fillText("You're clicking the image!", g.mouseX, g.mouseY);
        
            }
        }