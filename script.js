/* ── i18n translations ───────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    "nav-details": "Details",
    "nav-countdown": "Countdown",
    "nav-journey": "Journey",
    "nav-dresscode": "Dress Code",
    "nav-gifts": "Gifts",
    "nav-rsvp": "RSVP",
    "hero-eyebrow": "Join us for a magical celebration",
    "hero-copy": "A rose-lit evening of music, family, and unforgettable sparkle.",
    "hero-btn-rsvp": "RSVP Now",
    "hero-btn-details": "View Details",
    "hero-meta-date": "Saturday, June 20, 2026",
    "countdown-eyebrow": "The magical night begins in",
    "countdown-h2-span": "Counting Every",
    "countdown-h2-strong": "Sparkling Moment",
    "countdown-days": "Days",
    "countdown-hours": "Hours",
    "countdown-minutes": "Minutes",
    "countdown-seconds": "Seconds",
    "countdown-note": "Saturday, June 20, 2026 at 6:00 PM",
    "journey-eyebrow": "Michelle’s Journey",
    "journey-h2-span": "From Sweet Memories",
    "journey-h2-strong": "To Her Big Night",
    "journey-item1-h3": "The day my story began",
    "journey-item1-p": "First smiles, tiny dreams, and all the love that started this beautiful journey.",
    "journey-item2-h3": "Beautiful memories",
    "journey-item2-p": "Growing, glowing, and filling every chapter with laughter, family, and grace.",
    "journey-item3-h3": "The next chapter begins",
    "journey-item3-p": "A magical celebration for the young woman she has become and the dreams ahead.",
    "journey-ending": "And now… the next chapter begins with you.",
    "event-eyebrow": "Reception",
    "event-h2-span": "Event",
    "event-h2-strong": "Details",
    "event-location": "Gainesville, GA",
    "event-btn-map": "View Map",
    "dress-eyebrow": "Dress Code",
    "dress-h2-span": "Formal Attire",
    "dress-h2-strong": "Dress Code",
    "dress-gentlemen": "Gentlemen",
    "dress-suit": "Formal suit",
    "dress-ladies": "Ladies",
    "dress-gown": "Formal dress",
    "dress-reserved": "Reserved for Michelle",
    "dress-note-h2": "We look forward to celebrating in style with you!",
    "dress-note-p": "Kindly note: To help make our quinceañera stand out on her special day, we respectfully ask guests to avoid wearing pink and dusty rose shades, as these colors are reserved exclusively for Michelle.",
    "gifts-eyebrow": "With Love",
    "gifts-h2-span": "Wishing Well",
    "gifts-h2-strong": "Monetary Gifts",
    "gifts-message": "Your presence at our celebration is the greatest gift of all. However, if you wish to honor Michelle with a gift, a card box for monetary blessings will be available at the reception entrance.",
    "rsvp-eyebrow": "Kindly Reply",
    "rsvp-h2-span": "RSVP",
    "rsvp-h2-strong": "With Love",
    "rsvp-name": "Full Name",
    "rsvp-attend": "Will you attend?",
    "rsvp-yes": "Yes, I wouldn’t miss it!",
    "rsvp-no": "Sadly, I can’t make it.",
    "rsvp-guests": "Number of Guests",
    "rsvp-submit": "Confirm Attendance",
    "rsvp-error": "Please choose whether you will attend.",
    "footer-home": "Home",
    "footer-countdown": "Countdown",
    "footer-journey": "Journey",
    "footer-location": "Location",
    "footer-rsvp": "RSVP",
    "footer-love": "With love, the Rodriguez Osorio family",
  },
  es: {
    "nav-details": "Detalles",
    "nav-countdown": "Cuenta Regresiva",
    "nav-journey": "Historia",
    "nav-dresscode": "Vestimenta",
    "nav-gifts": "Regalos",
    "nav-rsvp": "RSVP",
    "hero-eyebrow": "Únete a nosotros para una celebración mágica",
    "hero-copy": "Una noche de música, familia y recuerdos inolvidables.",
    "hero-btn-rsvp": "Confirmar Asistencia",
    "hero-btn-details": "Ver Detalles",
    "hero-meta-date": "Sábado, 20 de junio de 2026",
    "countdown-eyebrow": "La noche mágica comienza en",
    "countdown-h2-span": "Contando Cada",
    "countdown-h2-strong": "Momento",
    "countdown-days": "Días",
    "countdown-hours": "Horas",
    "countdown-minutes": "Minutos",
    "countdown-seconds": "Segundos",
    "countdown-note": "Sábado, 20 de junio de 2026 a las 6:00 PM",
    "journey-eyebrow": "La Historia de Michelle",
    "journey-h2-span": "De Hermosos Recuerdos",
    "journey-h2-strong": "A Su Gran Noche",
    "journey-item1-h3": "El día en que comenzó mi historia",
    "journey-item1-p": "Primeras sonrisas, pequeños sueños y todo el amor que inició este hermoso camino.",
    "journey-item2-h3": "Hermosos recuerdos",
    "journey-item2-p": "Creciendo, brillando y llenando cada capítulo con risas, familia y gracia.",
    "journey-item3-h3": "El próximo capítulo comienza",
    "journey-item3-p": "Una celebración mágica para la joven en que se ha convertido y los sueños que le esperan.",
    "journey-ending": "Y ahora… el próximo capítulo comienza contigo.",
    "event-eyebrow": "Recepción",
    "event-h2-span": "Detalles",
    "event-h2-strong": "del Evento",
    "event-location": "Gainesville, GA",
    "event-btn-map": "Ver Mapa",
    "dress-eyebrow": "Vestimenta",
    "dress-h2-span": "Vestimenta",
    "dress-h2-strong": "Formal",
    "dress-gentlemen": "Caballeros",
    "dress-suit": "Traje formal",
    "dress-ladies": "Damas",
    "dress-gown": "Vestido formal",
    "dress-reserved": "Reservado para Michelle",
    "dress-note-h2": "¡Esperamos celebrar con estilo junto a ustedes!",
    "dress-note-p": "Por favor tenga en cuenta: para hacer que nuestra quinceañera brille en su día especial, pedimos respetuosamente a los invitados que eviten usar tonos rosados y palo de rosa, ya que estos colores están reservados exclusivamente para Michelle.",
    "gifts-eyebrow": "Con Amor",
    "gifts-h2-span": "Lluvia de",
    "gifts-h2-strong": "Sobres",
    "gifts-message": "Tu presencia en nuestra celebración es el mayor regalo de todos. Sin embargo, si deseas honrar a Michelle con un obsequio, una caja para lluvia de sobres estará disponible en la entrada de la recepción.",
    "rsvp-eyebrow": "Por favor Responda",
    "rsvp-h2-span": "RSVP",
    "rsvp-h2-strong": "Con Amor",
    "rsvp-name": "Nombre Completo",
    "rsvp-attend": "¿Asistirás?",
    "rsvp-yes": "¡Sí, no me lo pierdo!",
    "rsvp-no": "Lamentablemente, no podré asistir.",
    "rsvp-guests": "Número de Invitados",
    "rsvp-submit": "Confirmar Asistencia",
    "rsvp-error": "Por favor indica si podrás asistir.",
    "footer-home": "Inicio",
    "footer-countdown": "Cuenta Regresiva",
    "footer-journey": "Historia",
    "footer-location": "Ubicación",
    "footer-rsvp": "RSVP",
    "footer-love": "Con amor, la familia Rodríguez Osorio",
  },
};

let currentLang = "en";

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = TRANSLATIONS[lang][key];
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  document.querySelectorAll(".lang-nav-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.lang === lang);
  });

  localStorage.setItem("michelle-lang", lang);
}

/* ── Language nav buttons ────────────────────────────────── */
const savedLang = localStorage.getItem("michelle-lang");
applyLanguage(savedLang === "es" ? "es" : "en");

