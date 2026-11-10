const $ = (id) => document.getElementById(id);

// ---------- Language ----------
let lang = "kn"; // Kannada by default
try {
  const saved = localStorage.getItem("inviteLang");
  if (saved === "kn" || saved === "en") lang = saved;
} catch (e) {}

const t = (v) => (v && typeof v === "object") ? (v[lang] ?? v.en ?? "") : (v ?? "");

// ---------- Scroll reveal ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) en.target.classList.add("show"); });
}, { threshold: 0.15 });
const watchReveals = () =>
  document.querySelectorAll(".reveal:not(.show)").forEach((el) => io.observe(el));

// ---------- Render all text ----------
function render() {
  document.documentElement.lang = lang;
  document.title = `${t(INVITE.groom)} ${t(INVITE.ui.weds)} ${t(INVITE.bride)}`;

  document.querySelectorAll("[data-t]").forEach((el) => {
    el.textContent = t(INVITE.ui[el.dataset.t]);
  });

  $("groom").textContent = t(INVITE.groom);
  $("bride").textContent = t(INVITE.bride);
  $("dateText").textContent = new Date(INVITE.weddingDate).toLocaleDateString(
    lang === "kn" ? "kn-IN" : "en-IN",
    { day: "numeric", month: "long", year: "numeric" }
  );
  $("noteTitle").textContent = t(INVITE.note.title);
  $("noteText").textContent = t(INVITE.note.text);
  $("tyTitle").textContent = t(INVITE.thankYou.title);
  $("tyText").textContent = t(INVITE.thankYou.text);
  $("tySign").textContent = t(INVITE.thankYou.signoff);

  $("families").innerHTML = INVITE.families.map((f) => `
    <div class="card reveal">
      <h3>${t(f.label)}</h3>
      <p>${t(f.names)}</p>
      <p>${t(f.place)}</p>
    </div>`).join("");

  $("events").innerHTML = INVITE.events.map((e) => `
    <div class="card reveal">
      <h3>${t(e.title)}</h3>
      <p class="when">${t(e.date)} · ${t(e.time)}</p>
      <p><b>${t(e.venue)}</b></p>
      <p>${t(e.address)}</p>
      <a href="${e.mapLink}" target="_blank" rel="noopener">${t(INVITE.ui.directions)}</a>
    </div>`).join("");

  document.querySelectorAll(".lang-switch button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang));

  watchReveals();
}

document.querySelectorAll(".lang-switch button").forEach((b) =>
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("inviteLang", lang); } catch (e) {}
    render();
  }));

// ---------- Images (with simple fallback if file is missing) ----------
document.querySelectorAll("img[data-img]").forEach((img) => {
  img.src = INVITE.images[img.dataset.img];
  img.addEventListener("error", () => {
    const s = document.createElement("span");
    s.className = "img-fallback";
    s.textContent = img.dataset.img === "ganesha" ? "ॐ" : "🪷";
    img.replaceWith(s);
  });
});

// ---------- Toran (mango leaves + marigold beads) ----------
document.querySelectorAll(".toran").forEach((el) => {
  el.innerHTML = Array.from({ length: 15 }, (_, i) =>
    i % 3 === 1
      ? `<b class="bead" style="--d:${(i * 0.2).toFixed(1)}s"></b>`
      : `<i class="leaf" style="--d:${(i * 0.2).toFixed(1)}s"></i>`
  ).join("");
});

// ---------- Falling marigold petals ----------
function startPetals() {
  const box = $("petals");
  if (box.children.length) return;
  for (let i = 0; i < 14; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.left = Math.random() * 100 + "%";
    p.style.setProperty("--s", 10 + Math.random() * 10 + "px");
    p.style.setProperty("--t", 9 + Math.random() * 8 + "s");
    p.style.setProperty("--dl", -Math.random() * 12 + "s");
    box.appendChild(p);
  }
}

// ---------- Open invitation ----------
$("openBtn").addEventListener("click", () => {
  $("cover").classList.add("open");
  $("invite").classList.remove("hidden");
  document.body.classList.remove("locked");
  startPetals();
  setTimeout(() => { $("cover").style.display = "none"; }, 1900);
});

// ---------- Flip card ----------
$("flipCard").addEventListener("click", () => $("flipCard").classList.toggle("flipped"));

// ---------- Countdown ----------
const target = new Date(INVITE.weddingDate).getTime();
function tick() {
  let diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 864e5); diff %= 864e5;
  const h = Math.floor(diff / 36e5);  diff %= 36e5;
  const m = Math.floor(diff / 6e4);   diff %= 6e4;
  const s = Math.floor(diff / 1e3);
  $("cd-d").textContent = d;
  $("cd-h").textContent = h;
  $("cd-m").textContent = m;
  $("cd-s").textContent = s;
}
tick();
setInterval(tick, 1000);

// ---------- Deity scroll effect ----------
// Fades in and grows -> holds -> shrinks, blurs and fades into the background
const deitySec = $("deityScroll");
const deityStage = $("deityStage");
const deitySticky = $("deitySticky");
let ticking = false;

function deityUpdate() {
  ticking = false;
  const r = deitySec.getBoundingClientRect();
  const total = r.height - window.innerHeight;
  if (total <= 0) return;
  const p = Math.min(1, Math.max(0, -r.top / total));

  let op, sc, bl, ty;
  if (p < 0.3) {                       // coming forward
    const k = p / 0.3;
    op = k; sc = 0.8 + 0.2 * k; bl = (1 - k) * 6; ty = (1 - k) * 40;
  } else if (p < 0.6) {                // hold
    op = 1; sc = 1; bl = 0; ty = 0;
  } else {                             // going to background and vanishing
    const k = (p - 0.6) / 0.4;
    op = 1 - k; sc = 1 - 0.4 * k; bl = 8 * k; ty = -50 * k;
  }
  deityStage.style.opacity = op;
  deityStage.style.transform = `translateY(${ty}px) scale(${sc})`;
  deityStage.style.filter = `blur(${bl}px)`;
  deitySticky.style.setProperty("--o", op);
}
window.addEventListener("scroll", () => {
  if (!ticking) { ticking = true; requestAnimationFrame(deityUpdate); }
}, { passive: true });
window.addEventListener("resize", deityUpdate);

// ---------- Start ----------
render();