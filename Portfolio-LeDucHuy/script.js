const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

document.getElementById("year").textContent = new Date().getFullYear();

const gameplayVideo = document.getElementById("gameplayVideo");
const gameplayCover = document.getElementById("gameplayCover");
const gameplayStatus = document.getElementById("gameplayStatus");

if (gameplayVideo) {
  gameplayVideo.addEventListener("loadedmetadata", () => {
    gameplayVideo.hidden = false;

    if (gameplayCover) {
      gameplayCover.hidden = true;
    }

    if (gameplayStatus) {
      gameplayStatus.hidden = true;
    }
  });

  gameplayVideo.addEventListener("error", () => {
    gameplayVideo.hidden = true;

    if (gameplayCover) {
      gameplayCover.hidden = false;
    }

    if (gameplayStatus) {
      gameplayStatus.hidden = false;
    }
  });
}

const lightbox = document.getElementById("mediaLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const galleryCards = document.querySelectorAll("[data-lightbox]");

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.hidden = true;
  document.body.style.overflow = "";
};

galleryCards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = card.dataset.lightbox;
    lightboxImage.alt = card.dataset.caption || "ROBOCK screenshot";

    if (lightboxCaption) {
      lightboxCaption.textContent = card.dataset.caption || "";
    }

    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});
