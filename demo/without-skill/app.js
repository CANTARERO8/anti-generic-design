// Patitas & Bigotes - Lógica interactiva con Web Audio API y gestión de estados

const petsData = [
  {
    id: 'perro-1',
    name: 'Balto',
    type: 'perrito',
    emojiType: '🐶',
    breed: 'Golden Retriever',
    age: '4 meses',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=800&q=80',
    traits: ['Juguetón', 'Cariñoso', 'Amante del agua'],
    story: 'Balto es una bolita dorada de energía que adora perseguir pelotas de tenis y dar lengüetazos de bienvenida a todos los que cruzan la puerta.',
    stats: {
      energy: 90,
      cuddle: 95,
      curiosity: 80,
      napTime: 70
    },
    favTreat: 'Galletitas de mantequilla de maní y zanahorias baby.'
  },
  {
    id: 'gato-1',
    name: 'Luna',
    type: 'gatito',
    emojiType: '🐱',
    breed: 'Siamés Atigrado',
    age: '3 meses',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
    traits: ['Elegante', 'Observadora', 'Curiosa'],
    story: 'Luna pasa horas contemplando pajaritos desde la ventana y trepando a las repisas más altas para supervisar todo su reino con distinción.',
    stats: {
      energy: 75,
      cuddle: 85,
      curiosity: 98,
      napTime: 85
    },
    favTreat: 'Filetitos tiernos de salmón y cajas de cartón nuevas.'
  },
  {
    id: 'perro-2',
    name: 'Milo',
    type: 'perrito',
    emojiType: '🐶',
    breed: 'Corgi Galés',
    age: '5 meses',
    image: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=800&q=80',
    traits: ['Orejas grandes', 'Alegre', 'Leal'],
    story: 'Con sus patitas cortas y su andar saltarín, Milo convierte cada paseo por el parque en un auténtico festival de sonrisas y trotes simpáticos.',
    stats: {
      energy: 85,
      cuddle: 90,
      curiosity: 88,
      napTime: 65
    },
    favTreat: 'Manzana crujiente y peluches que hacen ruidito.'
  },
  {
    id: 'gato-2',
    name: 'Oliver',
    type: 'gatito',
    emojiType: '🐱',
    breed: 'Europeo Naranja',
    age: '2 meses',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    traits: ['Ronroneador', 'Travieso', 'Dormilón'],
    story: 'Oliver es un dulce torbellino color fuego que se queda profundamente dormido en tu regazo tan pronto como escucha una voz suave.',
    stats: {
      energy: 70,
      cuddle: 99,
      curiosity: 92,
      napTime: 95
    },
    favTreat: 'Crema de atún casera y pompones de lana.'
  },
  {
    id: 'perro-3',
    name: 'Bruno',
    type: 'perrito',
    emojiType: '🐶',
    breed: 'Bulldog Francés',
    age: '6 meses',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    traits: ['Tranquilo', 'Payasito', 'Fiel'],
    story: 'Bruno tiene una expresión graciosa y un corazón noble. Su actividad preferida es roncar plácidamente sobre una mantita suave mientras miras películas.',
    stats: {
      energy: 55,
      cuddle: 95,
      curiosity: 65,
      napTime: 92
    },
    favTreat: 'Pedacitos de plátano y masajes detrás de las orejitas.'
  },
  {
    id: 'gato-3',
    name: 'Nieve',
    type: 'gatito',
    emojiType: '🐱',
    breed: 'Angora Blanco',
    age: '3 meses y medio',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    traits: ['Suave como nube', 'Tranquila', 'Vocal'],
    story: 'Nieve parece salida de un cuento de hadas con su pelaje esponjoso. Suele responder con maullidos dulces cada vez que pronuncias su nombre.',
    stats: {
      energy: 60,
      cuddle: 92,
      curiosity: 82,
      napTime: 88
    },
    favTreat: 'Pollo desmenuzado y plumeros de colores.'
  },
  {
    id: 'perro-4',
    name: 'Maya',
    type: 'perrito',
    emojiType: '🐶',
    breed: 'Husky Siberiano',
    age: '4 meses',
    image: 'https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&w=800&q=80',
    traits: ['Exploradora', 'Cantante', 'Inteligente'],
    story: 'Maya heredó la voz de sus ancestros y no duda en "hablarte" para pedir caricias. Su mirada despierta refleja una curiosidad insaciable por el mundo exterior.',
    stats: {
      energy: 98,
      cuddle: 85,
      curiosity: 95,
      napTime: 60
    },
    favTreat: 'Cubitos de hielo en verano y paseos por senderos.'
  },
  {
    id: 'gato-4',
    name: 'Mochi',
    type: 'gatito',
    emojiType: '🐱',
    breed: 'British Shorthair',
    age: '5 meses',
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
    traits: ['Pofachón', 'Sereno', 'Fotogénico'],
    story: 'Con sus mejillas redonditas y porte distinguido, Mochi es un compañero silencioso y reconfortante que siempre se sienta a tu lado mientras trabajas.',
    stats: {
      energy: 50,
      cuddle: 88,
      curiosity: 75,
      napTime: 96
    },
    favTreat: 'Catnip fresco y sesiones de cepillado relajante.'
  }
];

