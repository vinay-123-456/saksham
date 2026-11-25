/**
 * Saksham Events - Main Application Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimatedCounters();
  renderServices();
  renderGallery();
  renderReels();
  renderTestimonials();
  initModals();
  initContactForm();
});

/* ==========================================================================
   Navigation & Scroll Effects
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector('.navbar-header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   Animated Counter Stats
   ========================================================================== */
function initAnimatedCounters() {
  const statsContainer = document.getElementById('stats-grid');
  if (!statsContainer || !window.SakshamData) return;

  statsContainer.innerHTML = window.SakshamData.stats.map(stat => `
    <div class="stat-card">
      <div class="stat-number"><span class="counter" data-target="${stat.number}">0</span>${stat.suffix}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const speed = 2000 / target;
          let count = 0;

          const updateCount = () => {
            const increment = Math.ceil(target / 40);
            if (count < target) {
              count += increment;
              if (count > target) count = target;
              counter.innerText = count;
              setTimeout(updateCount, 40);
            } else {
              counter.innerText = target;
            }
          };
          updateCount();
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsContainer);
}

/* ==========================================================================
   Services Grid
   ========================================================================== */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container || !window.SakshamData) return;

  container.innerHTML = window.SakshamData.services.map(srv => `
    <div class="service-card" data-id="${srv.id}">
      <div class="service-img-wrapper">
        <img src="${srv.image}" alt="${srv.title}" loading="lazy">
        <span class="service-badge">${srv.badge}</span>
      </div>
      <div class="service-content">
        <div class="service-icon"><i class="fa-solid ${srv.icon}"></i></div>
        <h3>${srv.title}</h3>
        <p>${srv.summary}</p>
        <ul class="service-feature-list">
          ${srv.features.slice(0, 3).map(f => `<li><i class="fa-solid fa-sparkles text-gold"></i> ${f}</li>`).join('')}
        </ul>
        <div class="service-footer">
          <span class="service-price">From ₹${srv.startingPrice.toLocaleString('en-IN')}</span>
          <button class="btn btn-outline-gold btn-sm view-service-btn" data-id="${srv.id}">
            Details <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Service click listener for detail modal
  document.querySelectorAll('.view-service-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const srvId = btn.dataset.id;
      openServiceModal(srvId);
    });
  });
}

function openServiceModal(serviceId) {
  const srv = window.SakshamData?.services.find(s => s.id === serviceId);
  if (!srv) return;

  const modal = document.getElementById('service-detail-modal');
  const modalContent = document.getElementById('service-modal-body');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="service-modal-header">
      <img src="${srv.image}" alt="${srv.title}">
      <div class="modal-header-overlay">
        <span class="service-badge">${srv.badge}</span>
        <h2>${srv.title}</h2>
      </div>
    </div>
    <div class="service-modal-content">
      <p class="service-lead">${srv.summary}</p>
      <h4>What's Included in this Experience:</h4>
      <ul class="service-full-features">
        ${srv.features.map(f => `<li><i class="fa-solid fa-circle-check text-gold"></i> ${f}</li>`).join('')}
      </ul>
      <div class="modal-pricing-box">
        <div>
          <span>Starting Investment</span>
          <h3 class="text-gold">₹${srv.startingPrice.toLocaleString('en-IN')}</h3>
        </div>
        <button class="btn btn-gold modal-inquire-btn" onclick="inquireService('${srv.title}')">
          <i class="fa-brands fa-whatsapp"></i> Inquire via WhatsApp
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

window.inquireService = function(serviceTitle) {
  const msg = `Hello Saksham Events! I am interested in booking or getting details for *${serviceTitle}*. Can you please share availability and customized quote options?`;
  const phone = window.SakshamData?.brand?.whatsapp || "919876543210";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
};

/* ==========================================================================
   Portfolio Gallery & Filters
   ========================================================================== */
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  if (!grid || !window.SakshamData) return;

  const renderItems = (category = 'all') => {
    const items = category === 'all'
      ? window.SakshamData.gallery
      : window.SakshamData.gallery.filter(item => item.category === category);

    grid.innerHTML = items.map(item => `
      <div class="gallery-item" data-category="${item.category}" onclick="openLightbox('${item.image}', '${item.title}', '${item.subtitle}')">
        <div class="gallery-img-wrapper">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="gallery-overlay">
            <span class="gallery-tag">${item.tag}</span>
            <h4>${item.title}</h4>
            <p>${item.subtitle}</p>
            <span class="gallery-zoom-icon"><i class="fa-solid fa-expand"></i> View Spec</span>
          </div>
        </div>
      </div>
    `).join('');
  };

  renderItems('all');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderItems(btn.dataset.filter);
    });
  });
}

