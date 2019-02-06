//
(function() {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

//The Sky
  ctx.beginPath();
  ctx.fillStyle = "rgb(97, 77, 241)";
  ctx.fillRect(10, 10, 600, 700);

//The Sea
  ctx.beginPath();
  ctx.fillStyle = "rgb(75, 83, 194)";
  ctx.fillRect(10, 300, 600, 800);

//Mât
  ctx.beginPath();
  ctx.fillStyle = "rgb(242, 152, 31)";
  ctx.fillRect(260, 150, 10, 180);

  ctx.beginPath();
  ctx.moveTo(260,150);
  ctx.lineTo(150,300);
  ctx.lineTo(250,300);
  ctx.closePath();
  //ctx.closePath();

  ctx.fillStyle = "rgb(246, 229, 239)";
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(270,150);
  ctx.lineTo(400,300);
  ctx.lineTo(290,300);
  ctx.closePath();

  ctx.fillStyle = "rgb(246, 229, 239)";
  ctx.fill();


  ctx.beginPath();
    ctx.moveTo(150, 330);
    ctx.lineTo(420, 330);
    ctx.bezierCurveTo(10, 400, 400, 256, 3, 250);
    //ctx.bezierCurveTo(268, 370, 375, 223, 360, 223);
    ctx.stroke();



})();
