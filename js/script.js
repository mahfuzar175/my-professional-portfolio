/* scroll sections active links */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* scroll sections active links */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*sticky navbar */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*remove toggle icon and navbar when click navbar link(scroll) */

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*scroll reveal */
ScrollReveal({
  // reset: true ,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });

ScrollReveal().reveal(
  ".home-img, .education-container, .skills-row, .servies-container, .portfolio-box, .contact form ",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "bottom" });

/*typed js */

const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "MERN Stact Developer",
    "Full Stack Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/**email js added */
function sendMail() {
  // Get form input values
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email_id").value;
  var message_sub = document.getElementById("message_sub").value;
  var message = document.getElementById("message").value;

  // Check if any field is empty
  if (fullName === "" || email === "" || message_sub === "" || message === "") {
    // Display error message if any field is empty
    alertify.error("Please fill out all fields before sending the message.");
    return; // Exit the function if any field is empty
  }

  // All fields are filled, proceed with sending the message
  var params = {
    from_name: fullName,
    email_id: email,
    message_sub: message_sub,
    message: message,
  };

  // Send the message using EmailJS
  emailjs
    .send("service_zxxtkpv", "template_jyu584o", params)
    .then(function () {
      alertify.success("Email sent successfully!");
      // Reset the form
      document.querySelector("form").reset();
    })
    .catch(function (error) {
      alertify.error("Error sending email: " + error);
    });
}

// Add an event listener to the "Send Message" button to trigger form submission
document
  .getElementById("sendMessageBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission
  });
