// Per-letter cycling pools — each keypress steps to the next animal for that letter.
const KEY_MAP = {
  a: [["🐜","Ant"],["🐊","Alligator"],["🦙","Alpaca"],["🍎","Apple"],["🥑","Avocado"]],
  b: [["🐻","Bear"],["🐝","Bee"],["🦇","Bat"],["🦋","Butterfly"],["🐦","Bird"],["🐃","Buffalo"],["🐗","Boar"]],
  c: [["🐱","Cat"],["🐪","Camel"],["🦀","Crab"],["🐊","Crocodile"],["🐮","Cow"],["🦗","Cricket"],["🐤","Chick"],["🐔","Chicken"]],
  d: [["🐶","Dog"],["🦆","Duck"],["🦌","Deer"],["🐬","Dolphin"],["🐲","Dragon"],["🦖","Dinosaur"]],
  e: [["🐘","Elephant"],["🦅","Eagle"],["🫎","Elk"]],
  f: [["🦊","Fox"],["🐟","Fish"],["🦩","Flamingo"],["🐸","Frog"]],
  g: [["🦒","Giraffe"],["🦍","Gorilla"],["🐐","Goat"],["🦎","Gecko"]],
  h: [["🐴","Horse"],["🐹","Hamster"],["🦛","Hippo"],["🦔","Hedgehog"],["🦅","Hawk"]],
  i: [["🦎","Iguana"],["🐛","Inchworm"]],
  j: [["🐆","Jaguar"],["🪼","Jellyfish"],["🐦","Jay"],["🐰","Jackrabbit"]],
  k: [["🦘","Kangaroo"],["🐨","Koala"],["🐟","Koi Fish"]],
  l: [["🦁","Lion"],["🐞","Ladybug"],["🦎","Lizard"],["🦙","Llama"],["🦞","Lobster"]],
  m: [["🐵","Monkey"],["🐭","Mouse"],["🫎","Moose"],["🦋","Moth"]],
  n: [["🐦","Nightingale"],["🦎","Newt"],["🐳","Narwhal"]],
  o: [["🐙","Octopus"],["🦦","Otter"],["🦉","Owl"],["🐂","Ox"],["🐦","Oriole"]],
  p: [["🐼","Panda"],["🐷","Pig"],["🐧","Penguin"],["🦜","Parrot"],["🦚","Peacock"],["🐡","Pufferfish"]],
  q: [["🐦","Quail"],["🦘","Quokka"]],
  r: [["🐰","Rabbit"],["🦏","Rhino"],["🐓","Rooster"],["🐀","Rat"],["🐦","Robin"]],
  s: [["🐍","Snake"],["🐑","Sheep"],["🦈","Shark"],["🐌","Snail"],["🐿️","Squirrel"],["🦢","Swan"],["🦐","Shrimp"],["🦥","Sloth"]],
  t: [["🐯","Tiger"],["🐢","Turtle"],["🦃","Turkey"],["🐠","Tropical Fish"]],
  u: [["🦄","Unicorn"],["🐵","Uakari"]],
  v: [["🦅","Vulture"],["🐍","Viper"],["🦎","Varan"]],
  w: [["🐺","Wolf"],["🐳","Whale"],["🦦","Walrus"],["🪱","Worm"],["🍉","Watermelon"]],
  x: [["🐿️","Xerus"],["🐟","X-Ray Fish"]],
  y: [["🐂","Yak"],["🍠","Yam"],["🐤","Yellow Chick"]],
  z: [["🦓","Zebra"],["🐠","Zebrafish"]],
};

// Current position in each letter's list (advances by 1 every press).
const letterIndex = {};

function pickForKey(key) {
  const pool = KEY_MAP[key];
  if (!pool) return null;
  const idx = (letterIndex[key] || 0) % pool.length;
  letterIndex[key] = idx + 1;
  return pool[idx];
}

