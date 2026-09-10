const specimens = [
  {
    id: 'can-01',
    name: 'Balto',
    category: 'canino',
    breed: 'Golden Retriever',
    age: '4 meses',
    estimatedWeight: '11.5 kg',
    habitatFit: 'Casa con jardín o paseos frecuentes',
    aptApartment: false,
    vaccineStatus: 'Completo para la edad',
    energyIndex: 'Medio-alto',
    temperament: 'Sociable con congéneres y personas',
    summary: 'Cachorro en etapa formativa con alta respuesta a estímulos positivos y disposición para rutinas de juego estructuradas.',
    imageUrl: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fel-01',
    name: 'Luna',
    category: 'felino',
    breed: 'Siamés mestizo',
    age: '3 meses',
    estimatedWeight: '1.4 kg',
    habitatFit: 'Departamento o interiores seguros',
    aptApartment: true,
    vaccineStatus: 'Triple felina iniciada',
    energyIndex: 'Moderado',
    temperament: 'Curiosa, observadora y vocal',
    summary: 'Ejemplar juvenil adaptado a espacios verticales y rascadores. Muestra tolerancia a estímulos domésticos habituales.',
    imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'can-02',
    name: 'Milo',
    category: 'canino',
    breed: 'Corgi Galés',
    age: '5 meses',
    estimatedWeight: '7.8 kg',
    habitatFit: 'Departamento amplio o casa',
    aptApartment: true,
    vaccineStatus: 'Completo con refuerzo sérico',
    energyIndex: 'Medio',
    temperament: 'Atento, vivaz y receptivo',
    summary: 'Responde con rapidez a comandos básicos de obediencia. Muestra temperamento estable en paseos con correa.',
    imageUrl: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fel-02',
    name: 'Oliver',
    category: 'felino',
    breed: 'Común europeo',
    age: '2 meses',
    estimatedWeight: '1.1 kg',
    habitatFit: 'Departamento con mallas de protección',
    aptApartment: true,
    vaccineStatus: 'Desparasitado y primera dosis',
    energyIndex: 'Tranquilo',
    temperament: 'Afectuoso en reposo y dócil',
    summary: 'Hábitos de higiene consolidados en arenero. Busca proximidad constante durante periodos de descanso.',
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'can-03',
    name: 'Bruno',
    category: 'canino',
    breed: 'Bulldog Francés',
    age: '6 meses',
    estimatedWeight: '9.2 kg',
    habitatFit: 'Departamento sin exposición a calor extremo',
    aptApartment: true,
    vaccineStatus: 'Completo con registro de microchip',
    energyIndex: 'Bajo-moderado',
    temperament: 'Calmo, apegado y silencioso',
    summary: 'Estructura braquicefálica con requerimiento de paseos cortos y control de temperatura ambiental.',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fel-03',
    name: 'Nieve',
    category: 'felino',
    breed: 'Angora mestizo',
    age: '3 meses',
    estimatedWeight: '1.5 kg',
    habitatFit: 'Interiores con rutina de cepillado',
    aptApartment: true,
    vaccineStatus: 'Triple felina y leucemia negativa',
    energyIndex: 'Moderado',
    temperament: 'Sensible y de interacción suave',
    summary: 'Pelaje semilargo que exige mantenimiento regular. Convive favorablemente con otros felinos evaluados.',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'can-04',
    name: 'Maya',
    category: 'canino',
    breed: 'Husky Siberiano',
    age: '4 meses',
    estimatedWeight: '10.8 kg',
    habitatFit: 'Hogar con patio cerrado o tutores activos',
    aptApartment: false,
    vaccineStatus: 'Completo y desparasitación al día',
    energyIndex: 'Alto',
    temperament: 'Enérgica, exploradora y comunicativa',
    summary: 'Demanda enriquecimiento ambiental continuo y actividades de olfato para canalizar su nivel de actividad biológica.',
    imageUrl: 'https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fel-04',
    name: 'Mochi',
    category: 'felino',
    breed: 'British Shorthair',
    age: '5 meses',
    estimatedWeight: '2.3 kg',
    habitatFit: 'Departamento o casa con ambiente tranquilo',
    aptApartment: true,
    vaccineStatus: 'Completo con control veterinario',
    energyIndex: 'Bajo',
    temperament: 'Independiente, tolerante y sereno',
    summary: 'Carácter estable y predecible. Ideal para personas con esquemas de trabajo remoto o ritmos domésticos calmos.',
    imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80'
  }
];

