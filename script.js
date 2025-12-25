// ------------------------------
// MOBILE NAVIGATION
// ------------------------------
const navLinks = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ------------------------------
// CONTACT FORM (Formspree)
// ------------------------------
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const submitBtn = form.querySelector("button[type='submit']");
    if (submitBtn) submitBtn.disabled = true;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { "Accept": "application/json" }
    }).then(response => {
      if (response.ok) {
        status.style.color = "#22c55e";
        status.textContent = "✅ Message sent successfully!";
        form.reset();
      } else {
        response.json().then(data => {
          throw new Error((data && data.error) ? data.error : "Form submission failed");
        });
      }
    }).catch(err => {
      console.error("Formspree Error:", err);
      status.style.color = "#ef4444";
      status.textContent = "❌ Failed to send message. Please try again.";
    }).finally(() => {
      if (submitBtn) submitBtn.disabled = false;
      setTimeout(() => { status.textContent = ""; }, 5000);
    });
  });
}
