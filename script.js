// Get the hero section
const heroSection = document.querySelector('.hero');

// Get the cta button
const ctaButton = document.getElementById('cta-button');

// Add event listener to the cta button
ctaButton.addEventListener('click', () => {
  // Add fade-in animation to the features section
  const featuresSection = document.querySelector('.features');
  featuresSection.classList.add('fade-in');
});

// Add event listener to the window
window.addEventListener('load', () => {
  // Add fade-in animation to the hero section
  heroSection.classList.add('fade-in');
});

// Add event listener to the window
window.addEventListener('resize', () => {
  // Update the hero section height
  const heroSectionHeight = window.innerHeight;
  heroSection.style.height = `${heroSectionHeight}px`;
});