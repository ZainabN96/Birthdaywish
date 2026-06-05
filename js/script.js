/* ===== OLD CODE (commented out) =====
function typeMultipleLines(lines, ids, callback) { ... }
function typeLine(htmlLine, callback) { ... }
function showLines() { ... } // first duplicate - removed
===== END OLD CODE ===== */


// ===== UPDATED CODE =====

function typeMultipleLines(lines, ids, callback) {
  let lineIndex = 0;
  let charIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      if (callback) callback();
      return;
    }
    const el = document.getElementById(ids[lineIndex]);
    el.innerHTML = "";
    charIndex = 0;

    function typeChar() {
      if (charIndex < lines[lineIndex].length) {
        el.innerHTML += lines[lineIndex].charAt(charIndex++);
        setTimeout(typeChar, 50);
      } else {
        lineIndex++;
        setTimeout(typeLine, 300);
      }
    }
    typeChar();
  }

  typeLine();
}

function createStars() {
  const container = document.getElementById('stars-bg');
  for (let i = 0; i < 180; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top  = Math.random() * 100 + 'vh';
    const size = Math.random() * 2.5 + 0.5;
    star.style.width  = size + 'px';
    star.style.height = size + 'px';
    const dur = (Math.random() * 2.5 + 1).toFixed(2) + 's';
    star.style.setProperty('--dur', dur);
    star.style.animationDelay = (Math.random() * 3).toFixed(2) + 's';
    container.appendChild(star);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  createStars();

  const introLines = [
    'Hi Zeeshan!',
    'I want to share something...'
  ];
  const introIDs = ['introHeading', 'introPara'];

  typeMultipleLines(introLines, introIDs, () => {
    document.getElementById("startBtn").style.display = "inline-block";
  });
});

const memories = [
  {
    top: "Hamari mulaqat ek FB group mein hui...",
    img: "img/me1.jpg",
    bottom: "Wo choti choti comments... jin sy yeh dosti shuru hui thi..."
  },
  // {
  //   top: "Phr Messenger ka group, jahn tum, main or meri 2 dostien thin...",
  //   img: "img/memory2.jpeg",
  //   bottom: "Gap shap, hansi mazaak, sab yaadgar ban gaya..."
  // },
  {
    top: "Messenger Chat...",
    img: "img/memory3.jpg",
    bottom: "Jo k ek zindgi ka hissa ban gii, Bt krty krty pta hii nai chla k simple dosti .... Kab mery bestie ban gye.... 🤍"
  },
  {
    top: "2020 Ramzan",
    img: "img/ludo.jpg",
    bottom: "Roz roz baatein krna masti krna... Choti moti nokh jhok..."
  },
  {
    top: "Mera Boniyan",
    img: "img/story.jpg",
    bottom: "Meri fazool si baatein bhi... Tm itni interest k sath sunni... 🤍"
  },
  {
    top: "Our Nick Names",
    img: "img/names.jpg",
    bottom: "Hm ny ek dosry ko kitny nickname diye, Uncle Aunty, Jin Churail, Bhensa Bhens etc"
  },
  {
    top: "Har mushkil waqt mei tum saath thy...",
    img: "img/support.jpg",
    bottom: "Mood swings, mera bewaja ka gussa krna, hmari laraiyan.... Tm hmsha sth rahy...."
  },
  {
    top: "You become so special...",
    img: "img/zeenab_2.jpg",
    bottom: "Achy bury dono waqt mein sath raha...."
  },
  {
    top: "Thank You",
    img: "img/Us.png",
    bottom: "Itna saath dyny k liye thnk you... Mjy bardash krny k liye... Meri Chawaliyan sunny k liye..."
  }
];

let currentIndex = 0;

function typeWriterEffect(elementId, text, callback) {
  let i = 0;
  const speed = 40;
  const element = document.getElementById(elementId);
  element.textContent = "";
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i++);
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }
  type();
}

