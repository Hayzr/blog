function toggleTheme() {
  var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleLabel();
}

function updateToggleLabel() {
  var btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  btn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀ Light' : '☾ Dark';
}

document.addEventListener('DOMContentLoaded', updateToggleLabel);
