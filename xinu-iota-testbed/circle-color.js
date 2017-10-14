
<!-- https://youtu.be/yq2au9EfeRQ -->

// https://www.youtube.com/watch?v=vxljFhP2krI

var canvas = document.querySelector('#circle-color');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d'); //context

var mouse = {
  x: undefined,
  y: undefined
}

window.addEventListener('mousemove',
  function(event) {
    // console.log(event);
    mouse.x = event.x;
    mouse.y = event.y;
  }

);


function Circle(x, y, r) {
  this.x = x;
  this.y = y;
  this.dx = (Math.random() - 0.5) * 10;
  this.dy = (Math.random() - 0.5) * 10;
  this.radius = r;

  this.color = parseInt(Math.random() * 10 / 3);

  this.update = function() {
    if (this.x - this.radius < 0 || this.x + this.radius > innerWidth) {
      this.dx = -this.dx;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > innerHeight) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // interactivity

    if (mouse.x - this.x < 50 && mouse.x - this.x > -50
      && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      this.radius += 1;
    } else if (this.radius > 10) {
      this.radius -= 1;
    }


    this.draw();
  }

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    // console.log(i);
    if (this.color == 0) {
      ctx.strokeStyle = 'blue';
      ctx.fillStyle = 'blue';
    } else if (this.color == 1) {
      ctx.strokeStyle = 'red';
      ctx.fillStyle = 'red';
    } else if (this.color == 2) {
      ctx.strokeStyle = 'yellow';
      ctx.fillStyle = 'yellow';
    } else {
      ctx.strokeStyle = 'green';
      ctx.fillStyle = 'green';
    }
    ctx.stroke();
    ctx.fill();

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
