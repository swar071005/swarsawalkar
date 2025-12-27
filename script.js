document.addEventListener("DOMContentLoaded", function () {

  /* ==========================
     MOBILE NAVIGATION
     ========================== */
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Close menu after clicking a link (mobile UX)
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }

  /* ==========================
     CONTACT FORM (Formspree)
     ========================== */
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = form.querySelector("button[type='submit']");
      if (submitBtn) submitBtn.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      })
      .then(response => {
        if (response.ok) {
          status.style.color = "#22c55e";
          status.textContent = "✅ Message sent successfully!";
          form.reset();
        } else {
          throw new Error("Form submission failed");
        }
      })
      .catch(() => {
        status.style.color = "#ef4444";
        status.textContent = "❌ Failed to send message. Please try again.";
      })
      .finally(() => {
        if (submitBtn) submitBtn.disabled = false;
        setTimeout(() => status.textContent = "", 5000);
      });
    });
  }

});
