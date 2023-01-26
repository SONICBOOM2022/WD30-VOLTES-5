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




const nameRegex = /^[a-zA-Z ]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const subjectRegex = /^[a-zA-Z ]+$/;
const numberRegex = /^[0-9]{10}$/;
const messageRegex = /^(.|\n)+$/;

const validateName = (name) => nameRegex.test(name);
const validateEmail = (email) => emailRegex.test(email);
const validateSubject = (subject) => subjectRegex.test(subject);
const validateNumber = (number) => numberRegex.test(number);
const validateMessage = (message) => messageRegex.test(message);

function validateForm() {
    
    const name = document.getElementById("fName").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;
  
    if (!validateName(name)) {
      alert("Please enter a valid name.");
      return false;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!validateSubject(subject)) {
      alert("Please enter a valid subject.");
      return false;
    }
    if (!validateNumber(number)) {
      alert("Please enter a valid phone number.");
      return false;
    }
    if (!validateMessage(message)) {
      alert("Please enter a message.");
      return false;
    }
  
    
    alert("Form submitted successfully!");
    return true;
  }

function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "marlowetan2023@gmail.com",
      Password: "00C5FDDDFA8202D2E47F02316F75E4A5E5C8",
      To: 'marlowetan2023@gmail.com',
      From: document.getElementById("email").value,
      Subject: "Contact form",
      Body: "My body"
    }).then(
      message => alert(message)
    );
  }
