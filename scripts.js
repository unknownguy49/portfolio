// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        if (targetId === '#home') { // If the target is the home section
            location.reload(); // Reload the page
        } else {
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
            });
        }
    });
});

// Client-side form submission validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Validate name
    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        nameInput.focus();
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        event.preventDefault(); // Prevent form submission
        return false;
    }

    // Validate message
    if (messageInput.value.trim() === "") {
        alert("Please enter your message.");
        messageInput.focus();
        event.preventDefault(); // Prevent form submission
        return false;
    }
});
