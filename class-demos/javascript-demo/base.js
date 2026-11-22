const button = document.querySelector('#themeButton');

button.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const darkModeIsOn = document.body.classList.contains('dark');
    button.textContent = darkModeIsOn
    if (darkModeIsOn) {
      button.textContent = 'Turn off dark mode';
    } else {
      button.textContent = 'Turn on dark mode';
    }
}); 




// The JavaScript is doing three things:

// Finding the button.
// Waiting for a click.
// Adding or removing a dark class on the page and updating the button label.

// const button = document.querySelector('#themeButton');

// document means the current webpage.
// querySelector('#themeButton') finds the HTML element with the ID themeButton:
  
// <button id="themeButton" type="button">
//   Turn on dark mode
// </button>

// The result is stored in a variable called button, so JavaScript can work with that button later.

// (Find the button on the page and give me a shortcut to it.)
  
// button.addEventListener('click', () => {

// This tells JavaScript to listen for a click event on the button.
// The arrow function, () => { ... }, contains the instructions that should run after the click.

// (When someone clicks this button, run the following code.)
  
// document.body.classList.toggle('dark');

// This changes the <body> element’s class.
// If the body does not have the class dark, JavaScript adds it:
  
// <body class="dark">

// If the body already has the class, JavaScript removes it:
  
// <body>

// Toggle as a light switch:

// (If it is off, turn it on. If it is on, turn it off.)

// The CSS responds to that class:
  
// body.dark {
//   --background: #202020;
//   --text: #f5f5f5;
//   --card: #333333;
// }

// The JavaScript does not directly change the colors. It changes the page’s class, and the CSS determines what that class looks like.
  
// const darkModeIsOn =
//   document.body.classList.contains('dark');

// This checks whether the body currently has the dark class.
// The result is either:
  
// true

// or:
  
// false

// That result is stored in darkModeIsOn.

// (Check the current state of the page: Is dark mode on?)
  
// button.textContent = darkModeIsOn

// This changes the words displayed inside the button.
  
// if (darkModeIsOn) {
//   button.textContent = 'Turn off dark mode';
// } else {
//   button.textContent = 'Turn on dark mode';
// }

// The complete flow
// When the page loads:
  
// const button = document.querySelector('#themeButton');

// JavaScript finds the button.
// When the user clicks it:
  
// button.addEventListener('click', () => {

// JavaScript runs the code inside the function.
// First, it switches the class:
  
// document.body.classList.toggle('dark');

// Then it checks the new state:
  
// const darkModeIsOn =
//   document.body.classList.contains('dark');

// Finally, it updates the button’s text:
  
// button.textContent = darkModeIsOn
//   ? 'Turn off dark mode'
//   : 'Turn on dark mode';

// The basic pattern is:

// Find something → listen for an action → change the page → update the interface

// That pattern is foundational JavaScript for interactive journalism projects.
  
// const button = document.querySelector('#themeButton');

// button.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
// });

// The colors change, but the button label does not.
  
// const darkModeIsOn =
//   document.body.classList.contains('dark');

// if (darkModeIsOn) {
//   button.textContent = 'Turn off dark mode';
// } else {
//   button.textContent = 'Turn on dark mode';
// }

// Why is the second part needed?

// Changing the page’s appearance and changing the button’s label are two separate tasks. The first part changes the page; the second part communicates the current state to the user.

// The JavaScript depends on the HTML ID:
  
// <button id="themeButton">

// and this selector:
  
// document.querySelector('#themeButton');

// If the HTML changes to:
  
// <button id="darkModeButton">

// The JavaScript must also change:
  
// document.querySelector('#darkModeButton');

// The selector and the HTML id must match exactly.