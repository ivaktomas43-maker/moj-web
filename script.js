// Rok vo footeri
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Rezervácia cez WhatsApp
const form = document.querySelector("#contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name")?.value.trim();
    const phone = document.querySelector("#phone")?.value.trim();
    const message = document.querySelector("#message")?.value.trim();
    const status = document.querySelector("#status");

    if (!name || !phone || !message) {
      if (status) status.textContent = "Vyplň prosím všetky polia.";
      return;
    }

    const salonWhatsAppNumber = "421911151907"; // číslo mamy bez + a medzier

    const text =
      `Rezervácia – Studio Andrea\n` +
      `Meno: ${name}\n` +
      `Telefón: ${phone}\n` +
      `Správa: ${message}`;

    const url = `https://wa.me/${salonWhatsAppNumber}?text=${encodeURIComponent(text)}`;

    if (status) status.textContent = "Otváram WhatsApp…";

    window.open(url, "_blank");

    // voliteľné: vymaže formulár až po otvorení WhatsApp
    form.reset();
  });
}