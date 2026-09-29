// Hamburger only - very little JS
const ham = document.getElementById('ham');
const nav = document.getElementById('navLinks');

ham.onclick = () => {
  nav.classList.toggle('active');
  ham.textContent = nav.classList.contains('active') ? '✕' : '☰';
};

// Form - little bit
document.getElementById('form').onsubmit = (e) => {
  e.preventDefault();
  document.getElementById('msg').textContent = '✓ Message sent!';
  e.target.reset();
};