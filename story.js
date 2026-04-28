const lines = [
  "Hi Rinny",
  "Happy Birthday",
  "I made this for you because…",
  "…there are things I always wanted to tell you but was too shy, even when you were right there.",
  "So I thought I’d say them here instead, somewhere you can visit whenever you want.",
  "Because you matter to me more than you probably know.",
  "And I didn’t want those feelings to just stay in my head and fade away.",
  "I wanted them to become something you could see. Something you could keep.",
  "Like a small place in the world that belongs only to you.",
  "So, if you’re reading this…",
  "you made it in.",
  "And I am really glad you did."
];

let index = 0;
const textEl = document.getElementById("story-text");

function nextLine() {
  if (index < lines.length) {
    textEl.textContent = lines[index];
    index++;
  } else {
    textEl.textContent = "💖 The End 💖";
  }
}