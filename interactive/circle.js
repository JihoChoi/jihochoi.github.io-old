
<!-- https://youtu.be/yq2au9EfeRQ -->


var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d'); //context

// ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
// ctx.fillRect(100, 100, 100, 100); // draw rectangular object
// ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
// ctx.fillRect(100, 300, 400, 100); // draw rectangular object

// Line
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 300);
// ctx.lineTo(200, 300);
// ctx.strokeStyle = "#f25df3";
// ctx.stroke();

// Arc
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.stroke();

// for (var i = 0; i < 500; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//   if (i % 4 == 0) {
//     ctx.strokeStyle = 'blue';
//   } else if (i % 4 == 1) {
//     ctx.strokeStyle = 'green';
//   } else if (i % 4 == 1) {
//     ctx.strokeStyle = 'yellow';
//   } else {
//     ctx.strokeStyle = 'red';
//   }
//   ctx.stroke();
// }

function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.dx = (Math.random() - 0.5) * 10;
  this.dy = (Math.random() - 0.5) * 10;
  this.radius = r;

  this.update = function() {
    if (this.x - this.radius < 0 || this.x + this.radius > innerWidth) {
      this.dx = -this.dx;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > innerHeight) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    var i = parseInt(Math.random() * 10 / 3);
    // console.log(i);
    if (i % 4 == 0) {
      ctx.strokeStyle = 'blue';
    } else if (i % 4 == 1) {
      ctx.strokeStyle = 'red';
    } else if (i % 4 == 2) {
      // ctx.strokeStyle = 'yellow';
    } else {
      ctx.strokeStyle = 'green';
    }
    ctx.stroke();
  }
}



var circleArray = [];

for (var i = 0; i < 100; i++) {

  var radius = 30;
  var x = Math.random() * (innerWidth - 2 * radius) + radius;
  var y = Math.random() * (innerHeight - 2 * radius) + radius;

  var circle = new Circle(x, y, radius);
  circleArray.push(circle);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
