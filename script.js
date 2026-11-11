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

  document.querySelectorAll("[data-t]").forEach((el) => {
    el.textContent = t(INVITE.ui[el.dataset.t]);
  });

  $("groom").textContent = t(INVITE.groom);
  $("bride").textContent = t(INVITE.bride);
  $("dateText").textContent = t(INVITE.dateText);
  $("fbGroom").textContent = t(INVITE.groom);
  $("fbBride").textContent = t(INVITE.bride);
  $("fbDate").textContent = t(INVITE.dateText);

  // Formal letter
  $("letter").innerHTML = INVITE.letter.map((b) =>
    `<p class="lt lt-${b.type} reveal">${t(b.text)}</p>`).join("");

  // Schedule
  $("events").innerHTML = INVITE.events.map((e) => {
    const v = e.venue ? INVITE.venues[e.venue] : null;
    let venueHtml = "";
    if (v) {
      const q = encodeURIComponent(`${t(v.name)} ${t(v.address)}`);
      const link = v.mapLink || `https://www.google.com/maps/search/?api=1&query=${q}`;
      venueHtml = `
        <p><b>${t(v.name)}</b></p>
        <p>${t(v.address)}</p>
        <a href="${link}" target="_blank" rel="noopener">${t(INVITE.ui.directions)}</a>`;
    }
    return `
      <div class="card reveal">
        <h3>${t(e.title)}</h3>
        <p class="when">${t(e.date)}</p>
        ${e.time ? `<p class="when">${t(e.time)}</p>` : ""}
        ${e.note ? `<p>${t(e.note)}</p>` : ""}
        ${venueHtml}
      </div>`;
  }).join("");

  // Well-wishers
  $("wishers").innerHTML = INVITE.wishers.map((w) =>
    `<p class="reveal">${t(w)}</p>`).join("");

  // Thank you + contact
  $("tyTitle").textContent = t(INVITE.thankYou.title);
  $("tyText").textContent = t(INVITE.thankYou.text);

  const c = INVITE.contact;
  $("contactWrap").style.display = c.show ? "" : "none";
  if (c.show) {
    $("cTitle").textContent = t(c.title);
    $("cNames").textContent = t(c.names);
    $("cAddr").textContent = t(c.address);
    $("phones").innerHTML = c.phones.map((n) =>
      `<a href="tel:+91${n}">📞 ${n}</a>`).join("");
  }

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
  el.innerHTML = Array.from({ length: 18 }, (_, i) =>
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
  setTimeout(() => { $("cover").style.display = "none"; }, 2600);
});

// ---------- Flip card: flips by itself when scrolled into view ----------
const flip = $("flipCard");
flip.addEventListener("click", () => flip.classList.toggle("flipped"));
new IntersectionObserver((entries, ob) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      setTimeout(() => flip.classList.add("flipped"), 600);
      ob.disconnect();
    }
  });
}, { threshold: 0.7 }).observe(flip);

// ---------- Contact: tap to show phone numbers ----------
$("cBtn").addEventListener("click", () => $("phones").classList.toggle("open"));

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

// ---------- Flower garlands ----------
const flowerPattern = ["orange", "yellow", "orange", "rose", "yellow", "orange"];

// Side garlands (sway in the breeze)
document.querySelectorAll(".garland").forEach((g, gi) => {
  let parent = g;
  for (let s = 0; s < 3; s++) {
    const seg = document.createElement("div");
    seg.className = "seg";
    seg.style.setProperty("--d", `${-(s * 0.4) - gi * 0.9}s`);
    for (let i = 0; i < 3; i++) {
      const f = document.createElement("i");
      f.className = "fl " + flowerPattern[(s * 3 + i + gi) % flowerPattern.length];
      seg.appendChild(f);
    }
    parent.appendChild(seg);
    parent = seg;
  }
  const tassel = document.createElement("b");
  tassel.className = "tassel";
  parent.appendChild(tassel);
});

// Bottom garland (drooping arc across the width)
(function () {
  const gb = $("gBottom");
  const N = 13;
  for (let i = 0; i < N; i++) {
    const f = document.createElement("i");
    f.className = "fl " + flowerPattern[i % flowerPattern.length];
    f.style.left = (i / (N - 1)) * 100 + "%";
    f.style.top = Math.sin((Math.PI * i) / (N - 1)) * 36 + "px";
    f.style.setProperty("--d", `${-i * 0.35}s`);
    gb.appendChild(f);
  }
})();

// ---------- Start ----------
render();