function showMemory(index) {
  const mem = memories[index];
  const img = document.getElementById("memoryImage");
  const topEl = document.getElementById("topTypewriter");
  const bottomEl = document.getElementById("bottomTypewriter");
  const nextBtn = document.getElementById("nextBtn");
  const progressEl = document.getElementById("memoryProgress");

  // Update progress counter
  progressEl.textContent = `Memory ${index + 1} of ${memories.length}`;

  const isLast = index === memories.length - 1;
  img.style.opacity = 0;
  img.style.objectFit    = isLast ? 'contain' : 'cover';
  img.style.width        = isLast ? '150px' : '';
  img.style.border       = '';
  img.style.boxShadow    = '';
  img.style.borderRadius = isLast ? '25px' : '';
  bottomEl.textContent = "";
  nextBtn.style.display = "none";

  typeWriterEffect("topTypewriter", mem.top, () => {
    setTimeout(() => {
      img.src = mem.img;
      img.style.transition = "opacity 1s";
      img.style.opacity = 1;

      setTimeout(() => {
        typeWriterEffect("bottomTypewriter", mem.bottom, () => {
          setTimeout(() => {
            nextBtn.style.display = "inline-block";
          }, 400);
        });
      }, 1000);
    }, 500);
  });

  const memorySection = document.getElementById("memoriesSection");
  memorySection.classList.remove("slide-in");
  void memorySection.offsetWidth;
  memorySection.classList.add("slide-in");
}

function showMemories() {
  document.getElementById("introBox").classList.add("hidden");
  const memory = document.getElementById("memoriesSection");
  memory.classList.remove("hidden");
  memory.classList.add("fade-in", "slide-in");
  showMemory(currentIndex);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < memories.length) {
    showMemory(currentIndex);
  } else {
    document.getElementById("memoriesSection").classList.add("hidden");
    const mapSection = document.getElementById("mapSection");
    mapSection.classList.remove("hidden");
    mapSection.classList.add("fade-in");
    showMapAnimation();
  }
});

const messageLines = [
  "You are not just my friend... you're my blessing... ✨",
  "Dur ho... lekin dil ky sab sy kareeb ho...",
  "Hmasha muskuraty raho, har din nayi umeedon sy bhara ho...",
  "Duniya ki har khushi tumhary kadmon mein ho...",
  "Kamyabi tumhari pehchaan ban jaye...",
  "Har manzil tumhary liye asaan ho, har raasta roshan ho...",
  "Allah taala tumhein har gham, har takleef sy mehfooz rakhay...",
  "Tmhy kabhi koi gham chhoo na saky, koi garam hawa bhi na lagy...",
  "Tumhara har din barkat bhara ho, or har raat sukoon wali ho...",
  "Rizq mein izafa ho, sehat mein barkat ho, or har mushkil asaan ho...",
  "Tumhein duniya ki har ni'mat naseeb ho, or akhirat mein bhi kamiyabi mily...",
  "Ameen SumAmeen... 🤲",
  "Happy Birthday! 🎂"
];

function showLines() {
  const msgEl = document.getElementById("birthdayMessage");
  let i = 0;

  function typeNextLine() {
    if (i >= messageLines.length) return;

    const line = messageLines[i];
    const p = document.createElement("p");
    p.className = "typewriter";
    msgEl.appendChild(p);
    p.scrollIntoView({ behavior: 'smooth' });

    let j = 0;
    function typeChar() {
      if (j < line.length) {
        p.innerHTML += line.charAt(j++);
        setTimeout(typeChar, 40);
      } else {
        i++;
        setTimeout(typeNextLine, 800);
      }
    }
    typeChar();
  }

  typeNextLine();
}

