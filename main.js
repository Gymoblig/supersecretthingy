onload = () =>{
        document.body.classList.remove("container");
};

const noButton = document.querySelector('.no');

// This flag will check if the button has already moved
let hasMoved = false;

// Function to move the button away from the cursor
function moveButtonAwayFromCursor(event) {
  const buttonRect = noButton.getBoundingClientRect(); // Get button position
  const buttonX = buttonRect.left + buttonRect.width / 2;
  const buttonY = buttonRect.top + buttonRect.height / 2;

  const distanceX = Math.abs(event.clientX - buttonX);
  const distanceY = Math.abs(event.clientY - buttonY);

  const distanceThreshold = 50; // Distance from button where it starts to run away

  if (distanceX < distanceThreshold && distanceY < distanceThreshold && !hasMoved) {
    // Set the flag to true to prevent multiple movements in quick succession
    hasMoved = true;

    // Get random position, but ensure it stays within the viewport
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));

    // Move the button to a new position
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // After a short delay (0.5s), allow the button to be moved again
    setTimeout(() => {
      hasMoved = false;
    }, 500); // Allow another move after 500ms
  }
}

// Add mousemove listener to the document to detect cursor position
document.addEventListener('mousemove', moveButtonAwayFromCursor);







// Select the "Yes" button and text
const yesButton = document.querySelector('.yes');
const text = document.querySelector('.text');
const credits = document.querySelector('.credits');
const buttons = document.querySelectorAll('button');

// Event listener for "Yes" button click
yesButton.addEventListener('click', () => {
  // Add the class to trigger fade-out on text
  text.classList.add('fade-out-text');

  // Fade out the buttons as well
  buttons.forEach(button => {
    button.classList.add('fade-out');
  });

  // Show the credits after the text fades out (after 1 second delay)
  setTimeout(() => {
    credits.classList.add('fade-in-credits'); // Add fade-in animation for credits
  }, 1000); // Delay to match the fade-out duration of the text
});
