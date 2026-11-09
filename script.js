// Fill text from config
const $ = (id) => document.getElementById(id);
$("groom").textContent = INVITE.groom;
$("bride").textContent = INVITE.bride;
$("tagline").textContent = INVITE.tagline;
$("noteTitle").textContent = INVITE.note.title;
$("noteText").textContent = INVITE.note.text;
$("tyTitle").textContent = INVITE.thankYou.title;
$("tyText").textContent = INVITE.thankYou.text;
$("tySign").textContent = INVITE.thankYou.signoff;
document.title = `${INVITE.groom} weds ${INVITE.bride}`;

// Families
$("families").innerHTML = INVITE.families.map(f => `
  <div class="card">
    <h3>${f.label}</h3>
    <p>${f.names}</p>
    <p>${f.place}</p>
  </div>`).join("");

// Events
$("events").innerHTML = INVITE.events.map(e => `
  <div class="card">
    <h3>${e.title}</h3>
    <p class="when">${e.date} · ${e.time}</p>
    <p><b>${e.venue}</b></p>
    <p>${e.address}</p>
    <a href="${e.mapLink}" target="_blank" rel="noopener">Get Directions</a>
  </div>`).join("");

// Curtain open
$("openBtn").addEventListener("click", () => {
  $("cover").classList.add("open");
  $("invite").classList.remove("hidden");
  setTimeout(() => { $("cover").style.display = "none"; observeReveals(); }, 1900);
});

// Flip card
$("flipCard").addEventListener("click", () => $("flipCard").classList.toggle("flipped"));

// Countdown
const target = new Date(INVITE.weddingDate).getTime();
function tick() {
  let diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 864e5); diff %= 864e5;
  const h = Math.floor(diff / 36e5); diff %= 36e5;
  const m = Math.floor(diff / 6e4); diff %= 6e4;
  const s = Math.floor(diff / 1e3);
  $("cd-d").textContent = d;
  $("cd-h").textContent = h;
  $("cd-m").textContent = m;
  $("cd-s").textContent = s;
}
tick(); setInterval(tick, 1000);

// Scroll reveal
function observeReveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) en.target.classList.add("show"); });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}