const curiosityFacts = [
  'Los gatitos pasan cerca del 70% de su vida durmiendo, lo que les ayuda a crecer y mantener su agilidad.',
  'La nariz de cada perrito tiene un patrón de líneas único e irrepetible, equivalente a una huella dactilar humana.',
  'El ronroneo de los gatos vibra a una frecuencia de entre 25 y 150 Hz, capaz de ayudar a sanar tejidos y reducir el estrés en personas.',
  'Los cachorros nacen sordos y ciegos; empiezan a abrir los ojos y escuchar recién entre los 10 y 14 días de vida.',
  'Los bigotes de los gatos están llenos de terminaciones nerviosas que les permiten detectar corrientes de aire y medir espacios exactos.',
  'Un perro puede aprender a reconocer más de 150 palabras y señales gestuales con entrenamiento positivo.',
  'Cuando un gato parpadea despacio mirándote, te está enviando el equivalente felino a un beso y una muestra de total confianza.'
];

// Estado de la aplicación
let currentFilter = 'all';
let searchQuery = '';
let soundEnabled = true;
let currentFactIndex = 0;
let favoritePetIds = JSON.parse(localStorage.getItem('patitas_favs') || '[]');

// Inicialización de Web Audio API
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Síntesis de Sonidos Nativos
const SoundFX = {
  bark() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(450, now);
      filter.Q.setValueAtTime(3, now);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.12);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.4, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {
      console.warn('Audio no disponible aún', e);
    }
  },

  meow() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(500, now);
      osc.frequency.linearRampToValueAtTime(820, now + 0.18);
      osc.frequency.linearRampToValueAtTime(420, now + 0.42);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.44);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.45);
    } catch (e) {
      console.warn('Audio no disponible aún', e);
    }
  },

  purr() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      // Sonido de ronroneo grave modulado
      const osc = ctx.createOscillator();
      const mod = ctx.createOscillator();
      const modGain = ctx.createGain();
      const gain = ctx.createGain();

      mod.frequency.setValueAtTime(25, now);
      modGain.gain.setValueAtTime(15, now);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(70, now);

      mod.connect(modGain);
      modGain.connect(osc.frequency);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.2);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      mod.start(now);
      osc.start(now);
      mod.stop(now + 0.82);
      osc.stop(now + 0.82);
    } catch (e) {
      console.warn('Audio no disponible', e);
    }
  },

  treat() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.36);
    } catch (e) {
      console.warn('Audio error', e);
    }
  }
};

// Referencias DOM
const petsGrid = document.getElementById('pets-grid');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const resultsCountEl = document.getElementById('results-count');
const factTextEl = document.getElementById('fact-text');
const nextFactBtn = document.getElementById('next-fact-btn');
const soundToggleBtn = document.getElementById('sound-toggle-btn');
const soundIcon = document.getElementById('sound-icon');
const soundLabel = document.getElementById('sound-label');