// Large creature pool used for non-letter keys (numbers, space, arrows, etc.)
// and for the background wandering animals.
const CREATURES = [
  ["🦁","Lion"],["🐯","Tiger"],["🐶","Dog"],["🐱","Cat"],["🐭","Mouse"],
  ["🐹","Hamster"],["🐰","Rabbit"],["🦊","Fox"],["🐻","Bear"],["🐼","Panda"],
  ["🐨","Koala"],["🐮","Cow"],["🐷","Pig"],["🐸","Frog"],["🐵","Monkey"],
  ["🦍","Gorilla"],["🐔","Chicken"],["🐓","Rooster"],["🐧","Penguin"],["🐦","Bird"],
  ["🐤","Chick"],["🦆","Duck"],["🦅","Eagle"],["🦉","Owl"],["🦇","Bat"],
  ["🐺","Wolf"],["🐴","Horse"],["🦄","Unicorn"],["🐝","Bee"],["🦋","Butterfly"],
  ["🐌","Snail"],["🐞","Ladybug"],["🐜","Ant"],["🐢","Turtle"],["🐍","Snake"],
  ["🦎","Lizard"],["🦖","Dinosaur"],["🦕","Dinosaur"],["🐙","Octopus"],["🦑","Squid"],
  ["🦀","Crab"],["🐡","Pufferfish"],["🐠","Tropical Fish"],["🐟","Fish"],
  ["🐬","Dolphin"],["🐳","Whale"],["🦈","Shark"],["🐊","Crocodile"],
  ["🦓","Zebra"],["🐘","Elephant"],["🦛","Hippo"],["🦏","Rhino"],["🐪","Camel"],
  ["🦒","Giraffe"],["🦘","Kangaroo"],["🐑","Sheep"],["🦙","Llama"],["🐐","Goat"],
  ["🦌","Deer"],["🦃","Turkey"],["🦚","Peacock"],["🦜","Parrot"],["🦢","Swan"],
  ["🦩","Flamingo"],["🐿️","Squirrel"],["🦔","Hedgehog"],["🦦","Otter"],
  ["🦥","Sloth"],["🐲","Dragon"],
];

// Bright, cheerful background gradients, each paired with a matching accent color.
const BACKGROUNDS = [
  { bg: "linear-gradient(135deg, #ffd1dc, #c1f0ff)", accent: "#ff6f91" },
  { bg: "linear-gradient(135deg, #fff6b7, #f6416c)", accent: "#f6416c" },
  { bg: "linear-gradient(135deg, #a8edea, #fed6e3)", accent: "#00b8a9" },
  { bg: "linear-gradient(135deg, #d4fc79, #96e6a1)", accent: "#2bb673" },
  { bg: "linear-gradient(135deg, #fbc2eb, #a6c1ee)", accent: "#8e44ad" },
  { bg: "linear-gradient(135deg, #fddb92, #d1fdff)", accent: "#f7b733" },
  { bg: "linear-gradient(135deg, #ff9a9e, #fad0c4)", accent: "#ff6f61" },
  { bg: "linear-gradient(135deg, #84fab0, #8fd3f4)", accent: "#1ca9c9" },
  { bg: "linear-gradient(135deg, #ffe0f7, #d9b8ff)", accent: "#b15cff" },
  { bg: "linear-gradient(135deg, #f6d365, #fda085)", accent: "#f4623a" },
];

const CONFETTI_POOL = ["🎉","🌟","✨","🎈","🍀","🦋","🌈","💖"];

// Real recorded animal sounds (see sounds/CREDITS.md for licenses).
const SOUND_FILES = {
  "🦁":"sounds/lion-roar.mp3",
  "🐯":"sounds/lion-roar.mp3",
  "🐆":"sounds/lion-roar.mp3",
  "🦖":"sounds/lion-roar.mp3",
  "🦕":"sounds/lion-roar.mp3",
  "🐲":"sounds/lion-roar.mp3",
  "🐶":"sounds/dog-bark.mp3",
  "🐱":"sounds/cat-meow.mp3",
  "🐘":"sounds/elephant-trumpet.mp3",
  "🦉":"sounds/bird-chirp.mp3",
  "🦜":"sounds/bird-chirp.mp3",
  "🐤":"sounds/bird-chirp.mp3",
  "🐦":"sounds/bird-chirp.mp3",
  "🦅":"sounds/bird-chirp.mp3",
  "🐔":"sounds/chicken-cluck.mp3",
  "🐓":"sounds/chicken-cluck.mp3",
  "🦃":"sounds/chicken-cluck.mp3",
  "🦓":"sounds/horse-trot.mp3",
  "🦄":"sounds/horse-trot.mp3",
  "🐴":"sounds/horse-trot.mp3",
  "🐮":"sounds/cow-moo.mp3",
  "🐄":"sounds/cow-moo.mp3",
  "🐃":"sounds/cow-moo.mp3",
  "🐂":"sounds/cow-moo.mp3",
  "🐷":"sounds/pig-oink.mp3",
  "🐗":"sounds/pig-oink.mp3",
  "🦛":"sounds/pig-oink.mp3",
  "🐑":"sounds/sheep-baa.mp3",
  "🐐":"sounds/sheep-baa.mp3",
  "🦙":"sounds/sheep-baa.mp3",
};

