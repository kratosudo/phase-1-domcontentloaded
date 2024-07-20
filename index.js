// Your code goes here// index.js

// Function to update the text of the <p> element
function updateText() {
  const paragraph = document.querySelector('p');
  paragraph.textContent = "This is really cool!";
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Initially set the paragraph text
  const paragraph = document.querySelector('p');
  paragraph.textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";

  // Update the text once DOMContentLoaded event is fired
  updateText();
});
