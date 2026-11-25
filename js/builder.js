/**
 * Saksham Events - Interactive Dream Entry & FX Builder
 */

class EntryBuilder {
  constructor() {
    this.currentStep = 1;
    this.selectedStyle = "pyro-tunnel";
    this.selectedAddons = new Set(["co2-jets", "confetti-blast"]);
    this.selectedTheme = "royal-gold";
  }

  init() {
    this.renderOptions();
    this.bindEvents();
    this.updateSummary();
  }

  renderOptions() {
    const data = window.SakshamData?.entryBuilder;
    if (!data) return;

    // Render Entry Styles
    const stylesGrid = document.getElementById('builder-styles-grid');
    if (stylesGrid) {
      stylesGrid.innerHTML = data.styles.map(style => `
        <div class="builder-card ${style.id === this.selectedStyle ? 'active' : ''}" data-id="${style.id}" data-cost="${style.cost}">
          <div class="card-icon"><i class="fa-solid fa-wand-magic-sparkles text-gold"></i></div>
          <h4>${style.name}</h4>
          <p>${style.desc}</p>
          <div class="card-price">+₹${style.cost.toLocaleString('en-IN')}</div>
          <div class="card-select-badge"><i class="fa-solid fa-circle-check"></i> Selected</div>
        </div>
      `).join('');
    }

    // Render FX Addons
    const addonsGrid = document.getElementById('builder-addons-grid');
    if (addonsGrid) {
      addonsGrid.innerHTML = data.fxAddons.map(addon => `
        <div class="builder-card addon-card ${this.selectedAddons.has(addon.id) ? 'active' : ''}" data-id="${addon.id}" data-cost="${addon.cost}">
          <div class="card-icon"><i class="fa-solid fa-fire text-gold"></i></div>
          <h4>${addon.name}</h4>
          <p>${addon.desc}</p>
          <div class="card-price">+₹${addon.cost.toLocaleString('en-IN')}</div>
          <div class="card-select-badge"><i class="fa-solid fa-circle-check"></i> Added</div>
        </div>
      `).join('');
    }

    // Render Themes
    const themesGrid = document.getElementById('builder-themes-grid');
    if (themesGrid) {
      themesGrid.innerHTML = data.themes.map(theme => `
        <div class="builder-card theme-card ${theme.id === this.selectedTheme ? 'active' : ''}" data-id="${theme.id}">
          <div class="card-icon"><i class="fa-solid fa-palette text-gold"></i></div>
          <h4>${theme.name}</h4>
          <p>${theme.style}</p>
          <div class="card-select-badge"><i class="fa-solid fa-circle-check"></i> Selected</div>
        </div>
      `).join('');
    }
  }

