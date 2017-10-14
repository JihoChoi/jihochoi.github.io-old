




var canvas = document.querySelector('#circle');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d'); //context


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
