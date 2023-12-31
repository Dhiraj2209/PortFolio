const canvas = document.getElementById('starry-night');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

for (let i = 0; i < 250; i++) {
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

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = star.color;
    ctx.fill();

    star.x += star.velocity.x;
    star.y += star.velocity.y;

    if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
      stars[i] = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        color: '#FBFFFF',
        velocity: {
          x: (Math.random() - 0.5) * 0.2,
          y: (Math.random() - 0.5) * 0.2
        }
      };
    }
  }

  requestAnimationFrame(drawStars);
}

drawStars();
