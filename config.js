/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Nala",
  photo: "./img/nalaku.JPG",       // Place your photo in the img/ folder
  music: "./music/hbd.mpeg",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#c8a2c8",           // Main accent color (rose pink)
    accent: "#a3b8cc",            // Secondary accent color (sky blue)
    dark: {
      background: "#0d0d12",      // Slate 900
      text: "#e0e0e0",            // Slate 100
    },
    light: {
      background: "#fbf9fc",      // Stone 50
      text: "#2a2135",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "I really love your name xD!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Happy Birthday, Sayaaang!! :D",
    },
    {
      type: "chatbox",
      message:
        "Happy birthday to youu, Sayang!! Wishing you a wonderful year ahead filled with joy, love, and endless happiness! Semoga di umur yang baru ini kamu selalu sehat, dan semua doa doa baiknya pelan pelan terkabul yaa 🤍",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "That's what I was going to do.",
        "But then I stopped.",
        "I realised, I wanted to do something <strong>special</strong>.",
        "Because,",
        "You are Special <span>:)</span>",
      ],
      bigLetters: "So",
    },
        {
      type: "quote",
      text: "I never felt this way about anyone. I wanna do something for her.",
      author: "Beauty and the Beast",
    },
    {
      type: "ideas",
      lines: [
        "First of all, I want to tell you how incredibly grateful I am...",
        "that you chose me to be your life partner.",
        "Thank you for bringing so much color into my life,",
        "and for making me happier than I have ever been.",
        "Because of you, I can finally picture something so beautiful...",
        "building our own little family together.",
        "In the letter you gave me for my birthday,",
        "you thanked me for choosing you in a world with no guarantees.",
        "You said I helped you heal from things I didn't break.",
        "But the truth is, you are my magic.",
        "You said there were never any walls between us from the start,",
        "and it's true, loving you has always felt like coming home.",
        "You also hoped to give me a real lilac flower.",
        "So today, I planted this digital one just for you.",
        "A flower that will never wilt, just like my love for you.",
        "We're only 10 days away from our forever.",
        "Let's face all the surprises the world has waiting for us,",
        "always side by side.",
        "I cherish you more than I can ever say.",
        "I Love You"
        
      ],
      bigLetters: "So",
    },
    {
      type: "quote",
      text: "I look at you, and I’m home.",
      author: "Dory, Finding Nemo",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "Wishing you a wonderful year ahead filled with joy, love, and endless happiness!",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Okay, now for the final magic... please execute the lilac seed below.",
      replayText: "Or click here if you want to read it all over again.🤍",
    },
  ],
};
