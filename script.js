// Braintrade Learning JavaScript

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Braintrade Learning Platform Initialized');
  initializeEventListeners();
  loadContent();
});

// Initialize event listeners
function initializeEventListeners() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });

  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', handleCardHover);
  });
}

// Handle button clicks
function handleButtonClick(e) {
  console.log('Button clicked:', e.target.textContent);
  // Add your button click logic here
}

// Handle card hover
function handleCardHover(e) {
  console.log('Card hovered:', e.target.querySelector('h3')?.textContent);
}

// Load content
function loadContent() {
  console.log('Content loaded successfully');
  // Add your content loading logic here
}

// Utility function to fetch learning modules
async function fetchLearningModules() {
  try {
    console.log('Fetching learning modules...');
    // Add your API call here
  } catch (error) {
    console.error('Error fetching modules:', error);
  }
}

// Utility function to save user progress
function saveProgress(moduleId, progress) {
  try {
    localStorage.setItem(`braintrade_progress_${moduleId}`, JSON.stringify(progress));
    console.log('Progress saved for module:', moduleId);
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}

// Utility function to load user progress
function loadProgress(moduleId) {
  try {
    const progress = localStorage.getItem(`braintrade_progress_${moduleId}`);
    return progress ? JSON.parse(progress) : null;
  } catch (error) {
    console.error('Error loading progress:', error);
    return null;
  }
}

// Smooth scroll functionality
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Export functions for external use
window.braintrade = {
  fetchLearningModules,
  saveProgress,
  loadProgress,
  smoothScroll
};
