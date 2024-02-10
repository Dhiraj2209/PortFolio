const canvas = document.getElementById('starry-night');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for (let i = 0; i < 275; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    color: '#FBFFFF',
    velocity: {
      x: (Math.random() - 0.5) * 0.2,
      y: (Math.random() - 0.5) * 0.2
    }
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];

    // Draw star shape
    ctx.save(); // Save the current transformation state
    ctx.beginPath();
    ctx.translate(star.x, star.y);
    ctx.rotate((Math.PI / 180) * 18); // Rotate by 18 degrees (to create a star shape)
    for (let j = 0; j < 5; j++) {
      ctx.lineTo(Math.cos((Math.PI * 2 * j) / 5) * star.radius, Math.sin((Math.PI * 2 * j) / 5) * star.radius);
      ctx.lineTo(Math.cos((Math.PI * 4 * j) / 5) * (star.radius / 2), Math.sin((Math.PI * 4 * j) / 5) * (star.radius / 2));
    }
    ctx.closePath();
    ctx.fillStyle = star.color;
    ctx.fill();
    ctx.restore(); // Restore the transformation state to previous

    star.x += star.velocity.x;
    star.y += star.velocity.y;

    if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
      stars[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        color: '#FBFFFF',
        velocity: {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01
        }
      };
    }
  }

  requestAnimationFrame(drawStars);
}

drawStars();