const petModal = document.getElementById('pet-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalContent = document.getElementById('modal-content');

const btnWoof = document.getElementById('btn-woof');
const btnPurr = document.getElementById('btn-purr');
const btnPat = document.getElementById('btn-pat');

// Renderizado de Tarjetas de Mascotas
function renderPets() {
  const query = searchQuery.trim().toLowerCase();
  
  const filtered = petsData.filter(pet => {
    // Filtro por categoría
    if (currentFilter === 'perrito' && pet.type !== 'perrito') return false;
    if (currentFilter === 'gatito' && pet.type !== 'gatito') return false;
    if (currentFilter === 'favs' && !favoritePetIds.includes(pet.id)) return false;

    // Filtro por búsqueda
    if (query) {
      const inName = pet.name.toLowerCase().includes(query);
      const inBreed = pet.breed.toLowerCase().includes(query);
      const inTraits = pet.traits.some(t => t.toLowerCase().includes(query));
      return inName || inBreed || inTraits;
    }
    return true;
  });

  resultsCountEl.textContent = `Mostrando ${filtered.length} compañero${filtered.length === 1 ? '' : 's'} peludo${filtered.length === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    petsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--mocha-subtext0);">
        <p style="font-size: 3rem; margin-bottom: 0.5rem;">🐾</p>
        <h3 style="font-size: 1.25rem; color: var(--mocha-text); margin-bottom: 0.5rem;">No se encontraron amiguitos con ese criterio</h3>
        <p>Prueba buscando con otro término o seleccionando otra categoría arriba.</p>
      </div>
    `;
    return;
  }

  petsGrid.innerHTML = filtered.map(pet => {
    const isFav = favoritePetIds.includes(pet.id);
    return `
      <article class="pet-card" data-id="${pet.id}">
        <div class="pet-image-box">
          <img src="${pet.image}" alt="${pet.name}, cachorro de ${pet.breed}" loading="lazy">
          <span class="pet-type-tag">${pet.emojiType} ${pet.type === 'perrito' ? 'Perrito' : 'Gatito'}</span>
          <button class="pet-fav-btn ${isFav ? 'is-fav' : ''}" data-action="fav" data-id="${pet.id}" title="Guardar en favoritos" aria-label="Favorito">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="pet-card-body">
          <div class="pet-title-row">
            <h3 class="pet-name">${pet.name}</h3>
            <span class="pet-age">${pet.age}</span>
          </div>
          <p class="pet-breed">${pet.breed}</p>
          <div class="personality-tags">
            ${pet.traits.map(t => `<span class="trait-chip">${t}</span>`).join('')}
          </div>
          <div class="pet-card-footer">
            <button class="details-btn" data-action="details" data-id="${pet.id}">Conocer historia</button>
            <button class="pet-quick-sound" data-action="sound" data-type="${pet.type}" title="Escuchar sonido">
              ${pet.type === 'perrito' ? '🐶' : '🐱'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Alternar Favorito
function toggleFavorite(id, event) {
  if (favoritePetIds.includes(id)) {
    favoritePetIds = favoritePetIds.filter(favId => favId !== id);
  } else {
    favoritePetIds.push(id);
    triggerFloatingHeart(event.clientX, event.clientY);
    SoundFX.treat();
  }
  localStorage.setItem('patitas_favs', JSON.stringify(favoritePetIds));
  renderPets();
}

// Generar Corazón Flotante
function triggerFloatingHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.textContent = '💖';
  heart.style.left = `${x || window.innerWidth / 2}px`;
  heart.style.top = `${y || window.innerHeight / 2}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1200);
}

// Abrir Modal de Mascota
function openPetModal(petId) {
  const pet = petsData.find(p => p.id === petId);
  if (!pet) return;

  modalContent.innerHTML = `
    <img src="${pet.image}" alt="${pet.name}" class="modal-hero-img">
    <div class="modal-content-inner">
      <div class="modal-title-row">
        <h2 class="modal-name">${pet.name} ${pet.emojiType}</h2>
        <span class="modal-breed-badge">${pet.breed} • ${pet.age}</span>
      </div>
      <p class="modal-story">${pet.story}</p>

      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--mocha-rosewater); margin-bottom: 0.8rem;">Personalidad y Hábitos</h4>
      <div class="stats-grid">
        <div class="stat-item">
          <div style="display: flex; justify-content: space-between;">
            <span class="stat-label">Nivel de Energía</span>
            <span class="stat-label">${pet.stats.energy}%</span>
          </div>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width: ${pet.stats.energy}%;"></div>
          </div>
        </div>
        <div class="stat-item">
          <div style="display: flex; justify-content: space-between;">
            <span class="stat-label">Demanda de Mimos</span>
            <span class="stat-label">${pet.stats.cuddle}%</span>
          </div>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width: ${pet.stats.cuddle}%;"></div>
          </div>
        </div>
        <div class="stat-item">
          <div style="display: flex; justify-content: space-between;">
            <span class="stat-label">Curiosidad</span>
            <span class="stat-label">${pet.stats.curiosity}%</span>
          </div>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width: ${pet.stats.curiosity}%;"></div>
          </div>
        </div>
        <div class="stat-item">
          <div style="display: flex; justify-content: space-between;">
            <span class="stat-label">Afinidad a la Siesta</span>
            <span class="stat-label">${pet.stats.napTime}%</span>
          </div>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width: ${pet.stats.napTime}%;"></div>
          </div>
        </div>
      </div>

      <p style="font-size: 0.88rem; color: var(--mocha-subtext0); margin-bottom: 1.4rem;">
        <strong style="color: var(--mocha-peach);">Premio preferido:</strong> ${pet.favTreat}
      </p>

      <div class="modal-actions">
        <button id="modal-pet-btn" class="modal-pet-love-btn">
          <span>💖</span> Dar cariñito
        </button>
        <button id="modal-adopt-btn" class="modal-adopt-btn">
          ¡Quiero adoptarlo!
        </button>
      </div>
    </div>
  `;

  petModal.classList.add('is-open');
  petModal.setAttribute('aria-hidden', 'false');

  // Eventos internos del modal
  document.getElementById('modal-pet-btn').addEventListener('click', (e) => {
    if (pet.type === 'perrito') SoundFX.bark();
    else SoundFX.purr();
    triggerFloatingHeart(e.clientX, e.clientY);
  });

  document.getElementById('modal-adopt-btn').addEventListener('click', () => {
    SoundFX.treat();
    alert(`¡Felicidades! Te has interesado en ${pet.name}. Recuerda siempre acondicionar tu hogar, preparar alimentos de alta calidad y darle un entorno lleno de afecto y seguridad.`);
  });
}

function closePetModal() {
  petModal.classList.remove('is-open');
  petModal.setAttribute('aria-hidden', 'true');
}

// Curiosidad Aleatoria
function showCuriosity() {
  factTextEl.style.opacity = '0';
  setTimeout(() => {
    factTextEl.textContent = `«${curiosityFacts[currentFactIndex]}»`;
    factTextEl.style.opacity = '1';
    currentFactIndex = (currentFactIndex + 1) % curiosityFacts.length;
  }, 200);
}

// Manejador de eventos en el grid de mascotas
petsGrid.addEventListener('click', (e) => {
  const favBtn = e.target.closest('[data-action="fav"]');
  if (favBtn) {
    const id = favBtn.dataset.id;
    toggleFavorite(id, e);
    return;
  }

  const detailsBtn = e.target.closest('[data-action="details"]');
  if (detailsBtn) {
    const id = detailsBtn.dataset.id;
    openPetModal(id);
    return;
  }

  const soundBtn = e.target.closest('[data-action="sound"]');
  if (soundBtn) {
    const type = soundBtn.dataset.type;
    if (type === 'perrito') SoundFX.bark();
    else SoundFX.meow();
    return;
  }
});

// Filtros de categoría
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderPets();
  });
});

// Búsqueda en tiempo real
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderPets();
});

// Cierre de modal
modalCloseBtn.addEventListener('click', closePetModal);
petModal.addEventListener('click', (e) => {
  if (e.target === petModal) closePetModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && petModal.classList.contains('is-open')) {
    closePetModal();
  }
});

// Curiosidades
nextFactBtn.addEventListener('click', () => {
  SoundFX.treat();
  showCuriosity();
});

// Alternar Sonido
soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    soundIcon.textContent = '🔊';
    soundLabel.textContent = 'Sonido activado';
    getAudioContext();
  } else {
    soundIcon.textContent = '🔇';
    soundLabel.textContent = 'Sonido silenciado';
  }
});

// Botones de Mimos Interactivos
btnWoof.addEventListener('click', (e) => {
  SoundFX.bark();
  triggerFloatingHeart(e.clientX, e.clientY);
});

btnPurr.addEventListener('click', (e) => {
  SoundFX.purr();
  triggerFloatingHeart(e.clientX, e.clientY);
});

btnPat.addEventListener('click', (e) => {
  SoundFX.treat();
  triggerFloatingHeart(e.clientX, e.clientY);
});

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  showCuriosity();
  renderPets();
});
