const box = document.getElementById('box');
const animateBtn = document.getElementById('animateBtn');
const saveColorBtn = document.getElementById('saveColorBtn');

// Trigger CSS animation
animateBtn.addEventListener('click', () => {
  box.classList.toggle('animate');
});

// Store preferred background color in localStorage
saveColorBtn.addEventListener('click', () => {
  const color = box.style.backgroundColor || 'green';
  localStorage.setItem('preferredColor', color);
  alert(`Color ${color} saved!`);
});

// Load preferred color on page load
window.addEventListener('DOMContentLoaded', () => {
 

  const savedColor = localStorage.getItem('preferredColor');
  console.log(savedColor);
  if (savedColor) {
    box.style.backgroundColor = savedColor;
  }
});