// Lahore to Islamabad map animation
function showMapAnimation() {
  const routeLahore    = document.getElementById('routeLineLahore');
  const routeIslamabad = document.getElementById('routeLineIslamabad');
  const sparkle        = document.getElementById('centerSparkle');

  // Each path has its own length — draw each fully from its city to the center valley
  const lenL = routeLahore.getTotalLength();
  const lenI = routeIslamabad.getTotalLength();

  routeLahore.style.strokeDasharray    = lenL;
  routeLahore.style.strokeDashoffset   = lenL;
  routeIslamabad.style.strokeDasharray  = lenI;
  routeIslamabad.style.strokeDashoffset = lenI;

  void routeLahore.getBoundingClientRect();

  // Animate both lobes simultaneously — they draw from each city and meet at center
  setTimeout(() => {
    routeLahore.style.transition    = 'stroke-dashoffset 2.2s ease-in-out';
    routeIslamabad.style.transition = 'stroke-dashoffset 2.2s ease-in-out';
    routeLahore.style.strokeDashoffset    = 0;
    routeIslamabad.style.strokeDashoffset = 0;
  }, 200);

  // Type subtitle
  typeWriterEffect("mapSubtitle", "Sometimes distance doesn’t matter...", () => {});

  // Show sparkle when lines meet at center
  setTimeout(() => {
    sparkle.setAttribute('opacity', '1');
    sparkle.style.cssText += 'transition: opacity 0.4s ease;';
  }, 2500);

  // Show message then go to cake section
  setTimeout(() => {
    typeWriterEffect("mapMessage", "Miles apart, but still my person! 💛", () => {
      setTimeout(() => {
        document.getElementById("mapSection").classList.add("hidden");
        showCakeSection();
      }, 2000);
    });
  }, 4000);
}

// Cake section with 29 candles
function showCakeSection() {
  const cakeSection = document.getElementById("cakeSection");
  cakeSection.classList.remove("hidden");
  cakeSection.classList.add("fade-in");

  typeWriterEffect("cakeTitle", "Make a wish, Zeeshan! 🎂", () => {});

  const group = document.getElementById("candlesGroup");
  group.innerHTML = "";
  const colors = ['#fbbf24', '#f87171', '#a78bfa', '#6ee7b7', '#93c5fd'];
  const startX = 136;
  const spacing = 10;

  for (let i = 0; i < 29; i++) {
    const cx = startX + i * spacing;
    const color = colors[i % colors.length];

    const body = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    body.setAttribute("x", cx - 2.5);
    body.setAttribute("y", "67");
    body.setAttribute("width", "5");
    body.setAttribute("height", "30");
    body.setAttribute("rx", "1.5");
    body.setAttribute("fill", color);
    group.appendChild(body);

    const flame = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    flame.setAttribute("cx", cx);
    flame.setAttribute("cy", "60");
    flame.setAttribute("rx", "3.5");
    flame.setAttribute("ry", "7");
    flame.setAttribute("fill", "#ff8c00");
    flame.setAttribute("id", `flame-${i}`);
    flame.setAttribute("class", "flame");
    group.appendChild(flame);

    const inner = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    inner.setAttribute("cx", cx);
    inner.setAttribute("cy", "62");
    inner.setAttribute("rx", "1.8");
    inner.setAttribute("ry", "3.5");
    inner.setAttribute("fill", "#fff176");
    inner.setAttribute("id", `innerflame-${i}`);
    group.appendChild(inner);
  }

  document.getElementById("blowBtn").onclick = blowCandles;
}