document.getElementById("lang-nav-en")?.addEventListener("click", () => applyLanguage("en"));
document.getElementById("lang-nav-es")?.addEventListener("click", () => applyLanguage("es"));

/* ── end i18n ────────────────────────────────────────────── */

const hero = document.querySelector(".hero");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const primaryNav = document.querySelector(".hero__nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const petalField = document.querySelector(".petal-field");

if (petalField) {
  if (prefersReducedMotion) {
    petalField.hidden = true;
  } else {
    const isCompactViewport = window.matchMedia("(max-width: 780px)").matches;
    const petalCount = isCompactViewport ? 18 : 30;
    const petals = document.createDocumentFragment();

    for (let index = 0; index < petalCount; index += 1) {
      const petal = document.createElement("span");
      const startX = Math.random() * 100;
      const size = 10 + Math.random() * (isCompactViewport ? 10 : 16);
      const duration = 12 + Math.random() * 12;
      const delay = -Math.random() * duration;
      const drift = (Math.random() - 0.5) * (isCompactViewport ? 90 : 170);
      const spin = (Math.random() > 0.5 ? 1 : -1) * (160 + Math.random() * 260);
      const tilt = (Math.random() - 0.5) * 70;
      const opacity = 0.3 + Math.random() * 0.42;
      const flutter = 2.8 + Math.random() * 2.8;

      petal.className = "petal";
      petal.style.setProperty("--x", `${startX.toFixed(2)}vw`);
      petal.style.setProperty("--size", `${size.toFixed(2)}px`);
      petal.style.setProperty("--duration", `${duration.toFixed(2)}s`);
      petal.style.setProperty("--delay", `${delay.toFixed(2)}s`);
      petal.style.setProperty("--drift", `${drift.toFixed(2)}px`);
      petal.style.setProperty("--spin", `${spin.toFixed(2)}deg`);
      petal.style.setProperty("--tilt", `${tilt.toFixed(2)}deg`);
      petal.style.setProperty("--petal-opacity", opacity.toFixed(2));
      petal.style.setProperty("--flutter", `${flutter.toFixed(2)}s`);
      petals.append(petal);
    }

    petalField.append(petals);
  }
}

if (hero) {
  const setGlow = (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    hero.style.setProperty("--glow-x", `${x.toFixed(2)}%`);
    hero.style.setProperty("--glow-y", `${y.toFixed(2)}%`);
  };

  hero.addEventListener("pointermove", setGlow, { passive: true });

  hero.addEventListener("pointerleave", () => {
    hero.style.setProperty("--glow-x", "50%");
    hero.style.setProperty("--glow-y", "45%");
  });
}

if (primaryNav && navToggle && navLinks) {
  const closeMenu = () => {
    primaryNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
  };

  const openMenu = () => {
    primaryNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close navigation menu");
  };

  navToggle.addEventListener("click", () => {
    if (primaryNav.classList.contains("is-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!primaryNav.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const countdownSection = document.querySelector(".countdown-section");
const rollingValues = [...document.querySelectorAll(".rolling-value")];

const padValue = (value, length) => String(value).padStart(length, "0").slice(-length);

const getTimeRemaining = (targetDate) => {
  const total = Math.max(0, targetDate.getTime() - Date.now());
  const days = Math.floor(total / 86400000);
  const hours = Math.floor((total / 3600000) % 24);
  const minutes = Math.floor((total / 60000) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { total, days, hours, minutes, seconds };
};

const buildDigitReels = () => {
  rollingValues.forEach((valueElement) => {
    const digits = Number(valueElement.dataset.digits || 2);
    valueElement.textContent = "";

    for (let index = 0; index < digits; index += 1) {
      const windowElement = document.createElement("span");
      const trackElement = document.createElement("span");

      windowElement.className = "digit-window";
      trackElement.className = "digit-track";
      trackElement.dataset.current = "0";

      for (let digit = 0; digit <= 9; digit += 1) {
        const digitElement = document.createElement("span");
        digitElement.textContent = digit;
        trackElement.append(digitElement);
      }

      windowElement.append(trackElement);
      valueElement.append(windowElement);
    }
  });
};

const setDigit = (track, digit, animate = true) => {
  const current = Number(track.dataset.current || 0);
  if (current === digit && animate) return;

  track.dataset.current = String(digit);
  const digitHeight = track.parentElement.getBoundingClientRect().height;
  const y = -digit * digitHeight;

  if (window.gsap && animate && !prefersReducedMotion) {
    window.gsap.to(track, {
      y,
      duration: 0.72,
      ease: "power3.inOut",
      overwrite: true,
    });
    return;
  }

  track.style.transform = `translateY(${y}px)`;
};

const updateCountdown = (targetDate, animate = true) => {
  const remaining = getTimeRemaining(targetDate);

  rollingValues.forEach((valueElement) => {
    const unit = valueElement.dataset.unit;
    const digits = Number(valueElement.dataset.digits || 2);
    const value = padValue(remaining[unit], digits);
    const tracks = [...valueElement.querySelectorAll(".digit-track")];

    tracks.forEach((track, index) => {
      setDigit(track, Number(value[index]), animate);
    });

    valueElement.setAttribute("aria-label", `${remaining[unit]} ${unit}`);
  });
};

if (countdownSection && rollingValues.length) {
  const targetDate = new Date(countdownSection.dataset.eventDate);

  buildDigitReels();
  updateCountdown(targetDate, false);
  window.addEventListener("resize", () => updateCountdown(targetDate, false));
  window.setInterval(() => updateCountdown(targetDate), 1000);

  if (window.gsap && !prefersReducedMotion) {
    const revealCountdown = () => {
      window.gsap.from(".countdown-intro > *", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      });

      window.gsap.from(".time-card", {
        y: 42,
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        ease: "back.out(1.35)",
        stagger: 0.1,
        delay: 0.25,
      });
    };

    const revealObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (!entry.isIntersecting) return;
        revealCountdown();
        observer.disconnect();
      },
      { threshold: 0.28 }
    );

    revealObserver.observe(countdownSection);
  }
}

const journeySection = document.querySelector(".journey-section");

if (journeySection && window.gsap && !prefersReducedMotion) {
  const revealJourney = () => {
    window.gsap.from(".journey-intro > *", {
      y: 26,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12,
    });

    window.gsap.from(".journey-item", {
      y: 44,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
      stagger: 0.16,
      delay: 0.25,
    });

    window.gsap.to(".photo-print", {
      "--float-y": "-10px",
      duration: 2.9,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.35,
        repeat: -1,
        yoyo: true,
      },
    });

    window.gsap.to(".tape", {
      opacity: 0.72,
      duration: 1.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.22,
    });
  };

  const journeyObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;
      revealJourney();
      observer.disconnect();
    },
    { threshold: 0.2 }
  );

  journeyObserver.observe(journeySection);
}

const eventSection = document.querySelector(".event-section");

if (eventSection && window.gsap && !prefersReducedMotion) {
  const revealEvent = () => {
    window.gsap.from(".event-card", {
      y: 46,
      opacity: 0,
      scale: 0.96,
      duration: 0.95,
      ease: "back.out(1.25)",
    });

    window.gsap.from(".event-card__ornament, .event-card .eyebrow, .event-card h2, .event-detail, .event-map", {
      y: 22,
      opacity: 0,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.18,
    });
  };

  const eventObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;
      revealEvent();
      observer.disconnect();
    },
    { threshold: 0.24 }
  );

  eventObserver.observe(eventSection);
}

