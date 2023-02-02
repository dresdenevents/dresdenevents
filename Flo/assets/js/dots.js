// Setup the canvas element.
var canvas = $('canvas.dots');
var context = canvas[0].getContext('2d');
var canvasWidth = canvas.width();
var canvasHeight = canvas.height();
canvas.attr({height: canvasHeight, width: canvasWidth});

var dotNumber = 900;

for(var i = 0; i < dotNumber; ++i) {
var min = 0.1;
var max = 1.5;
var dotRadius = Math.random() * (max - min) + min;

var dotX = Math.random() * (canvasWidth - 8) + 8;
var dotY = Math.random() * (canvasHeight -8) + 8;

var frames = 150; 
var currentFrame = 0;

var dot = {x : dotX, y: dotY, radius: dotRadius};
drawDot(dot);
}
/*
var dotMargin = 25;
var numRows = 5;
var numCols = 10;
var directions = ['+', '-'];
var speeds = [0.5, 1, 1.5, 2, 2.5, 3, 3.5];
var colors = ['#F03C69', '#FFCD32', '#2BAD5D', '#2ABABF', '#CDDC28', '#B91E8C'];
var radi = [0.5, 1, 1.5, 2, 2.5, 3, 3.5];

var dotWidth = ((canvasWidth - (2 * dotMargin)) / numCols) - dotMargin;
var dotHeight = ((canvasHeight - (2 * dotMargin)) / numRows) - dotMargin;

if( dotWidth > dotHeight ) {
  var dotDiameter = dotHeight;
  var xMargin = (canvasWidth - ((2 * dotMargin) + (numCols * dotDiameter))) / numCols;
  var yMargin = dotMargin;
} else {
  var dotDiameter = dotWidth;
  var xMargin = dotMargin;
  var yMargin = (canvasHeight - ((2 * dotMargin) + (numRows * dotDiameter))) / numRows;
}

// Set the number of frames we want to run.
var frames = 150;

// We have a currentFrame reference which essentially tracks our place in time.
var currentFrame = 0;

// Set and create our dot.
var dots = [];
var dotRadius = dotDiameter * Math.floor(Math.random()*0.5);


for(var i = 0; i < numRows; i++) {
  for(var j = 0; j < numCols; j++) {
  
  // Get random color, direction and speed.
  //var color = colors[Math.floor(Math.random() * colors.length)];
  var xMove = directions[Math.floor(Math.random() * directions.length)];
  var yMove = directions[Math.floor(Math.random() * directions.length)];
  var speed = speeds[Math.floor(Math.random() * speeds.length)];
  var dotradius = radi[Math.floor(Math.random() * radi.length)];

  var x = (j * (dotDiameter + xMargin)) + dotMargin + (xMargin / 2) + dotradius;
  var y = (i * (dotDiameter + yMargin)) + dotMargin + (yMargin / 2) + dotradius;
  // Set the object.
  var dot = {
    x: x,
    y: y,
    radius: dotradius,
    xMove: xMove,
    yMove: yMove,
    speed: speed
  };
  // Save it to the dots array.
  dots.push(dot);
  drawDot(dot);
  }
}

for( i = 0; i < dots.length; i++ ) {
  drawDot(dots[i]);
};

// Start the animation frame 2.5 seconds after the page loads.
setTimeout(function(){
  window.requestAnimationFrame(moveDot);
}, 2500);

// This function moves the dot down and to the right in each frame.
function moveDot() {
  context.clearRect(0, 0, canvasWidth, canvasHeight)

  for( i = 0; i < dots.length; i++ ) {

    if( dots[i].xMove == '+' ) {
      dots[i].x += dots[i].speed;
    } else {
      dots[i].x -= dots[i].speed;
    }
    if( dots[i].yMove == '+' ) {
      dots[i].y += dots[i].speed;
    } else {
      dots[i].y -= dots[i].speed;
    }

    drawDot(dots[i])

    if( (dots[i].x + dots[i].radius) >= canvasWidth ) {
      dots[i].xMove = '-';
    }
    if( (dots[i].x - dots[i].radius) <= 0 ) {
      dots[i].xMove = '+';
    }
    if( (dots[i].y + dots[i].radius) >= canvasHeight ) {
      dots[i].yMove = '-';
    }
    if( (dots[i].y - dots[i].radius) <= 0 ) {
      dots[i].yMove = '+';
    }
  }

  window.requestAnimationFrame(moveDot);
}*/

function drawDot(dot) {
  context.beginPath();
  context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
  context.fillStyle = '#FFFFFF'; //'#b2b2d8';
  context.fill();
}