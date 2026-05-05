const bgMusic = new Audio("Hopeful Tomorrow.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.4;

function startMusic() {
  bgMusic.play().catch(() => {
    // if blocked, wait for ANY click
    document.addEventListener("click", () => {
      bgMusic.play();
    }, { once: true });
  });
}

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  const normalized = input.trim().toLowerCase();

  if (normalized === "moonlike smile") {

    sessionStorage.setItem("unlocked", "true");
    sessionStorage.setItem("musicPlaying", "true");

    startMusic(); // 👈 start music HERE

    setTimeout(() => {
      window.location.href = "menu.html";
    }, 800);

  } else {
    error.textContent = "That doesn't feel quite right...";
  }
}

function unlockAudio() {
  startMusic();
  document.getElementById("overlay").style.display = "none";
}

// 🔥 THIS IS THE IMPORTANT PART
window.addEventListener("load", () => {
  if (sessionStorage.getItem("musicPlaying") === "true") {
    startMusic(); // 👈 try again when returning to page
  }
});