  bindEvents() {
    // Step navigation buttons
    const nextBtn = document.getElementById('builder-next-btn');
    const prevBtn = document.getElementById('builder-prev-btn');

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentStep < 4) {
          this.currentStep++;
          this.switchStep(this.currentStep);
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentStep > 1) {
          this.currentStep--;
          this.switchStep(this.currentStep);
        }
      });
    }

    // Delegate clicks for styles, addons, themes
    document.addEventListener('click', (e) => {
      const styleCard = e.target.closest('#builder-styles-grid .builder-card');
      if (styleCard) {
        document.querySelectorAll('#builder-styles-grid .builder-card').forEach(c => c.classList.remove('active'));
        styleCard.classList.add('active');
        this.selectedStyle = styleCard.dataset.id;
        this.updateSummary();
      }

      const addonCard = e.target.closest('#builder-addons-grid .builder-card');
      if (addonCard) {
        const id = addonCard.dataset.id;
        if (this.selectedAddons.has(id)) {
          this.selectedAddons.delete(id);
          addonCard.classList.remove('active');
        } else {
          this.selectedAddons.add(id);
          addonCard.classList.add('active');
        }
        this.updateSummary();
      }

      const themeCard = e.target.closest('#builder-themes-grid .builder-card');
      if (themeCard) {
        document.querySelectorAll('#builder-themes-grid .builder-card').forEach(c => c.classList.remove('active'));
        themeCard.classList.add('active');
        this.selectedTheme = themeCard.dataset.id;
        this.updateSummary();
      }
    });

    // Final Booking button in step 4
    const bookEntryBtn = document.getElementById('builder-submit-wa');
    if (bookEntryBtn) {
      bookEntryBtn.addEventListener('click', () => this.sendWhatsAppBooking());
    }
  }

  switchStep(step) {
    document.querySelectorAll('.builder-step-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.builder-step-indicator').forEach(el => el.classList.remove('active', 'completed'));

    const activeContent = document.getElementById(`builder-step-${step}`);
    if (activeContent) activeContent.classList.add('active');

    for (let i = 1; i <= 4; i++) {
      const ind = document.getElementById(`step-ind-${i}`);
      if (!ind) continue;
      if (i === step) ind.classList.add('active');
      else if (i < step) ind.classList.add('completed');
    }

    const prevBtn = document.getElementById('builder-prev-btn');
    const nextBtn = document.getElementById('builder-next-btn');

    if (prevBtn) prevBtn.style.display = step === 1 ? 'none' : 'inline-flex';
    if (nextBtn) {
      if (step === 4) {
        nextBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'inline-flex';
      }
    }

    this.updateSummary();
  }

  updateSummary() {
    const data = window.SakshamData?.entryBuilder;
    if (!data) return;

    const styleObj = data.styles.find(s => s.id === this.selectedStyle);
    const themeObj = data.themes.find(t => t.id === this.selectedTheme);
    const addonObjs = data.fxAddons.filter(a => this.selectedAddons.has(a.id));

    let totalCost = (styleObj?.cost || 0);
    addonObjs.forEach(a => totalCost += a.cost);

    // Update Step 4 Summary UI
    const summaryStyleEl = document.getElementById('summary-style-name');
    if (summaryStyleEl) summaryStyleEl.textContent = styleObj?.name || 'Selected Entry Concept';

    const summaryThemeEl = document.getElementById('summary-theme-name');
    if (summaryThemeEl) summaryThemeEl.textContent = themeObj?.name || 'Selected Theme Vibe';

    const summaryAddonsEl = document.getElementById('summary-addons-list');
    if (summaryAddonsEl) {
      summaryAddonsEl.innerHTML = addonObjs.length > 0 
        ? addonObjs.map(a => `<li><i class="fa-solid fa-bolt text-gold"></i> ${a.name} (₹${a.cost.toLocaleString('en-IN')})</li>`).join('')
        : '<li>No extra visual FX selected</li>';
    }

    const summaryPriceEl = document.getElementById('summary-total-price');
    if (summaryPriceEl) {
      summaryPriceEl.textContent = `₹${totalCost.toLocaleString('en-IN')}`;
    }
  }

  sendWhatsAppBooking() {
    const data = window.SakshamData?.entryBuilder;
    const styleObj = data?.styles.find(s => s.id === this.selectedStyle);
    const themeObj = data?.themes.find(t => t.id === this.selectedTheme);
    const addonObjs = data?.fxAddons.filter(a => this.selectedAddons.has(a.id));

    let totalCost = (styleObj?.cost || 0);
    addonObjs?.forEach(a => totalCost += a.cost);

    let addonsList = addonObjs?.map(a => `- ${a.name}`).join('%0A') || '- Standard FX Package';

    const msg = `Hello *Saksham Events*! 🎉%0AI created my custom Dream Entry Concept on your website:%0A%0A` +
      `👑 *Entry Concept:* ${styleObj?.name}%0A` +
      `🎨 *Theme Vibe:* ${themeObj?.name}%0A` +
      `💥 *Special FX Add-ons:*%0A${addonsList}%0A%0A` +
      `💵 *Estimated Custom Entry Price:* ₹${totalCost.toLocaleString('en-IN')}%0A%0A` +
      `I would love to confirm date availability and discuss execution details!`;

    const phone = window.SakshamData?.brand?.whatsapp || "919082357220";
    window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.sakshamEntryBuilder = new EntryBuilder();
  window.sakshamEntryBuilder.init();
});
