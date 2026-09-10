// Paws & Whiskers - Interactive logic with Web Audio API and state management

const petsData = [
  {
    id: 'perro-1',
    name: 'Balto',
    type: 'perrito',
    emojiType: '🐶',
    breed: 'Golden Retriever',
    age: '4 months',
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&w=800&q=80',
    traits: ['Playful', 'Affectionate', 'Water lover'],
    story: 'Balto is a golden bundle of cheerful energy who adores chasing tennis balls and welcoming everyone at the front door with happy tail wags.',
    stats: {
      energy: 90,
      cuddle: 95,
      curiosity: 80,
      napTime: 70
    },
    favTreat: 'Peanut butter biscuits and crunchy baby carrots.'
  },
  {
    id: 'gato-1',
    name: 'Luna',
    type: 'gatito',
    emojiType: '🐱',
    breed: 'Tabby Siamese',
    age: '3 months',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
    traits: ['Graceful', 'Attentive', 'Curious'],
    story: 'Luna spends quiet afternoons observing birds through the living room window and climbing to high shelves to oversee her realm with feline poise.',
    stats: {
      energy: 75,
      cuddle: 85,
      curiosity: 98,
      napTime: 85
    },
    favTreat: 'Tender salmon bites and brand new cardboard boxes.'
  },
  {
    id: 'perro-2',
    name: 'Milo',
    type: 'perrito',
    emojiType: '🐶',
    breed: 'Pembroke Welsh Corgi',
    age: '5 months',
    image: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=800&q=80',
    traits: ['Big ears', 'Joyful', 'Loyal'],
    story: 'With his short paws and bouncy trot, Milo turns every morning walk in the park into an adorable parade of smiles and joyful sprints.',
    stats: {
      energy: 85,
      cuddle: 90,
      curiosity: 88,
      napTime: 65
    },
    favTreat: 'Crisp apple slices and squeaky plush toys.'
  },
  {
    id: 'gato-2',
    name: 'Oliver',
    type: 'gatito',
    emojiType: '🐱',
    breed: 'Ginger European',
    age: '2 months',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    traits: ['Loud purrer', 'Mischievous', 'Sleepyhead'],
    story: 'Oliver is a sweet ginger whirlwind who will curl up into a deep, purring snooze on your lap the instant he hears a gentle voice.',
    stats: {
      energy: 70,
      cuddle: 99,
      curiosity: 92,
      napTime: 95
    },
    favTreat: 'Homemade tuna puree and soft wool pom-poms.'
  },
  {
    id: 'perro-3',
    name: 'Bruno',
    type: 'perrito',
    emojiType: '🐶',
    breed: 'French Bulldog',
    age: '6 months',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    traits: ['Easygoing', 'Clownish', 'Faithful'],
    story: 'Bruno has an endearing face and an extraordinarily gentle soul. His favorite hobby is snoring softly wrapped in a fleece blanket while movies play.',
    stats: {
      energy: 55,
      cuddle: 95,
      curiosity: 65,
      napTime: 92
    },
    favTreat: 'Banana bites and soothing belly rubs.'
  },
  {
    id: 'gato-3',
    name: 'Snow',
    type: 'gatito',
    emojiType: '🐱',
    breed: 'White Angora',
    age: '3.5 months',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    traits: ['Cloud-soft', 'Quiet', 'Vocal'],
    story: 'Snow looks straight out of a fairy tale with her fluffy white coat. She replies with melodious chirps whenever you gently call her name.',
    stats: {
      energy: 60,
      cuddle: 92,
      curiosity: 82,
      napTime: 88
    },
    favTreat: 'Shredded chicken and colorful feather wands.'
  },
  {
    id: 'perro-4',
    name: 'Maya',
    type: 'perrito',
    emojiType: '🐶',
    breed: 'Siberian Husky',
    age: '4 months',
    image: 'https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&w=800&q=80',
    traits: ['Explorer', 'Talkative', 'Clever'],
    story: 'Maya loves "singing" playful howls to ask for head scratches. Her bright eyes reflect an endless curiosity for outdoor adventures.',
    stats: {
      energy: 98,
      cuddle: 85,
      curiosity: 95,
      napTime: 60
    },
    favTreat: 'Summer ice cubes and trail running games.'
  },
  {
    id: 'gato-4',
    name: 'Mochi',
    type: 'gatito',
    emojiType: '🐱',
    breed: 'British Shorthair',
    age: '5 months',
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
    traits: ['Chubby cheeks', 'Serene', 'Photogenic'],
    story: 'With his round cheeks and calm demeanor, Mochi is a soothing desk companion who quietly settles beside your laptop keyboard while you work.',
    stats: {
      energy: 50,
      cuddle: 88,
      curiosity: 75,
      napTime: 96
    },
    favTreat: 'Fresh organic catnip and relaxing brushing sessions.'
  }
];

