document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav ul");
  
  if (menuToggle && nav) {
    const toggleIcon = menuToggle.querySelector("i");
    
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("show");
      
      if (nav.classList.contains("show")) {
        toggleIcon.classList.remove("fa-bars");
        toggleIcon.classList.add("fa-times");
        toggleIcon.style.color = "white"; // Make it visible on dark background
      } else {
        toggleIcon.classList.remove("fa-times");
        toggleIcon.classList.add("fa-bars");
        toggleIcon.style.color = ""; // Reset
      }
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("show");
        toggleIcon.classList.remove("fa-times");
        toggleIcon.classList.add("fa-bars");
        toggleIcon.style.color = "";
      });
    });
  }

  // Scroll Reveal Animations
  const reveals = document.querySelectorAll(".reveal");

  function reveal() {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  reveal(); // Trigger on load

  // Generic Form Submission Handler
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      if (form.classList.contains("search")) {
        const query = form.querySelector("input").value;
        if (query.trim() !== "") {
          alert("Searching for: " + query);
        }
      } else {
        alert("Thank you! Your form has been submitted successfully.");
        form.reset();
      }
    });
  });
});
