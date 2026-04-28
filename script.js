function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  const normalized = input.trim().toLowerCase();

  if (normalized === "moonlike smile") {

    // Start music
    const audio = new Audio("Moonlike-Smile.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audio.play();

    // Save that we unlocked it
    sessionStorage.setItem("unlocked", "true");

    // small delay for effect
    setTimeout(() => {
      window.location.href = "story.html";
    }, 800);

  } else {
    error.textContent = "That doesn't feel quite right...";
  }
}