const curiosityFacts = [
  'Kittens spend nearly 70% of their day sleeping, which stimulates vital growth hormones and preserves muscle agility.',
  'A dog’s nose print is completely unique and individual, just like a human fingerprint.',
  'A cat’s purr vibrates at a healing frequency between 25 and 150 Hz, scientifically known to lower blood pressure and relieve human stress.',
  'Puppies are born without sight or hearing; they begin opening their eyes and hearing sounds around 10 to 14 days after birth.',
  'Cat whiskers are packed with nerve receptors that detect micro-changes in air currents and measure exact passage dimensions.',
  'A puppy can learn and recognize over 150 unique words and human gestures through gentle positive reinforcement training.',
  'When a cat slowly blinks at you across a room, it is sharing the feline equivalent of a warm kiss and complete trust.'
];

let currentFilter = 'all';
let searchQuery = '';
let soundEnabled = true;
let currentFactIndex = 0;
let favoritePetIds = JSON.parse(localStorage.getItem('patitas_favs') || '[]');

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
      console.warn('Audio unavailable', e);
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
      console.warn('Audio unavailable', e);
    }
  },

  purr() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;

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
      console.warn('Audio error', e);
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
      osc.frequency.setValueAtTime(587.33, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);

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

function renderPets() {
  const query = searchQuery.trim().toLowerCase();
  
  const filtered = petsData.filter(pet => {
    if (currentFilter === 'perrito' && pet.type !== 'perrito') return false;
    if (currentFilter === 'gatito' && pet.type !== 'gatito') return false;
    if (currentFilter === 'favs' && !favoritePetIds.includes(pet.id)) return false;

    if (query) {
      const inName = pet.name.toLowerCase().includes(query);
      const inBreed = pet.breed.toLowerCase().includes(query);
      const inTraits = pet.traits.some(t => t.toLowerCase().includes(query));
      return inName || inBreed || inTraits;
    }
    return true;
  });

  resultsCountEl.textContent = `Showing ${filtered.length} furry companion${filtered.length === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    petsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--mocha-subtext0);">
        <p style="font-size: 3rem; margin-bottom: 0.5rem;">🐾</p>
        <h3 style="font-size: 1.25rem; color: var(--mocha-text); margin-bottom: 0.5rem;">No furry friends found</h3>
        <p>Try searching with another keyword or switching the category filter above.</p>
      </div>
    `;
    return;
  }

  petsGrid.innerHTML = filtered.map(pet => {
    const isFav = favoritePetIds.includes(pet.id);
    return `
      <article class="pet-card" data-id="${pet.id}">
        <div class="pet-image-box">
          <img src="${pet.image}" alt="${pet.name}, ${pet.breed}" loading="lazy">
          <span class="pet-type-tag">${pet.emojiType} ${pet.type === 'perrito' ? 'Puppy' : 'Kitten'}</span>
          <button class="pet-fav-btn ${isFav ? 'is-fav' : ''}" data-action="fav" data-id="${pet.id}" title="Save to favorites" aria-label="Favorite">
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
            <button class="details-btn" data-action="details" data-id="${pet.id}">Meet story</button>
            <button class="pet-quick-sound" data-action="sound" data-type="${pet.type}" title="Listen to sound">
              ${pet.type === 'perrito' ? '🐶' : '🐱'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

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

function openPetModal(petId) {
  const pet = petsData.find(p => p.id === petId);
  if (!pet) return;

  modalContent.innerHTML = `
    <img src="${pet.image}" alt="${pet.name}" class="modal-hero-img">
    <div class="modal-content-inner">
      <div class="modal-title-row">
        <h2 class="modal-name">${pet.name} ${pet.emojiType}</h2>
        <span class="modal-breed-badge">${pet.breed}, ${pet.age}</span>
      </div>
      <p class="modal-story">${pet.story}</p>

      <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--mocha-rosewater); margin-bottom: 0.8rem;">Personality &amp; Habits</h4>
      <div class="stats-grid">
        <div class="stat-item">
          <div style="display: flex; justify-content: space-between;">
            <span class="stat-label">Energy Level</span>
            <span class="stat-label">${pet.stats.energy}%</span>
          </div>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width: ${pet.stats.energy}%;"></div>
          </div>
        </div>
        <div class="stat-item">
          <div style="display: flex; justify-content: space-between;">
            <span class="stat-label">Cuddle Demand</span>
            <span class="stat-label">${pet.stats.cuddle}%</span>
          </div>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width: ${pet.stats.cuddle}%;"></div>
          </div>
        </div>
        <div class="stat-item">
          <div style="display: flex; justify-content: space-between;">
            <span class="stat-label">Curiosity</span>
            <span class="stat-label">${pet.stats.curiosity}%</span>
          </div>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width: ${pet.stats.curiosity}%;"></div>
          </div>
        </div>
        <div class="stat-item">
          <div style="display: flex; justify-content: space-between;">
            <span class="stat-label">Nap Affinity</span>
            <span class="stat-label">${pet.stats.napTime}%</span>
          </div>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width: ${pet.stats.napTime}%;"></div>
          </div>
        </div>
      </div>

      <p style="font-size: 0.88rem; color: var(--mocha-subtext0); margin-bottom: 1.4rem;">
        <strong style="color: var(--mocha-peach);">Favorite treat:</strong> ${pet.favTreat}
      </p>

      <div class="modal-actions">
        <button id="modal-pet-btn" class="modal-pet-love-btn">
          <span>💖</span> Give cuddles
        </button>
        <button id="modal-adopt-btn" class="modal-adopt-btn">
          I want to adopt!
        </button>
      </div>
    </div>
  `;

  petModal.classList.add('is-open');
  petModal.setAttribute('aria-hidden', 'false');

  document.getElementById('modal-pet-btn').addEventListener('click', (e) => {
    if (pet.type === 'perrito') SoundFX.bark();
    else SoundFX.purr();
    triggerFloatingHeart(e.clientX, e.clientY);
  });

  document.getElementById('modal-adopt-btn').addEventListener('click', () => {
    SoundFX.treat();
    alert(`Congratulations! You are interested in ${pet.name}. Remember to prepare your home, provide high-quality nourishment, and offer lifelong companionship.`);
  });
}

function closePetModal() {
  petModal.classList.remove('is-open');
  petModal.setAttribute('aria-hidden', 'true');
}

function showCuriosity() {
  factTextEl.style.opacity = '0';
  setTimeout(() => {
    factTextEl.textContent = `“${curiosityFacts[currentFactIndex]}”`;
    factTextEl.style.opacity = '1';
    currentFactIndex = (currentFactIndex + 1) % curiosityFacts.length;
  }, 200);
}

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

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderPets();
  });
});

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderPets();
});

modalCloseBtn.addEventListener('click', closePetModal);
petModal.addEventListener('click', (e) => {
  if (e.target === petModal) closePetModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && petModal.classList.contains('is-open')) {
    closePetModal();
  }
});

nextFactBtn.addEventListener('click', () => {
  SoundFX.treat();
  showCuriosity();
});

soundToggleBtn.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    soundIcon.textContent = '🔊';
    soundLabel.textContent = 'Sound enabled';
    getAudioContext();
  } else {
    soundIcon.textContent = '🔇';
    soundLabel.textContent = 'Sound muted';
  }
});

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

document.addEventListener('DOMContentLoaded', () => {
  showCuriosity();
  renderPets();
});
