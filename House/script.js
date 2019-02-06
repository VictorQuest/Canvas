//
(function() {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');


  //The Sky
    ctx.beginPath();
    ctx.fillStyle = "rgb(97, 77, 241)";
    ctx.fillRect(10, 10, 600, 700);

  //Gräset
    ctx.beginPath();
    ctx.fillStyle = "rgb(17, 173, 70)";
    ctx.fillRect(10, 600, 600, 800);

//Huset
ctx.beginPath();
ctx.fillStyle = "rgb(223, 111, 19)";
ctx.fillRect(300, 500, 200, 200);


//Tacket
ctx.beginPath();
ctx.moveTo(499, 500);
ctx.lineTo(300, 500);
ctx.lineTo(390, 380);
ctx.closePath();
ctx.fillStyle = "rgb(237, 169, 106)";
ctx.fill();

//Text till höger
ctx.font="20px Veranda";
ctx.fillText("Välkommen hem",340,540);
ctx.font="10px Veranda";
ctx.fillText("Made In",430,570);
ctx.fillText("Canvas",430,590);
















  })();
