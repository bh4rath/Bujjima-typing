// Map every key to a fun emoji + word for Bujjima's Typing Fun!
const KEY_MAP = {
  a: ["🍎", "Apple"],
  b: ["🐝", "Bee"],
  c: ["🐱", "Cat"],
  d: ["🐶", "Dog"],
  e: ["🐘", "Elephant"],
  f: ["🦊", "Fox"],
  g: ["🦒", "Giraffe"],
  h: ["🦔", "Hedgehog"],
  i: ["🦎", "Iguana"],
  j: ["🐆", "Jaguar"],
  k: ["🦘", "Kangaroo"],
  l: ["🦁", "Lion"],
  m: ["🐒", "Monkey"],
  n: ["🥜", "Nut"],
  o: ["🦉", "Owl"],
  p: ["🐼", "Panda"],
  q: ["👑", "Queen"],
  r: ["🐰", "Rabbit"],
  s: ["🐍", "Snake"],
  t: ["🐯", "Tiger"],
  u: ["🦄", "Unicorn"],
  v: ["🌋", "Volcano"],
  w: ["🐺", "Wolf"],
  x: ["🩻", "X-ray"],
  y: ["🐥", "Yellow Chick"],
  z: ["🦓", "Zebra"],

  "0": ["0️⃣", "Zero"],
  "1": ["1️⃣", "One"],
  "2": ["2️⃣", "Two"],
  "3": ["3️⃣", "Three"],
  "4": ["4️⃣", "Four"],
  "5": ["5️⃣", "Five"],
  "6": ["6️⃣", "Six"],
  "7": ["7️⃣", "Seven"],
  "8": ["8️⃣", "Eight"],
  "9": ["9️⃣", "Nine"],

  " ": ["🌈", "Rainbow!"],
  enter: ["🎉", "Party!"],
  arrowup: ["⬆️", "Up!"],
  arrowdown: ["⬇️", "Down!"],
  arrowleft: ["⬅️", "Left!"],
  arrowright: ["➡️", "Right!"],
  backspace: ["🐬", "Dolphin"],
  tab: ["🦜", "Parrot"],
  shift: ["🎈", "Balloon"],
  control: ["🍀", "Clover"],
  alt: ["🌸", "Blossom"],
  capslock: ["🦋", "Butterfly"],
};

// Fallback pool for any key not explicitly mapped above.
const SURPRISE_POOL = [
  ["🎈", "Balloon"],
  ["🌟", "Star"],
  ["🎊", "Confetti"],
  ["🦋", "Butterfly"],
  ["🌸", "Blossom"],
  ["🐬", "Dolphin"],
  ["🦜", "Parrot"],
  ["🍇", "Grapes"],
  ["🥦", "Broccoli"],
  ["🐠", "Fish"],
];

