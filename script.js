const APP_CONFIG = {
  accessPassword: "1904",
  coupleNames: "[Senin Ismin] + Duygu",
  heroMessage: "Birlikte gecen bir yil, omrumun en guzel hikayesine donustu.",
  playlistUrl: "https://open.spotify.com/",
  unlockDate: "2026-04-19T00:00:00",
  signatureName: "[Senin Ismin]",
  letterText:
    "Bugun bizim 1. yildonumumuz. Seninle gecen her gun, hayata daha cok gulumsememe sebep oldu. Her kahkahamiz, her sarilmamiz ve her sessiz animiz icin tesekkur ederim. Iyi ki kalbime dokundun, iyi ki benimlesin.",
};

const TIMELINE_ITEMS = [
  {
    date: "19 Nisan 2025",
    title: "Hikayemizin Ilk Sayfasi",
    text: "Her sey bugun basladi. Zamanin yavasladigi, kalbimin hizlandigi gun.",
    image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?auto=format&fit=crop&w=1000&q=80",
  },
  {
    date: "Yaz 2025",
    title: "En Guzel Kahkaha",
    text: "Bir fotograftan daha fazlasi: o anin sicakligi, heyecani ve mutlulugu.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
  },
  {
    date: "Kis 2025",
    title: "Yanimda Olman",
    text: "Nerede oldugumuzdan bagimsiz, yanimda olman hep en guzel his.",
    image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=80",
  },
];

const ACCESS_STORAGE_KEY = "duygu_ani_unlocked";

function initializeAccessGate() {
  const gate = document.getElementById("accessGate");
  const form = document.getElementById("accessForm");
  const input = document.getElementById("accessInput");
  const error = document.getElementById("accessError");

  const isUnlocked = sessionStorage.getItem(ACCESS_STORAGE_KEY) === "1";
  if (isUnlocked) {
    gate.classList.add("hidden");
    gate.setAttribute("aria-hidden", "true");
    return;
  }

  document.body.classList.add("locked");
  input.focus();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (value === APP_CONFIG.accessPassword) {
      sessionStorage.setItem(ACCESS_STORAGE_KEY, "1");
      gate.classList.add("hidden");
      gate.setAttribute("aria-hidden", "true");
      document.body.classList.remove("locked");
      return;
    }

    error.classList.remove("hidden");
    input.select();
  });
}

const GALLERY_ITEMS = [
  {
    caption: "Gulusune hayran oldugum an",
    image: "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1200&q=80",
    large: true,
  },
  {
    caption: "Birlikte cok guzeldik",
    image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    caption: "Kucuk bir an, buyuk bir mutluluk",
    image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1200&q=80",
  },
  {
    caption: "Sonsuza uzanan bakis",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    large: true,
  },
];

function setStaticContent() {
  document.getElementById("coupleNames").textContent = APP_CONFIG.coupleNames;
  document.getElementById("heroMessage").textContent = APP_CONFIG.heroMessage;
  document.getElementById("playlistLink").href = APP_CONFIG.playlistUrl;
  document.getElementById("signatureName").textContent = APP_CONFIG.signatureName;
  document.getElementById("letterText").textContent = APP_CONFIG.letterText;
}

function renderTimeline() {
  const root = document.getElementById("timelineList");
  root.innerHTML = TIMELINE_ITEMS.map(
    (item) => `
      <article class="timeline-item reveal">
        <div class="timeline-body">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div class="timeline-content">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <span class="date-chip">${item.date}</span>
          </div>
        </div>
      </article>
    `
  ).join("");
}

function renderGallery() {
  const root = document.getElementById("galleryGrid");
  root.innerHTML = GALLERY_ITEMS.map(
    (item) => `
      <figure class="gallery-item ${item.large ? "large" : ""}" tabindex="0" data-image="${item.image}" data-caption="${item.caption}">
        <img src="${item.image}" alt="${item.caption}" loading="lazy" />
        <figcaption>${item.caption}</figcaption>
      </figure>
    `
  ).join("");
}

function initializeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeButton = document.getElementById("lightboxClose");

  function closeLightbox() {
    lightbox.classList.add("hidden");
    lightbox.setAttribute("aria-hidden", "true");
  }

  document.getElementById("galleryGrid").addEventListener("click", (event) => {
    const card = event.target.closest(".gallery-item");
    if (!card) {
      return;
    }

    lightboxImage.src = card.dataset.image;
    lightboxCaption.textContent = card.dataset.caption;
    lightbox.classList.remove("hidden");
    lightbox.setAttribute("aria-hidden", "false");
  });

  document.getElementById("galleryGrid").addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }

    const card = event.target.closest(".gallery-item");
    if (!card) {
      return;
    }

    lightboxImage.src = card.dataset.image;
    lightboxCaption.textContent = card.dataset.caption;
    lightbox.classList.remove("hidden");
    lightbox.setAttribute("aria-hidden", "false");
  });

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

function startCountdown() {
  const countdownEl = document.getElementById("countdown");
  const lockEl = document.getElementById("letterLock");
  const letterEl = document.getElementById("letterContent");
  const unlockAt = new Date(APP_CONFIG.unlockDate);

  function update() {
    const now = new Date();
    const diff = unlockAt.getTime() - now.getTime();

    if (diff <= 0) {
      lockEl.classList.add("hidden");
      letterEl.classList.remove("hidden");
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countdownEl.textContent = `${days} gun ${hours} saat ${minutes} dk ${seconds} sn`;
  }

  update();
  setInterval(update, 1000);
}

function activateReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.13 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function bootstrap() {
  initializeAccessGate();
  setStaticContent();
  renderTimeline();
  renderGallery();
  initializeLightbox();
  startCountdown();
  activateReveal();
}

bootstrap();