const clinicalFacts = [
  'El olfato canino cuenta con hasta 300 millones de receptores olfativos, frente a los 6 millones presentes en el ser humano.',
  'La frecuencia respiratoria normal en felinos en reposo oscila entre 20 y 30 respiraciones por minuto.',
  'El periodo de socialización sensible en cachorros transcurre de forma crítica entre las 3 y las 14 semanas de desarrollo.',
  'Los felinos carecen de papilas gustativas para receptores de dulzor debido a una mutación fijada en el gen Tas1r2.',
  'La esterilización temprana previene de manera estadísticamente significativa patologías uterinas y neoplasias mamarias en hembras.',
  'El marcaje facial en gatos deposita feromonas de la fracción F3 con efecto apaciguador sobre su percepción del entorno territorial.'
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

  counterLabel.textContent = `${filtered.length} de ${specimens.length} registros corresponden a los parámetros aplicados`;

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div class="empty-state">
        <strong>Sin coincidencias registradas</strong>
        <p>No se localizaron registros bajo los términos o filtros seleccionados.</p>
      </div>
    `;
    return;
  }

  catalogGrid.innerHTML = filtered.map(item => `
    <article class="card-item" data-id="${item.id}">
      <div class="card-media">
        <img src="${item.imageUrl}" alt="Fotografía clínica de ${item.name}, raza ${item.breed}" loading="lazy">
        <span class="card-taxonomy">${item.category === 'canino' ? 'Canino' : 'Felino'}</span>
      </div>
      <div class="card-content">
        <div class="card-heading-row">
          <h2 class="card-title">${item.name}</h2>
          <span class="card-period">${item.age}</span>
        </div>
        <p class="card-species-info">${item.breed}</p>

        <ul class="spec-list">
          <li class="spec-entry">
            <span class="spec-name">Peso estimado</span>
            <span class="spec-value">${item.estimatedWeight}</span>
          </li>
          <li class="spec-entry">
            <span class="spec-name">Aptitud habitacional</span>
            <span class="spec-value">${item.aptApartment ? 'Apto departamento' : 'Requiere jardín'}</span>
          </li>
          <li class="spec-entry">
            <span class="spec-name">Esquema sanitario</span>
            <span class="spec-value">${item.vaccineStatus}</span>
          </li>
        </ul>

        <div class="card-actions">
          <button class="record-btn" data-trigger="inspect" data-id="${item.id}">Consultar ficha técnica</button>
        </div>
      </div>
    </article>
  `).join('');
}

function displaySpecimenDetail(id) {
  const item = specimens.find(entry => entry.id === id);
  if (!item) return;

  dialogContent.innerHTML = `
    <img src="${item.imageUrl}" alt="Ficha ampliada de ${item.name}" class="dialog-image">
    <div class="dialog-inner-body">
      <div class="dialog-title-group">
        <h2 id="dialog-title" class="dialog-title">${item.name}</h2>
        <span class="dialog-breed">${item.breed}, ${item.age}</span>
      </div>

      <p class="dialog-description">${item.summary}</p>

      <div class="assessment-grid">
        <div class="assessment-item">
          <span class="assessment-label">Espacio recomendado</span>
          <span class="assessment-value">${item.habitatFit}</span>
        </div>
        <div class="assessment-item">
          <span class="assessment-label">Nivel de energía</span>
          <span class="assessment-value">${item.energyIndex}</span>
        </div>
        <div class="assessment-item">
          <span class="assessment-label">Temperamento evaluado</span>
          <span class="assessment-value">${item.temperament}</span>
        </div>
        <div class="assessment-item">
          <span class="assessment-label">Estado de vacunación</span>
          <span class="assessment-value">${item.vaccineStatus}</span>
        </div>
      </div>

      <button id="inquire-btn" class="dialog-primary-action">Iniciar solicitud de entrevista para acogida</button>
    </div>
  `;

  specModal.showModal();
  emitFeedbackTone(520, 0.09);

  document.getElementById('inquire-btn').addEventListener('click', () => {
    emitFeedbackTone(680, 0.12);
    alert(`Se ha registrado tu solicitud para el ejemplar ${item.name}. Un médico veterinario del centro coordinará la entrevista de validación etológica.`);
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
  soundText.textContent = isSoundActive ? 'Sonido activado' : 'Sonido desactivado';
  if (isSoundActive) {
    initAudioSystem();
    emitFeedbackTone(600, 0.1);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  rotateFactDisplay();
  updateCatalogView();
});
