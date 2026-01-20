const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const pad = (num) => String(num).padStart(2, "0");

  const getTimeRemaining = () => {
    const total = new Date(deadline) - new Date();

    if (total <= 0) {
      return {
        total: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);

    return { total, hours, minutes, seconds };
  };

  const updateClock = () => {
    console.log("tick"); // 1 раз в 1000ms

    const t = getTimeRemaining();

    timerHours.textContent = pad(t.hours);
    timerMinutes.textContent = pad(t.minutes);
    timerSeconds.textContent = pad(t.seconds);

    if (t.total === 0) {
      clearInterval(intervalId);
    }
  };

  updateClock();
  const intervalId = setInterval(updateClock, 1000);
};

export default timer;
