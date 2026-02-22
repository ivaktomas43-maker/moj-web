// Rok do footeru
document.querySelector("#year").textContent = new Date().getFullYear();

// CTA button scroll
document.querySelector("#cta").addEventListener("click", () => {
  document.querySelector("#kontakt").scrollIntoView({ behavior: "smooth" });
});

// Formulár
document.querySelector("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  const status = document.querySelector("#status");

  if (!name || !email || !message) {
    status.textContent = "Vyplň prosím všetky polia.";
    return;
  }

  status.textContent = `Ďakujem ${name}! Ozvem sa ti čoskoro 😉`;
  e.target.reset();
});