// Bright, cheerful background gradients.
const BACKGROUNDS = [
  "linear-gradient(135deg, #ffd1dc, #c1f0ff)",
  "linear-gradient(135deg, #fff6b7, #f6416c)",
  "linear-gradient(135deg, #a8edea, #fed6e3)",
  "linear-gradient(135deg, #d4fc79, #96e6a1)",
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
  "linear-gradient(135deg, #fddb92, #d1fdff)",
  "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  "linear-gradient(135deg, #84fab0, #8fd3f4)",
  "linear-gradient(135deg, #cfd9df, #e2ebf0)",
  "linear-gradient(135deg, #f6d365, #fda085)",
];

const CONFETTI_POOL = ["🎉", "🌟", "✨", "🎈", "🍀", "🦋", "🌈", "💖"];

// Critters that wander across the screen on their own, walking, running and flying.
const AMBIENT_CRITTERS = [
  "🐶", "🐱", "🐰", "🦁", "🐯", "🐻", "🐼", "🐘", "🦒", "🦓",
  "🐺", "🦊", "🐵", "🦘", "🐧", "🐥", "🦋", "🐢", "🐔", "🦆",
  "🐬", "🐠", "🦜", "🐝", "🐄", "🐷", "🐑", "🐴",
];

// Real recorded animal sounds (see sounds/CREDITS.md for licenses).
const SOUND_FILES = {
  "🦁": "sounds/lion-roar.mp3",
  "🐯": "sounds/lion-roar.mp3",
  "🐆": "sounds/lion-roar.mp3",
  "🐶": "sounds/dog-bark.mp3",
  "🐱": "sounds/cat-meow.mp3",
  "🐘": "sounds/elephant-trumpet.mp3",
  "🦉": "sounds/bird-chirp.mp3",
  "🦜": "sounds/bird-chirp.mp3",
  "🐥": "sounds/bird-chirp.mp3",
  "🐔": "sounds/chicken-cluck.mp3",
  "🦓": "sounds/horse-trot.mp3",
  "🦄": "sounds/horse-trot.mp3",
  "🐴": "sounds/horse-trot.mp3",
  "🐄": "sounds/cow-moo.mp3",
  "🐷": "sounds/pig-oink.mp3",
  "🐑": "sounds/sheep-baa.mp3",
};

// What each animal says when it shows up, spoken aloud for extra fun.
const ANIMAL_SOUNDS = {
  "🦁": "Roaaar!",
  "🐯": "Grrrowl, roar!",
  "🐶": "Woof woof!",
  "🐱": "Meow!",
  "🐘": "Pawoo!",
  "🐝": "Buzz buzz!",
  "🦊": "Ring-ding-ding!",
  "🦔": "Squeak!",
  "🐆": "Growl!",
  "🦘": "Boing boing!",
  "🐵": "Ooh ooh ah ah!",
  "🐒": "Ooh ooh ah ah!",
  "🦉": "Hoot hoot!",
  "🐼": "Munch munch!",
  "🐰": "Hop hop!",
  "🐍": "Hiss!",
  "🦄": "Neigh!",
  "🐺": "Awooo!",
  "🐥": "Tweet tweet!",
  "🦓": "Neigh!",
  "🐻": "Grrrowl!",
  "🐧": "Honk honk!",
  "🐔": "Cluck cluck!",
  "🦆": "Quack quack!",
  "🐬": "Eee eee!",
  "🦜": "Tweet tweet, hello!",
  "🐄": "Moo!",
  "🐷": "Oink oink!",
  "🐑": "Baa baa!",
};

const welcome = document.getElementById("welcome");
const emojiEl = document.getElementById("emoji");
const wordEl = document.getElementById("word");
const confettiLayer = document.getElementById("confetti-layer");
const critterLayer = document.getElementById("critter-layer");

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playPopSound() {
  const ctx = getAudioContext();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  const startFreq = 400 + Math.random() * 400;
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(startFreq, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(startFreq * 2, ctx.currentTime + 0.15);

  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.2);
}

let currentAnimalAudio = null;

function speakAnimalSound(emoji) {
  const sound = ANIMAL_SOUNDS[emoji];
  if (!sound || !("speechSynthesis" in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(sound);
  utterance.rate = 0.9;
  utterance.pitch = 1.3;

  // Stop any sound still playing so rapid keypresses don't queue up.
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function playAnimalSound(emoji) {
  const file = SOUND_FILES[emoji];
  if (!file) {
    speakAnimalSound(emoji);
    return;
  }

  // Stop any sound still playing so rapid keypresses don't overlap badly.
  if (currentAnimalAudio) {
    currentAnimalAudio.pause();
  }
  currentAnimalAudio = new Audio(file);
  currentAnimalAudio.play().catch(() => {});
}

function randomBackground() {
  document.body.style.background = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];
}

function spawnConfetti() {
  const count = 6 + Math.floor(Math.random() * 4);
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.textContent = CONFETTI_POOL[Math.floor(Math.random() * CONFETTI_POOL.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.animationDuration = `${1 + Math.random() * 1.5}s`;
    confettiLayer.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
}

function spawnCritter(emoji) {
  const goingRight = Math.random() < 0.5;
  const isRunning = Math.random() < 0.4;
  const duration = isRunning ? 1.5 + Math.random() * 1.5 : 3.5 + Math.random() * 3;
  const size = 8 + Math.random() * 6; // vmin

  const critter = document.createElement("div");
  critter.className = "critter";
  critter.style.top = `${5 + Math.random() * 80}vh`;
  critter.style.fontSize = `${size}vmin`;
  critter.style.animationName = goingRight ? "walk-ltr" : "walk-rtl";
  critter.style.animationDuration = `${duration}s`;

  const body = document.createElement("span");
  body.className = "critter-body";
  body.textContent = emoji;
  body.style.animationName = goingRight ? "waddle" : "waddle-flip";
  body.style.animationDuration = `${isRunning ? 0.2 : 0.45}s`;

  critter.appendChild(body);
  critterLayer.appendChild(critter);
  critter.addEventListener("animationend", (event) => {
    if (event.animationName === "walk-ltr" || event.animationName === "walk-rtl") {
      critter.remove();
    }
  });
}

function spawnAmbientCritter() {
  const emoji = AMBIENT_CRITTERS[Math.floor(Math.random() * AMBIENT_CRITTERS.length)];
  spawnCritter(emoji);
  const nextDelay = 2500 + Math.random() * 4000;
  setTimeout(spawnAmbientCritter, nextDelay);
}

function showItem(emoji, word) {
  emojiEl.textContent = emoji;
  wordEl.textContent = word;

  emojiEl.classList.remove("pop");
  wordEl.classList.remove("pop");
  // Re-trigger the animation by forcing a reflow before re-adding the class.
  void emojiEl.offsetWidth;
  emojiEl.classList.add("pop");
  wordEl.classList.add("pop");
}

function handleInteraction(emoji, word) {
  if (!welcome.classList.contains("hidden")) {
    welcome.classList.add("hidden");
  }
  showItem(emoji, word);
  randomBackground();
  spawnConfetti();
  spawnCritter(emoji);
  playPopSound();
  playAnimalSound(emoji);
}

document.addEventListener("keydown", (event) => {
  // Let browser/OS shortcuts (Ctrl, Alt, Meta combos) work as normal.
  if (event.ctrlKey || event.metaKey || event.altKey) {
    return;
  }

  const key = event.key.toLowerCase();
  const entry = KEY_MAP[key] || SURPRISE_POOL[Math.floor(Math.random() * SURPRISE_POOL.length)];

  event.preventDefault();
  handleInteraction(entry[0], entry[1]);
});

// Bonus: tapping/clicking the screen also triggers a fun surprise (great for tablets).
document.addEventListener("pointerdown", () => {
  const entry = SURPRISE_POOL[Math.floor(Math.random() * SURPRISE_POOL.length)];
  handleInteraction(entry[0], entry[1]);
});

// Keep the screen lively with animals wandering by on their own.
spawnAmbientCritter();
