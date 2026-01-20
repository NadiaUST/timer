const input = document.querySelector("input");
const paragraph = document.querySelector("p");

let debounceTimer = null;

input.addEventListener("input", () => {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    paragraph.textContent = input.value;
  }, 300);
});
