const ball = document.querySelector(".ball");
const toggleBtn = document.getElementById("toggle");
const resetBtn = document.getElementById("reset");

let position = 0;
let animationId = null;
let isRunning = false;

function animate() {
  if (!isRunning) return;

  position += 2;
  ball.style.transform = `translateX(${position}px)`;

  animationId = requestAnimationFrame(animate);
}

// кнопка pause / resume
toggleBtn.addEventListener("click", () => {
  if (isRunning) {
    isRunning = false;
    cancelAnimationFrame(animationId);
    toggleBtn.textContent = "Resume";
  } else {
    isRunning = true;
    toggleBtn.textContent = "Pause";
    animate();
  }
});

// reset
resetBtn.addEventListener("click", () => {
  cancelAnimationFrame(animationId);
  position = 0;
  ball.style.transform = "translateX(0)";
  isRunning = false;
  toggleBtn.textContent = "Start";
});
