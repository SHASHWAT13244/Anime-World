document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
      const moreContent = button.previousElementSibling; // Get the hidden content
      const isVisible = moreContent.style.display === 'block';
      
      moreContent.style.display = isVisible ? 'none' : 'block'; // Toggle display
      button.textContent = isVisible ? 'Read More' : 'Show Less'; // Change button text
  });
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.id = 'dark-mode-toggle';
document.querySelector('header').appendChild(darkModeToggle); // Add button to header

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// On page load
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// Music Toggle
const musicToggle = document.createElement('button');
musicToggle.textContent = 'Play Music';
musicToggle.id = 'music-toggle';
document.querySelector('header').appendChild(musicToggle); // Add button to header

const backgroundMusic = document.getElementById('background-music');

musicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.textContent = 'Pause Music';
    } else {
        backgroundMusic.pause();
        musicToggle.textContent = 'Play Music';
    }
});