function triggerWindEffect() {
  const overlay = document.getElementById('windOverlay');
  overlay.innerHTML = '';

  const canvas = document.createElement('canvas');
  const wrap   = overlay.parentElement;
  canvas.width  = wrap.offsetWidth  || 420;
  canvas.height = wrap.offsetHeight || 300;
  canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
  overlay.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const particles = [];
  for (let i = 0; i < 55; i++) {
    particles.push({
      x:     -10 - Math.random() * 30,
      y:     canvas.height * (0.08 + Math.random() * 0.72),
      r:     4 + Math.random() * 9,
      vx:    7 + Math.random() * 7,
      vy:    (Math.random() - 0.5) * 1.5,
      alpha: 0.5 + Math.random() * 0.35,
      delay: i * 18
    });
  }

  let start = null;
  function draw(ts) {
    if (!start) start = ts;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    for (const p of particles) {
      if (ts - start < p.delay) { alive = true; continue; }
      if (p.x > canvas.width + 60) continue;
      alive = true;
      p.x    += p.vx;
      p.y    += p.vy;
      p.alpha -= 0.005;
      if (p.alpha <= 0) continue;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.2);
      g.addColorStop(0,   `rgba(180,215,255,${p.alpha})`);
      g.addColorStop(0.5, `rgba(255,255,255,${p.alpha * 0.3})`);
      g.addColorStop(1,   'rgba(255,255,255,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
    if (alive) requestAnimationFrame(draw);
    else overlay.innerHTML = '';
  }
  requestAnimationFrame(draw);
}

function addSmoke(svgEl, cx, baseY) {
  for (let s = 0; s < 3; s++) {
    setTimeout(() => {
      let cy    = baseY;
      let r     = 2 + Math.random() * 2;
      let alpha = 0.55 + Math.random() * 0.2;
      let curCx = cx + (Math.random() - 0.5) * 4;
      const drift = (Math.random() - 0.5) * 0.35;

      const smoke = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
      smoke.setAttribute("cx", curCx);
      smoke.setAttribute("cy", cy);
      smoke.setAttribute("rx", r);
      smoke.setAttribute("ry", r * 0.75);
      smoke.setAttribute("fill", `rgba(210,215,232,${alpha.toFixed(3)})`);
      svgEl.appendChild(smoke);

      function rise() {
        cy    -= 1.3;
        r     += 0.18;
        alpha -= 0.022;
        curCx += drift;
        if (alpha <= 0) { smoke.remove(); return; }
        smoke.setAttribute("cy",   cy);
        smoke.setAttribute("cx",   curCx);
        smoke.setAttribute("rx",   r);
        smoke.setAttribute("ry",   r * 0.75);
        smoke.setAttribute("fill", `rgba(210,215,232,${alpha.toFixed(3)})`);
        requestAnimationFrame(rise);
      }
      requestAnimationFrame(rise);
    }, s * 160);
  }
}

function blowCandles() {
  const btn   = document.getElementById("blowBtn");
  btn.disabled = true;
  btn.textContent = "💨 Blowing...";

  triggerWindEffect();
  setTimeout(triggerWindEffect, 900);

  const svgEl = document.getElementById("cakeSvg");

  for (let i = 0; i < 29; i++) {
    setTimeout(() => {
      const f  = document.getElementById(`flame-${i}`);
      const fi = document.getElementById(`innerflame-${i}`);
      if (f)  { f.style.animation = "none"; f.style.transition = "opacity 0.2s"; f.style.opacity = "0"; }
      if (fi) { fi.style.transition = "opacity 0.2s"; fi.style.opacity = "0"; }

      addSmoke(svgEl, 136 + i * 10, 55);

      if (i === 28) {
        setTimeout(() => {
          document.getElementById("cakeSection").classList.add("hidden");
          const wish = document.getElementById("wishBox");
          wish.classList.remove("hidden");
          wish.classList.add("fade-in");
          launchConfetti();
          setTimeout(showLines, 1000);
        }, 1000);
      }
    }, i * 90);
  }
}

// Confetti effect for birthday wish screen
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width  = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;

  const colors = ['#fbbf24', '#a855f7', '#ffffff', '#f59e0b', '#c084fc', '#e879f9', '#818cf8'];
  const pieces = [];

  for (let i = 0; i < 220; i++) {
    pieces.push({
      x:       Math.random() * canvas.width,
      y:       Math.random() * -80 - 10,   // start just above screen — visible immediately
      w:       Math.random() * 12 + 6,
      h:       Math.random() * 7 + 4,
      color:   colors[Math.floor(Math.random() * colors.length)],
      speed:   Math.random() * 4 + 2,
      angle:   Math.random() * 360,
      spin:    Math.random() * 8 - 4,
      opacity: 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let anyVisible = false;

    pieces.forEach(p => {
      if (p.y < canvas.height + 20) {
        anyVisible = true;
        p.y     += p.speed;
        p.angle += p.spin;
        // only start fading in bottom 30% of screen
        if (p.y > canvas.height * 0.7) p.opacity -= 0.012;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (anyVisible) requestAnimationFrame(draw);
  }

  draw();
}
