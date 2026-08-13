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
const videoPanel = document.getElementById("videoPanel");

if (gameplayVideo && videoPanel) {
  gameplayVideo.addEventListener("loadedmetadata", () => {
    videoPanel.hidden = false;
  });

  gameplayVideo.addEventListener("error", () => {
    videoPanel.hidden = true;
  });
}
