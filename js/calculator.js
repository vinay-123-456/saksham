/**
 * Saksham Events - Event Budget & Cost Estimator Calculator
 */

class EventCalculator {
  constructor() {
    this.eventType = "wedding";
    this.guestCount = 250;
    this.selectedServices = new Set(["pyro", "decor", "lighting"]);
    this.cityTier = "tier1"; // tier1 (Jaipur/Mumbai/Delhi), tier2 (Other Cities)
    
    this.basePrices = {
      wedding: 80000,
      sangeet: 45000,
      corporate: 60000,
      birthday: 30000,
      concert: 100000
    };

    this.guestMultiplier = {
      small: 1.0,   // <100
      medium: 1.25, // 100-300
      large: 1.6,   // 300-700
      grand: 2.2    // >700
    };

    this.servicePrices = {
      pyro: { name: "Cold Pyro Sparkle Fountains (12 Guns)", price: 25000 },
      fog: { name: "Low-Smoke Dry Ice Cloud Entry", price: 15000 },
      decor: { name: "Royal Floral Mandap & Stage Decor", price: 120000 },
      lighting: { name: "3D Truss & Sharpy Laser Lighting", price: 45000 },
      audio: { name: "Concert Line-Array DJ & Audio", price: 35000 },
      co2: { name: "CO2 Jet Streamers & Confetti Cannons", price: 12000 },
      photo: { name: "Cinematic 4K Video & Drone Shoot", price: 50000 },
      artist: { name: "Celebrity Anchor / Live Band Booking", price: 75000 }
    };
  }

  init() {
    this.bindEvents();
    this.calculate();
  }

  bindEvents() {
    // Event type radio/buttons
    const eventTypeButtons = document.querySelectorAll('.calc-type-btn');
    eventTypeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        eventTypeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.eventType = btn.dataset.type;
        this.calculate();
      });
    });

    // Guest range slider
    const guestSlider = document.getElementById('calc-guests-slider');
    const guestValueDisplay = document.getElementById('calc-guests-val');
    if (guestSlider && guestValueDisplay) {
      guestSlider.addEventListener('input', (e) => {
        this.guestCount = parseInt(e.target.value, 10);
        guestValueDisplay.textContent = this.guestCount;
        this.calculate();
      });
    }

    // City tier selector
    const citySelect = document.getElementById('calc-city-select');
    if (citySelect) {
      citySelect.addEventListener('change', (e) => {
        this.cityTier = e.target.value;
        this.calculate();
      });
    }

    // Checkboxes
    const serviceCheckboxes = document.querySelectorAll('.calc-service-check');
    serviceCheckboxes.forEach(chk => {
      chk.addEventListener('change', (e) => {
        if (chk.checked) {
          this.selectedServices.add(chk.value);
        } else {
          this.selectedServices.delete(chk.value);
        }
        this.calculate();
      });
    });

    // WhatsApp Send CTA
    const waBtn = document.getElementById('calc-whatsapp-btn');
    if (waBtn) {
      waBtn.addEventListener('click', () => this.sendToWhatsApp());
    }
  }

  calculate() {
    let base = this.basePrices[this.eventType] || 50000;
    
    // Guest tier factor
    let factor = 1.0;
    if (this.guestCount <= 100) factor = this.guestMultiplier.small;
    else if (this.guestCount <= 300) factor = this.guestMultiplier.medium;
    else if (this.guestCount <= 700) factor = this.guestMultiplier.large;
    else factor = this.guestMultiplier.grand;

    // City factor
    let cityFactor = this.cityTier === 'destination' ? 1.3 : 1.0;

    let totalServicesCost = 0;
    let selectedBreakdown = [];

    this.selectedServices.forEach(srvKey => {
      const item = this.servicePrices[srvKey];
      if (item) {
        totalServicesCost += item.price;
        selectedBreakdown.push(item);
      }
    });

    let estimatedTotal = Math.round((base * factor * cityFactor) + totalServicesCost);

    // Format currency INR
    const formattedTotal = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(estimatedTotal);

    // Update DOM elements
    const totalEl = document.getElementById('calc-total-amount');
    if (totalEl) {
      totalEl.textContent = formattedTotal;
    }

    const breakdownContainer = document.getElementById('calc-breakdown-list');
    if (breakdownContainer) {
      breakdownContainer.innerHTML = '';
      selectedBreakdown.forEach(item => {
        const li = document.createElement('li');
        li.className = 'breakdown-item';
        li.innerHTML = `
          <span><i class="fa-solid fa-check text-gold"></i> ${item.name}</span>
          <span class="price-tag">₹${item.price.toLocaleString('en-IN')}</span>
        `;
        breakdownContainer.appendChild(li);
      });

      if (selectedBreakdown.length === 0) {
        breakdownContainer.innerHTML = '<li class="breakdown-item empty">Select services above to view breakdown</li>';
      }
    }
  }

  sendToWhatsApp() {
    const eventNameMap = {
      wedding: "Grand Royal Wedding",
      sangeet: "Sangeet / Haldi Celebration",
      corporate: "Corporate Gala / Award Night",
      birthday: "Luxury Birthday Celebration",
      concert: "Concert / Stage Show"
    };

    let selectedListText = Array.from(this.selectedServices)
      .map(k => `- ${this.servicePrices[k]?.name || k}`)
      .join('%0A');

    const totalEl = document.getElementById('calc-total-amount');
    const estCost = totalEl ? totalEl.textContent : "Estimate requested";

    const text = `Hello *Saksham Events* team! 👋%0AI used your website Budget Estimator for an upcoming event:%0A%0A` +
      `📌 *Event Type:* ${eventNameMap[this.eventType]}%0A` +
      `👥 *Expected Guests:* ${this.guestCount} Guests%0A` +
      `📍 *Location Category:* ${this.cityTier.toUpperCase()}%0A%0A` +
      `✨ *Selected Services:*%0A${selectedListText || '- General Event Consultation'}%0A%0A` +
      `💰 *Estimated Budget:* ${estCost}%0A%0A` +
      `Can you please provide a detailed proposal and check availability for our dates?`;

    const phone = window.SakshamData?.brand?.whatsapp || "919082357220";
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.sakshamCalculator = new EventCalculator();
  window.sakshamCalculator.init();
});