window.openLightbox = function(imgUrl, title, subtitle) {
  const lightbox = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const subEl = document.getElementById('lightbox-subtitle');

  if (lightbox && imgEl) {
    imgEl.src = imgUrl;
    if (titleEl) titleEl.textContent = title;
    if (subEl) subEl.textContent = subtitle;
    lightbox.classList.add('active');
  }
};

/* ==========================================================================
   Instagram Reels Showcase
   ========================================================================== */
function renderReels() {
  const container = document.getElementById('reels-grid');
  if (!container || !window.SakshamData) return;

  container.innerHTML = window.SakshamData.instagramReels.map(reel => `
    <div class="reel-card" onclick="openReelModal('${reel.title}', '${reel.views}')">
      <div class="reel-thumbnail">
        <img src="${reel.image}" alt="${reel.title}">
        <div class="reel-play-btn"><i class="fa-solid fa-play"></i></div>
        <span class="reel-badge">${reel.tag}</span>
      </div>
      <div class="reel-info">
        <h4>${reel.title}</h4>
        <div class="reel-stats">
          <span><i class="fa-regular fa-eye"></i> ${reel.views}</span>
          <span><i class="fa-solid fa-heart text-crimson"></i> ${reel.likes}</span>
        </div>
      </div>
    </div>
  `).join('');
}

window.openReelModal = function(title, views) {
  const msg = `Hi Saksham Events! I watched your trending Instagram reel: "${title}" (${views}) and want a similar setup for my event!`;
  const phone = window.SakshamData?.brand?.whatsapp || "919876543210";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
};

/* ==========================================================================
   Testimonials Slider
   ========================================================================== */
function renderTestimonials() {
  const container = document.getElementById('testimonials-track');
  if (!container || !window.SakshamData) return;

  container.innerHTML = window.SakshamData.testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">
        ${'<i class="fa-solid fa-star text-gold"></i>'.repeat(t.rating)}
      </div>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-author">
        <div class="author-avatar"><i class="fa-solid fa-user-check text-gold"></i></div>
        <div>
          <h5>${t.name}</h5>
          <span>${t.role} • ${t.event}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Modals Close Handlers
   ========================================================================== */
function initModals() {
  const closeBtns = document.querySelectorAll('.modal-close, .modal-backdrop');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-window').forEach(m => m.classList.remove('active'));
    });
  });
}

/* ==========================================================================
   Contact Form Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('main-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value || '';
    const phoneNum = document.getElementById('contact-phone')?.value || '';
    const date = document.getElementById('contact-date')?.value || 'TBD';
    const city = document.getElementById('contact-city')?.value || '';
    const message = document.getElementById('contact-message')?.value || '';

    const text = `Hello *Saksham Events*! 🎉%0A` +
      `New Website Booking Inquiry:%0A%0A` +
      `👤 *Name:* ${name}%0A` +
      `📞 *Phone:* ${phoneNum}%0A` +
      `📅 *Event Date:* ${date}%0A` +
      `📍 *City / Venue:* ${city}%0A` +
      `💬 *Requirements:* ${message}%0A%0A` +
      `Please contact me with availability and details!`;

    const targetPhone = window.SakshamData?.brand?.whatsapp || "919876543210";
    window.open(`https://wa.me/${targetPhone}?text=${text}`, '_blank');
  });
}
