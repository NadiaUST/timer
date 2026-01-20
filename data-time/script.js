const greetingEl = document.getElementById("greeting");
const dayEl = document.getElementById("day");
const timeEl = document.getElementById("time");
const newYearEl = document.getElementById("new-year");

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const getGreeting = (hours) => {
  if (hours >= 6 && hours < 12) return "Доброе утро";
  if (hours >= 12 && hours < 18) return "Добрый день";
  if (hours >= 18 && hours < 23) return "Добрый вечер";
  return "Доброй ночи";
};

const update = () => {
  const now = new Date();

  greetingEl.textContent = getGreeting(now.getHours());
  dayEl.textContent = `Сегодня: ${days[now.getDay()]}`;

  timeEl.textContent = `Текущее время: ${now.toLocaleTimeString("en-US")}`;

  const newYear = new Date(`January 1, ${now.getFullYear() + 1}`);
  const diff = Math.ceil((newYear - now) / (1000 * 60 * 60 * 24));

  newYearEl.textContent = `До нового года осталось ${diff} дней`;
};

update();
setInterval(update, 1000);
