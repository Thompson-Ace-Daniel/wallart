const yearEl = document.getElementById("year");
const themeSwitcher = document.getElementById("theme-switcher");

const date = new Date();
const year = date.getFullYear();
yearEl.textContent = year;

themeSwitcher.onclick = () => {
  const themeIcon = document.getElementById("themeIcon")
  if (document.documentElement.classList.contains("dark")) {
    themeIcon.innerHTML = "dark_mode";
    document.documentElement.classList.remove("dark");
  } else {
    themeIcon.innerHTML = "light_mode";
    document.documentElement.classList.add("dark");
  }
};
