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
    alert("er.thakuramankumar@gmail.com");
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



document.addEventListener('DOMContentLoaded', () => {
    // Select the download button by its ID
    const downloadCvButton = document.getElementById('downloadCvButton');
  
    // Ensure the browser starts the download instead of opening the file
    downloadCvButton.addEventListener('click', (e) => {
      e.preventDefault(); // Prevents the default action of opening the file
  
      // Manually trigger a download action
      const link = document.createElement('a');
      link.href = 'CV_AmanKumarThakur.pdf'; // Path to the file
      link.download = 'AmanKumarThakur_CV.pdf'; // Name for the downloaded file
      link.click(); // Trigger the click event to start the download
  
      // Log for debugging (optional)
      console.log('Download initiated');
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
  // Create a script element for JSON-LD structured data
  const jsonLdScript = document.createElement("script");
  jsonLdScript.type = "application/ld+json";
  jsonLdScript.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aman Kumar Thakur",
    "url": "https://amankumarthakur.com.np"
  });

  // Append it to the <head> section
  document.head.appendChild(jsonLdScript);
});


// Observe all sections for staggered animation
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});
