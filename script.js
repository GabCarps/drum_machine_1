// Mappa dei suoni con tasti associati
const sounds = {
    'q': 'kick',
    'w': 'snare',
    'e': 'hihat',
    'a': 'tom',
    's': 'clap',
    'd': 'rimshot'
};

// Caricamento dei suoni
function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.wav`);
    audio.play();
}

// Gestione del click sui pulsanti
document.querySelectorAll('.pad').forEach(pad => {
    pad.addEventListener('click', () => {
        const sound = pad.getAttribute('data-sound');
        playSound(sound);
    });
});

// Gestione della pressione dei tasti
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (sounds[key]) {
        playSound(sounds[key]);
        const pad = document.querySelector(`.pad[data-sound="${sounds[key]}"]`);
        pad.classList.add('active');
        setTimeout(() => pad.classList.remove('active'), 100);
    }
});
