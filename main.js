document.addEventListener("DOMContentLoaded", function() => {
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close menu after clicking a link
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});

