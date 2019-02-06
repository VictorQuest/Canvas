//
(function() {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  //Background
  ctx.fillStyle = "#006AA7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //First horizontal yellow rectangle in the middle
  ctx.fillStyle="#FECC00";
  ctx.fillRect(0,60, canvas.width, canvas.height/4.7);
  //Second verticla yellow rectangle inthe middle
  ctx.fillStyle="#FECC00";
  ctx.fillRect(55,0, canvas.width/9, canvas.height);


})();
