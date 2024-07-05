document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Display a simple alert (replace with actual form submission logic)
        alert(`Message sent! \nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        // Reset the form
        form.reset();
    });
});