const dressSection = document.querySelector(".dress-section");

if (dressSection && window.gsap && !prefersReducedMotion) {
  const revealDressCode = () => {
    window.gsap.from(".dress-card", {
      y: 46,
      opacity: 0,
      scale: 0.96,
      duration: 0.95,
      ease: "back.out(1.25)",
    });

    window.gsap.from(".dress-card__ornament, .dress-card .eyebrow, .dress-card h2, .attire-option, .dress-palette, .reserved-colors, .dress-note", {
      y: 24,
      opacity: 0,
      duration: 0.78,
      ease: "power3.out",
      stagger: 0.09,
      delay: 0.2,
    });

    window.gsap.to(".attire-photo", {
      y: -8,
      duration: 2.4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.28,
    });
  };

  const dressObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;
      revealDressCode();
      observer.disconnect();
    },
    { threshold: 0.24 }
  );

  dressObserver.observe(dressSection);
}

const giftSection = document.querySelector(".gift-section");

if (giftSection && window.gsap && !prefersReducedMotion) {
  const revealGift = () => {
    window.gsap.from(".gift-card", {
      y: 46,
      opacity: 0,
      scale: 0.96,
      duration: 0.95,
      ease: "back.out(1.25)",
    });

    window.gsap.from(".gift-card__ornament, .gift-card .eyebrow, .gift-card h2, .gift-card__image, .gift-card__message", {
      y: 24,
      opacity: 0,
      duration: 0.78,
      ease: "power3.out",
      stagger: 0.1,
      delay: 0.2,
    });

    window.gsap.to(".gift-card__image", {
      y: -9,
      duration: 2.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  };

  const giftObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;
      revealGift();
      observer.disconnect();
    },
    { threshold: 0.24 }
  );

  giftObserver.observe(giftSection);
}

