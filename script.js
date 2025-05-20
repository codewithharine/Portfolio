// Scroll-to-top button functionality
const topButton = document.getElementById('topBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
};

// When the user clicks on the button, scroll to the top of the document
topButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
