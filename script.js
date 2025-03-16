// Contact Form Submission
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const successMessage = document.createElement("div");
successMessage.id = "successMessage";
successMessage.style.display = "none";
successMessage.style.color = "green";
contactForm.appendChild(successMessage);

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Basic email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please fill out all fields.");
    return;
  }

  console.log("Form submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Show a success message
  successMessage.textContent = "Thank you for reaching out! I will get back to you soon.";
  successMessage.style.display = "block";

  // Clear the form fields
  contactForm.reset();
});

// Send Contact Form Email Using EmailJS
function sendEmail(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        message: message,
    };

    // Use EmailJS send method with the updated API
    emailjs.send('service_p9w6jlu', 'template_ss93itm', templateParams)
        .then((response) => {
            console.log('Success:', response);
            alert('Message sent successfully!');
            // Clear form fields after submission
            document.getElementById('contactForm').reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            // Show a more detailed error message
            alert(`Failed to send message. Error: ${error.text}`);
        });
}
// Show Credential Functionality
const showCredentialLinks = document.querySelectorAll('.show-credential');

showCredentialLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    const credentialDetails = link.nextElementSibling; // Get the next sibling (credential details)

    // Toggle the visibility of the credential details
    if (credentialDetails.style.display === "none" || credentialDetails.style.display === "") {
      credentialDetails.style.display = "block"; // Show the details
      setTimeout(() => {
        credentialDetails.classList.add('show'); // Add class for fade-in effect
      }, 10); // Delay to allow display to take effect
    } else {
      credentialDetails.classList.remove('show'); // Remove class for fade-out effect
      credentialDetails.style.display = "none"; // Hide the details
    }
  });
});

// Toggle the mobile menu visibility
function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('show');
}

// Close menu when clicking outside or on a menu item
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            menuToggle.classList.remove('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('show');
            menuToggle.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
  const viewResumeButton = document.getElementById('viewResumeButton');

  if (!viewResumeButton) {
      console.error("Error: viewResumeButton element not found in the DOM.");
      return; // Exit if button is missing
  }

  viewResumeButton.addEventListener('click', (e) => {
      console.log('Resume viewed in a new tab.');
  });
});


// Professional Line-by-Line Scroll Animation
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = Array.from(entry.target.children);

      children.forEach((child, index) => {
        // Delay increases with each child for a cascading effect
        setTimeout(() => {
          child.classList.add('fade-in');
        }, index * 200); // 200ms delay between each item
      });

      // Unobserve to trigger animation only once
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 }); // Trigger when 20% of section is visible

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Fix JSON-LD Structured Data (Ensuring it's only added once)
  if (!document.querySelector('script[type="application/ld+json"]')) {
      const jsonLdScript = document.createElement("script");
      jsonLdScript.type = "application/ld+json";
      jsonLdScript.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Aman Kumar Thakur",
          "alternateName": "amankumarthakur.com.np",
          "url": "https://amankumarthakur.com.np"
      });
      document.head.appendChild(jsonLdScript);
  }

  // ✅ Ensure `observer` is defined before using it
  if (typeof observer !== "undefined") {
      document.querySelectorAll("section").forEach(section => observer.observe(section));
  } else {
      console.error("Intersection Observer not found. Ensure it's defined before use.");
  }
});