const rsvpSection = document.querySelector(".rsvp-section");
const rsvpForm = document.querySelector("#rsvp-form");

/* ── Thank-you overlay logic ───────────────────────────── */
const thankyouOverlay = document.getElementById("thankyou-overlay");
const thankyouClose   = document.getElementById("thankyou-close");
const thankyouBackdrop = document.getElementById("thankyou-backdrop");

function showThankYou() {
  if (!thankyouOverlay) return;
  thankyouOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  thankyouClose?.focus();
}

function closeThankYou() {
  if (!thankyouOverlay) return;
  thankyouOverlay.hidden = true;
  document.body.style.overflow = "";
}

thankyouClose?.addEventListener("click", closeThankYou);
thankyouBackdrop?.addEventListener("click", closeThankYou);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && thankyouOverlay && !thankyouOverlay.hidden) {
    closeThankYou();
  }
});

if (rsvpForm) {
  const attendanceChoices = [...rsvpForm.querySelectorAll('input[name="attendance"]')];
  const statusElement = rsvpForm.querySelector(".form-status");
  const submitButton = rsvpForm.querySelector(".rsvp-submit");

  attendanceChoices.forEach((choice) => {
    choice.addEventListener("change", () => {
      if (!choice.checked) return;

      attendanceChoices.forEach((otherChoice) => {
        if (otherChoice !== choice) {
          otherChoice.checked = false;
          otherChoice.required = false;
        }
      });
    });
  });

  rsvpForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const selectedAttendance = attendanceChoices.find((choice) => choice.checked);

    if (!selectedAttendance) {
      statusElement.textContent = TRANSLATIONS[currentLang]["rsvp-error"];
      statusElement.className = "form-status is-error";
      return;
    }

    const scriptUrl = rsvpForm.dataset.scriptUrl;
    const payload = {
      fullName: rsvpForm.elements.fullName.value.trim(),
      attendance: selectedAttendance.value,
      guestCount: rsvpForm.elements.guestCount.value,
      submittedAt: new Date().toISOString(),
    };

    if (!scriptUrl || scriptUrl.includes("PASTE_YOUR_GOOGLE_APPS_SCRIPT")) {
      console.info("RSVP payload ready for Google Apps Script:", payload);
      rsvpForm.reset();
      showThankYou();
      return;
    }

    submitButton.disabled = true;
    statusElement.textContent = "Sending your RSVP...";
    statusElement.className = "form-status";

    try {
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      rsvpForm.reset();
      showThankYou();
    } catch (error) {
      statusElement.textContent = "Something went wrong. Please try again in a moment.";
      statusElement.className = "form-status is-error";
    } finally {
      submitButton.disabled = false;
    }
  });
}

if (rsvpSection && window.gsap && !prefersReducedMotion) {
  const revealRsvp = () => {
    window.gsap.from(".rsvp-card", {
      y: 46,
      opacity: 0,
      scale: 0.96,
      duration: 0.95,
      ease: "back.out(1.25)",
    });

    window.gsap.from(".rsvp-card .eyebrow, .rsvp-card h2, .form-field, .attendance-field, .rsvp-submit", {
      y: 22,
      opacity: 0,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.2,
    });
  };

  const rsvpObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (!entry.isIntersecting) return;
      revealRsvp();
      observer.disconnect();
    },
    { threshold: 0.24 }
  );

  rsvpObserver.observe(rsvpSection);
}
