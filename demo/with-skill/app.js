const specimens = [
  {
    id: 'can-01',
    name: 'Balto',
    category: 'canino',
    breed: 'Golden Retriever',
    age: '4 months',
    estimatedWeight: '11.5 kg',
    habitatFit: 'House with yard or frequent outdoor walks',
    aptApartment: false,
    vaccineStatus: 'Complete for developmental age',
    energyIndex: 'Medium-high',
    temperament: 'Highly sociable with dogs and people',
    summary: 'Juvenile dog in formative development demonstrating strong response to positive reinforcement and eagerness for structured play routines.',
    imageUrl: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fel-01',
    name: 'Luna',
    category: 'felino',
    breed: 'Crossbred Siamese',
    age: '3 months',
    estimatedWeight: '1.4 kg',
    habitatFit: 'Apartment or secured indoor spaces',
    aptApartment: true,
    vaccineStatus: 'Feline core series initiated',
    energyIndex: 'Moderate',
    temperament: 'Curious, attentive, and vocal',
    summary: 'Juvenile feline well adapted to vertical wall perches and scratching trees. Displays calm tolerance to standard domestic stimuli.',
    imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'can-02',
    name: 'Milo',
    category: 'canino',
    breed: 'Pembroke Welsh Corgi',
    age: '5 months',
    estimatedWeight: '7.8 kg',
    habitatFit: 'Spacious apartment or house',
    aptApartment: true,
    vaccineStatus: 'Complete with serological booster',
    energyIndex: 'Medium',
    temperament: 'Alert, spirited, and receptive',
    summary: 'Responds promptly to foundational obedience cues. Displays even temperament during leash-guided neighborhood walks.',
    imageUrl: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fel-02',
    name: 'Oliver',
    category: 'felino',
    breed: 'European Shorthair',
    age: '2 months',
    estimatedWeight: '1.1 kg',
    habitatFit: 'Apartment with window safety screens',
    aptApartment: true,
    vaccineStatus: 'Dewormed and initial vaccine administered',
    energyIndex: 'Calm',
    temperament: 'Affectionate when resting and docile',
    summary: 'Consolidated litter-box hygiene habits. Actively seeks physical proximity during scheduled quiet rest intervals.',
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'can-03',
    name: 'Bruno',
    category: 'canino',
    breed: 'French Bulldog',
    age: '6 months',
    estimatedWeight: '9.2 kg',
    habitatFit: 'Apartment without excessive heat exposure',
    aptApartment: true,
    vaccineStatus: 'Complete with official microchip registry',
    energyIndex: 'Low-moderate',
    temperament: 'Quiet, bonded, and tranquil',
    summary: 'Brachycephalic profile requiring monitored short walks and moderate indoor thermal regulation.',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fel-03',
    name: 'Snow',
    category: 'felino',
    breed: 'Crossbred Angora',
    age: '3.5 months',
    estimatedWeight: '1.5 kg',
    habitatFit: 'Indoors with daily brushing routine',
    aptApartment: true,
    vaccineStatus: 'Core series complete and FeLV negative',
    energyIndex: 'Moderate',
    temperament: 'Sensitive and gentle in handling',
    summary: 'Semi-long coat requiring regular grooming. Coexists favorably with evaluated companion felines in common quarters.',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'can-04',
    name: 'Maya',
    category: 'canino',
    breed: 'Siberian Husky',
    age: '4 months',
    estimatedWeight: '10.8 kg',
    habitatFit: 'Secure fenced yard or athletic guardians',
    aptApartment: false,
    vaccineStatus: 'Complete and up to date',
    energyIndex: 'High',
    temperament: 'Energetic, exploratory, and communicative',
    summary: 'Demands continuous environmental enrichment and scent games to channel high biological stamina constructively.',
    imageUrl: 'https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fel-04',
    name: 'Mochi',
    category: 'felino',
    breed: 'British Shorthair',
    age: '5 months',
    estimatedWeight: '2.3 kg',
    habitatFit: 'Apartment or house with quiet routine',
    aptApartment: true,
    vaccineStatus: 'Complete under veterinary control',
    energyIndex: 'Low',
    temperament: 'Independent, patient, and serene',
    summary: 'Predictable and composed disposition. Well-suited for quiet home environments and remote-work schedules.',
    imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80'
  }
];

const clinicalFacts = [
  'Canine olfaction features up to 300 million olfactory receptors, compared to approximately 6 million in humans.',
  'Resting respiratory rates in healthy adult felines typically range between 20 and 30 breaths per minute.',
  'The primary socialization window in puppies develops critically between 3 and 14 weeks of age.',
  'Felines lack functional sweet taste receptors due to a permanent deletion mutation in the Tas1r2 gene.',
  'Early surgical sterilization statistically lowers the incidence of uterine pathologies and mammary neoplasia.',
  'Facial rubbing in felines deposits F3 facial pheromone fractions that provide self-soothing spatial familiarization.'
];

let activeFilter = 'all';
let searchFilter = '';
let isSoundActive = false;
let currentFactPointer = 0;

let audioContext = null;

