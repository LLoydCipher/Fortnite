// script.js
document.getElementById('yes-btn').addEventListener('click', () => {
  document.querySelector('.question-section').classList.add('hidden');
  const responseSection = document.querySelector('.response-section');
  responseSection.classList.remove('hidden');
  responseSection.classList.add('visible');
});
