const bgMusic = new Audio("Moonlike-Smile.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.4;
bgMusic.play();


const lines = [
  "Hi Rinny",
  "Happy Birthday",
  "I made this for you because…",
  "I wanted a place to store all these lovely memories",
  "So I thought I could make this little virtual world",
  "That you could visit anytime and anywhere hehe",
  "I did all of this...",
  "Because you matter to me the most, and you already know",
  "And I did not want these feelings to just stay in my head",
  "I wanted them to become something you could see. Something you could keep. Something you could visit anytime",
  "Like a small place in the world that belongs only to you",
  "So if you are reading this…",
  "It means youre an amazing person",
  "Because people are willing to go beyond to make you happy",
  "And you deserve it because you should always be loved",
  "I am glad you are here with us",
  "Happy Birthday Rinny, you have made it to another new chapter of your life",
  "I hope you enjoy the blessings that are coming to you",
  "I wish you a happy and loved future",
  "Thats all for now my rinny",
  "You may continue to explore this world now",
  "Oh wait...",
  "One more thing",
  "I LOVE YOU RINNNYYYY",
  "I LOVE YOU I LOVE YOUU",
  "AJNAJERAJERA"
];

let index = 0;
const textEl = document.getElementById("story-text");

function nextLine() {
  if (index < lines.length) {
    textEl.textContent = lines[index];
    index++;
  } else {
    textEl.textContent =  "Happy Birthday my sweet rinnnnyyy"
;

    // redirect after a short delay
    setTimeout(() => {
      window.location.href = "menu.html";
    }, 2000); // 2 seconds
  }
}