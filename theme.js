// theme.js

const toggleBtn = document.getElementById('theme-toggle');
const html = document.documentElement;

// Apply theme on load
if (localStorage.theme === 'dark') {
  html.classList.add('dark');
  if (toggleBtn) toggleBtn.textContent = '☀️';
} else {
  html.classList.remove('dark');
  if (toggleBtn) toggleBtn.textContent = '🌖';
}

// Toggle theme on click
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
      localStorage.theme = 'light';
      toggleBtn.textContent = '🌖';
    } else {
      html.classList.add('dark');
      localStorage.theme = 'dark';
      toggleBtn.textContent = '☀️';
    }
  });
}