// Speech fallback for creatures without a real recording.
const ANIMAL_SOUNDS = {
  "🐜":"Crawl crawl!",
  "🐛":"Munch munch!",
  "🐌":"Slurp!",
  "🐞":"Fly fly!",
  "🐝":"Buzz buzz!",
  "🦗":"Chirp chirp!",
  "🐵":"Ooh ooh ah ah!",
  "🦍":"Ooh ooh ah ah!",
  "🐻":"Grrrowl!",
  "🐼":"Munch munch!",
  "🐨":"Munch munch!",
  "🐰":"Hop hop!",
  "🦊":"Ring-ding-ding!",
  "🐭":"Squeak!",
  "🐹":"Squeak squeak!",
  "🐀":"Squeak!",
  "🐸":"Ribbit!",
  "🐺":"Awooo!",
  "🦔":"Squeak!",
  "🦦":"Eee eee!",
  "🦇":"Eee eee!",
  "🦅":"Screech!",
  "🦩":"Honk!",
  "🦢":"Honk honk!",
  "🦚":"Screech!",
  "🐧":"Honk honk!",
  "🦆":"Quack quack!",
  "🐊":"Snap snap!",
  "🦎":"Hiss!",
  "🐍":"Hiss!",
  "🦏":"Snort!",
  "🐗":"Snort!",
  "🐪":"Grunt!",
  "🦒":"Munch munch!",
  "🦘":"Boing boing!",
  "🫎":"Grunt!",
  "🦌":"Hmm!",
  "🐿️":"Chirr chirr!",
  "🦥":"Zzzzz!",
  "🐙":"Blub blub!",
  "🦑":"Blub blub!",
  "🦐":"Snap!",
  "🦞":"Click click!",
  "🦀":"Click click!",
  "🐡":"Puff!",
  "🐠":"Blub blub!",
  "🐟":"Blub blub!",
  "🐬":"Eee eee!",
  "🐳":"Whoooosh!",
  "🦈":"Chomp chomp!",
  "🪼":"Wibble wobble!",
  "🪱":"Wiggle wiggle!",
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
  if (!sound || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(sound);
  utterance.rate = 0.9;
  utterance.pitch = 1.3;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function playAnimalSound(emoji) {
  const file = SOUND_FILES[emoji];
  if (!file) {
    speakAnimalSound(emoji);
    return;
  }
  if (currentAnimalAudio) currentAnimalAudio.pause();
  currentAnimalAudio = new Audio(file);
  currentAnimalAudio.play().catch(() => {});
}

function randomBackground() {
  const { bg, accent } = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];
  document.body.style.background = bg;
  document.body.style.setProperty("--accent", accent);
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
  const size = 8 + Math.random() * 6;

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
  const [emoji] = CREATURES[Math.floor(Math.random() * CREATURES.length)];
  spawnCritter(emoji);
  setTimeout(spawnAmbientCritter, 2500 + Math.random() * 4000);
}

function showItem(emoji, word) {
  emojiEl.textContent = emoji;
  wordEl.textContent = word;
  emojiEl.classList.remove("pop");
  wordEl.classList.remove("pop");
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
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  event.preventDefault();

  const key = event.key.toLowerCase();
  const entry = pickForKey(key)
    || CREATURES[Math.floor(Math.random() * CREATURES.length)];
  handleInteraction(entry[0], entry[1]);
});

// Tapping the screen picks a random creature (great for tablets).
document.addEventListener("pointerdown", () => {
  const [emoji, word] = CREATURES[Math.floor(Math.random() * CREATURES.length)];
  handleInteraction(emoji, word);
});

// Keep the screen lively with animals wandering by on their own.
spawnAmbientCritter();
