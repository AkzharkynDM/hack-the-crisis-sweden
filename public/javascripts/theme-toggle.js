var themes = {
  "adults": "stylesheets/bootstwatch-united-adults.min.css",
  "kids" : "stylesheets/bootstwatch-sketchy-kids.min.css"
}

// Theme changer
const themeToggle = document.querySelector(".theme-toggle");
const theme = document.querySelector("#theme");

themeToggle.addEventListener("click", () => {
  const getTheme = window.localStorage && window.localStorage.getItem("theme");
  const isKids = getTheme === 'kids';
  $(themeToggle).find('svg').toggleClass('fa-suitcase fa-child');
  theme.href = (isKids) ? themes['adults']: themes['kids'];
  window.localStorage &&
    window.localStorage.setItem(
      "theme",
      (isKids) ? 'adults': 'kids',
    );
});