function initAudioSystem() {
  if (!audioContext) {
    const ContextClass = window.AudioContext || window.webkitAudioContext;
    audioContext = new ContextClass();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

// Prevents distortion through soft-clipped short sine burst feedback
function emitFeedbackTone(frequency = 440, duration = 0.08) {
  if (!isSoundActive) return;
  try {
    initAudioSystem();
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  } catch (error) {
    // Gracefully ignore audio hardware initialization failures
  }
}

const catalogGrid = document.getElementById('catalog-grid');
const searchInput = document.getElementById('catalog-search');
const filterTabs = document.querySelectorAll('.filter-tab');
const counterLabel = document.getElementById('counter-label');
const factDisplay = document.getElementById('fact-display');
const nextFactTrigger = document.getElementById('next-fact-trigger');
const soundToggle = document.getElementById('sound-toggle');
const soundText = document.getElementById('sound-text');

const specModal = document.getElementById('spec-modal');
const dialogClose = document.getElementById('dialog-close');
const dialogContent = document.getElementById('dialog-content');

function updateCatalogView() {
  const query = searchFilter.trim().toLowerCase();

  const filtered = specimens.filter(item => {
    if (activeFilter === 'canino' && item.category !== 'canino') return false;
    if (activeFilter === 'felino' && item.category !== 'felino') return false;
    if (activeFilter === 'departamento' && !item.aptApartment) return false;

    if (query) {
      const matchName = item.name.toLowerCase().includes(query);
      const matchBreed = item.breed.toLowerCase().includes(query);
      const matchTemperament = item.temperament.toLowerCase().includes(query);
      return matchName || matchBreed || matchTemperament;
    }
    return true;
  });

  counterLabel.textContent = `${filtered.length} of ${specimens.length} records match applied criteria`;

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div class="empty-state">
        <strong>No matching records found</strong>
        <p>No animal files correspond to the specified search terms or applied filters.</p>
      </div>
    `;
    return;
  }

  catalogGrid.innerHTML = filtered.map(item => `
    <article class="card-item" data-id="${item.id}">
      <div class="card-media">
        <img src="${item.imageUrl}" alt="Clinical profile photograph of ${item.name}, breed ${item.breed}" loading="lazy">
        <span class="card-taxonomy">${item.category === 'canino' ? 'Canine' : 'Feline'}</span>
      </div>
      <div class="card-content">
        <div class="card-heading-row">
          <h2 class="card-title">${item.name}</h2>
          <span class="card-period">${item.age}</span>
        </div>
        <p class="card-species-info">${item.breed}</p>

        <ul class="spec-list">
          <li class="spec-entry">
            <span class="spec-name">Estimated weight</span>
            <span class="spec-value">${item.estimatedWeight}</span>
          </li>
          <li class="spec-entry">
            <span class="spec-name">Housing suitability</span>
            <span class="spec-value">${item.aptApartment ? 'Apartment suitable' : 'Requires yard'}</span>
          </li>
          <li class="spec-entry">
            <span class="spec-name">Health protocol</span>
            <span class="spec-value">${item.vaccineStatus}</span>
          </li>
        </ul>

        <div class="card-actions">
          <button class="record-btn" data-trigger="inspect" data-id="${item.id}">Inspect clinical profile</button>
        </div>
      </div>
    </article>
  `).join('');
}

function displaySpecimenDetail(id) {
  const item = specimens.find(entry => entry.id === id);
  if (!item) return;

  dialogContent.innerHTML = `
    <img src="${item.imageUrl}" alt="Full profile of ${item.name}" class="dialog-image">
    <div class="dialog-inner-body">
      <div class="dialog-title-group">
        <h2 id="dialog-title" class="dialog-title">${item.name}</h2>
        <span class="dialog-breed">${item.breed}, ${item.age}</span>
      </div>

      <p class="dialog-description">${item.summary}</p>

      <div class="assessment-grid">
        <div class="assessment-item">
          <span class="assessment-label">Recommended environment</span>
          <span class="assessment-value">${item.habitatFit}</span>
        </div>
        <div class="assessment-item">
          <span class="assessment-label">Energy index</span>
          <span class="assessment-value">${item.energyIndex}</span>
        </div>
        <div class="assessment-item">
          <span class="assessment-label">Evaluated temperament</span>
          <span class="assessment-value">${item.temperament}</span>
        </div>
        <div class="assessment-item">
          <span class="assessment-label">Vaccination status</span>
          <span class="assessment-value">${item.vaccineStatus}</span>
        </div>
      </div>

      <button id="inquire-btn" class="dialog-primary-action">Submit fostering interview request</button>
    </div>
  `;

  specModal.showModal();
  emitFeedbackTone(520, 0.09);

  document.getElementById('inquire-btn').addEventListener('click', () => {
    emitFeedbackTone(680, 0.12);
    alert(`Your fostering request for ${item.name} has been recorded. A staff veterinarian will coordinate your ethological consultation.`);
  });
}

function rotateFactDisplay() {
  factDisplay.textContent = clinicalFacts[currentFactPointer];
  currentFactPointer = (currentFactPointer + 1) % clinicalFacts.length;
}

catalogGrid.addEventListener('click', (event) => {
  const inspectBtn = event.target.closest('[data-trigger="inspect"]');
  if (inspectBtn) {
    const specimenId = inspectBtn.getAttribute('data-id');
    displaySpecimenDetail(specimenId);
  }
});

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    activeFilter = tab.getAttribute('data-group');
    emitFeedbackTone(380, 0.05);
    updateCatalogView();
  });
});

searchInput.addEventListener('input', (event) => {
  searchFilter = event.target.value;
  updateCatalogView();
});

dialogClose.addEventListener('click', () => {
  specModal.close();
  emitFeedbackTone(320, 0.05);
});

specModal.addEventListener('click', (event) => {
  if (event.target === specModal) {
    specModal.close();
  }
});

nextFactTrigger.addEventListener('click', () => {
  emitFeedbackTone(480, 0.06);
  rotateFactDisplay();
});

soundToggle.addEventListener('click', () => {
  isSoundActive = !isSoundActive;
  soundToggle.setAttribute('aria-pressed', isSoundActive ? 'true' : 'false');
  soundText.textContent = isSoundActive ? 'Sound enabled' : 'Sound disabled';
  if (isSoundActive) {
    initAudioSystem();
    emitFeedbackTone(600, 0.1);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  rotateFactDisplay();
  updateCatalogView();
});
