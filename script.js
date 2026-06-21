const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxOEMtndXzP2l4X_zCfzv-_1iMli2zTvAj-kLyplJ2YCtvt7d-pnecqvmwkC9wTa-8x/exec";

const leadForm = document.getElementById("leadForm");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");
const bookImage = document.getElementById("bookImage");

// If the image path is wrong, try root fallback.
if (bookImage) {
  bookImage.onerror = function () {
    if (bookImage.src.includes("assets/guide-cover.png")) {
      bookImage.src = "guide-cover.png";
    }
  };
}

if (leadForm) {
  leadForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (successMessage) successMessage.classList.remove("show");
    if (errorMessage) errorMessage.classList.remove("show");

    const formData = new FormData(leadForm);

    // Hidden anti-spam field.
    if (formData.get("website")) {
      return;
    }

    formData.append("pageUrl", window.location.href);
    formData.append("userAgent", navigator.userAgent);
    formData.append("source", "brain-trade-landing-page");

    const button = leadForm.querySelector("button[type='submit']");
    const originalText = button ? button.textContent : "";

    if (button) {
      button.disabled = true;
      button.textContent = "Skickar...";
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      leadForm.reset();
      if (successMessage) successMessage.classList.add("show");
    } catch (error) {
      console.error(error);
      if (errorMessage) errorMessage.classList.add("show");
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = originalText;
      }
    }
  });
}