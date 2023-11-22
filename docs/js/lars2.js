 var canvas = document.getElementById('fishCanvas');
                  var ctx = canvas.getContext('2d');
          
                  // body
                  ctx.fillStyle = "#ADD8E6";
                  ctx.fillRect(250,250,150,100);
          
                  //head
                  ctx.arc(400, 300, 50, 0, 2 * Math.PI);
                  ctx.fill();
          
                  //back
                  ctx.beginPath();
                  ctx.moveTo(250, 250);
                  ctx.lineTo(150, 300);
                  ctx.lineTo(250, 350);
                  ctx.closePath();
                  ctx.fill();
          
                  //fin
                  ctx.beginPath();
                  ctx.moveTo(120, 250);
                  ctx.lineTo(250, 300);
                  ctx.lineTo(120, 350);
                  ctx.closePath();
                  ctx.fill();
          
                  //back fin
                  ctx.beginPath();
                  ctx.moveTo(290, 235);
                  ctx.lineTo(350, 250);
                  ctx.lineTo(280, 250);
                  ctx.closePath();
                  ctx.fill();
          
                  //mid fin
                  ctx.fillStyle = "#4682B4";
                  ctx.beginPath();
                  ctx.moveTo(290, 300);
                  ctx.lineTo(350, 315);
                  ctx.lineTo(350, 285);
                  ctx.closePath();
                  ctx.fill();
          
                  //eye
                  ctx.fillStyle = "white";
                  ctx.beginPath();
                  ctx.arc(425, 290, 10, 0, 2 * Math.PI);
                  ctx.closePath();
                  ctx.fill();
          
                  //eye
                  ctx.fillStyle = "black";
                  ctx.beginPath();
                  ctx.arc(430, 295, 2, 0, 2 * Math.PI);
                  ctx.closePath();
                  ctx.fill();