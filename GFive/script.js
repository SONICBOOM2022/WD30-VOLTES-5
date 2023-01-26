const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav-Menu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav-menu.classList.remove("active");

}))

function validateForm() {
    // Get input values
    const name = document.getElementById("fName").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;
  
    // Define regular expressions
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const subjectRegex = /^[a-zA-Z ]+$/;
    const numberRegex = /^[0-9]{10}$/;
    const messageRegex = /^(.|\n)+$/;
  
    // Validate input
    if (!nameRegex.test(name)) {
      alert("Please enter a valid name.");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!subjectRegex.test(subject)) {
      alert("Please enter a valid subject.");
      return false;
    }
    if (!numberRegex.test(number)) {
      alert("Please enter a valid phone number.");
      return false;
    }
    if (!messageRegex.test(message)) {
      alert("Please enter a message.");
      return false;
    }
  
    // If all input is valid, submit the form
    alert("Form submitted successfully!");
    return true;
  }



// function sendEmail() {
//     Email.send({
//       Host: "smtp.elasticemail.com",
//       Username: "marlowetan2023@gmail.com",
//       Password: "00C5FDDDFA8202D2E47F02316F75E4A5E5C8",
//       To: 'marlowetan2023@gmail.com',
//       From: document.getElementById("email").value,
//       Subject: "Contact form",
//       Body: "My body"
//     }).then(
//       message => alert(message)
//     );
//   }
