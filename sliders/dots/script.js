// Set variables
const show = 75;
const canvas = document.getElementById("canvas");
const scene = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

// Create dot
class Dot {
  constructor() {
    const angle = Math.floor(Math.random() * 360);

    this.size = 3;
    this.dx = Math.cos(angle) * 1;
    this.dy = Math.sin(angle) * 1;
    this.px = Math.random() * width;
    this.py = Math.random() * height;
  }

  // Update dot position and draw
  update() {
    this.bounds();

    this.px += this.dx;
    this.py += this.dy;

    this.draw();
  }

  // Draw the dots then connect them
  draw() {
    scene.beginPath();
    scene.arc(this.px, this.py, this.size, 0, Math.PI * 2);
    scene.closePath();
    scene.fillStyle = "#a8ffd6";
    scene.fill();

    this.connect();
  }

  // Connect the nearby dots
  connect() {
    const nearby = (width + height) * 0.1;

    dots.forEach(dot => {
      const distance = this.distance(dot);

      if (distance > nearby) return;

      const opacity = 1 - distance / nearby - 0.2;

      scene.beginPath();
      scene.lineWidth = 1;
      scene.strokeStyle = `rgba(168, 255, 214, ${opacity})`;
      scene.moveTo(this.px, this.py);
      scene.lineTo(dot.px, dot.py);
      scene.stroke();
    });
  }

  // Check if we've hit a wall and invert the direction
  bounds() {
    if (this.px < 0 || this.px > width) this.dx *= -1;

    if (this.py < 0 || this.py > height) this.dy *= -1;
  }

  // Calculate the distance between this dot and that dot
  // This calculates two 'sides' then the hypotenuse i.e. distance
  distance(dot) {
    const distX = this.px - dot.px;
    const distY = this.py - dot.py;

    return Math.sqrt(distX * distX + distY * distY);
  }
}

// Create dots
const dots = [...Array(show).fill().map(() => new Dot())];

// Draw scene
function draw() {
  scene.clearRect(0, 0, width, height);

  // Update all dots and redraw
  dots.forEach(particle => {
    particle.update();
  });

  requestAnimationFrame(draw);
}

draw();

// Resize canvas
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});