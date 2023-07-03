Frontend Mentor - Password generator app solution
This is a solution to the Password generator app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Table of contents
Overview
The challenge
Screenshot
Links
My process
Built with
What I learned
Continued development
Useful resources
Author
Acknowledgments
Overview
The challenge
Users should be able to:

Generate a password based on the selected inclusion options
Copy the generated password to the computer's clipboard
See a strength rating for their generated password
View the optimal layout for the interface depending on their device's screen size
See hover and focus states for all interactive elements on the page


Links
Solution URL: https://github.com/Oleksandr-Berd/password-generator
Live Site URL: https://storied-kataifi-ba46b8.netlify.app/
My process
Built with
Semantic HTML5 markup
CSS custom properties

CSS Grid
Mobile-first workflow
React - JS library

Styled Components - For styles
What I learned
During this project, I had the opportunity to practice my React and Next.js skills. I learned how to create a password generator app that generates random passwords based on the selected inclusion options. I also implemented the functionality to copy the generated password to the clipboard and display a strength rating for the password.

Here's an example of the code I'm proud of:

jsx
Copy code
// Code snippet I'm proud of
const handleCopyPassword = () => {
  const passwordElement = document.getElementById("password");
  if (passwordElement) {
    passwordElement.select();
    document.execCommand("copy");
  }
};
In the above code, I implemented the handleCopyPassword function, which is called when the user clicks the "Copy" button. The function selects the password text input element and copies its value to the clipboard using the document.execCommand("copy") method. This allows users to easily copy the generated password.

Continued development
In future projects, I want to continue focusing on improving my CSS skills, particularly in creating responsive and visually appealing designs. I also plan to explore more advanced features and libraries in React and Next.js to enhance the functionality and user experience of my applications.

Useful resources
MDN Web Docs - The MDN Web Docs provide detailed information and examples on various web development topics. It's a valuable resource for learning and understanding web technologies.
Styled Components Documentation - The official documentation of Styled Components provides comprehensive guidance on how to use the library for styling React components. It's a great resource for learning and mastering Styled Components.
Author
Website - https://www.linkedin.com/in/oleksandr-berdychevskyi-83336761/
Frontend Mentor - https://www.frontendmentor.io/profile/Oleksandr-Berd

Acknowledgments
I would like to acknowledge the Frontend Mentor community for the experience