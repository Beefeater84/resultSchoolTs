import './reset.scss';
import './styles.scss';
import * as path from "path";


const background: HTMLElement | null = document.getElementById('background');
const player: HTMLAudioElement | null = document.querySelector('audio#sound_player');
const volumeRatio: HTMLInputElement | null = document.querySelector('input[type="range"]');

const btns: NodeListOf<HTMLElement> = document.querySelectorAll('.box_sound_btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btn) {
            console.error('No btn')
            return;
        }

        setBgImage(btn);
        setSound(btn);

    });
})

if (volumeRatio) {
    volumeRatio.addEventListener('change', () => {
        if (!player || !volumeRatio) {
            console.error('No player or volumeRatio')
            return;
        }

        player.volume = Number(volumeRatio.value) / 100;
    })
}

const setBgImage = (btn: HTMLElement) => {

    const src = btn.getAttribute('data-imgSrc');

    if (!src || !background) {
        console.error('No src or background')
        return;
    }

    if (background.style.backgroundImage !== `url(${src})`)  {
        // If background image is not the same as src, set it
        background.style.backgroundImage = `url(${src})`;
    }
}

const setSound = (btn: HTMLElement) => {

    const soundPath = btn.getAttribute('data-sound')

    if(!soundPath) {
        console.error('No soundPath')
        return;
    }

    if(!player) {
        console.error('No player')
        return;
    }

    // Get the current sound to understand - if it is playing
    const currentSound = player.getAttribute('src')

    if (currentSound === soundPath && player.paused) {
        // If we push the button that is playing and audio is paused
        // we set Pause Icon and continue playing

        player.play()
        setPauseIcon(false, btn)
        return;
    }

    if(currentSound === soundPath && !player.paused){
        // If we push the button that is playing, we set Pause Icon and pause playing

        player.pause()
        setPauseIcon(true, btn)
        return;
    }

    // If it is a new sound - change the path, it will start  from the begining
    // and

    player.setAttribute('src', soundPath);
    removePauseIcon()
    player.play()
}

function setPauseIcon(isPlaying: boolean, btn: HTMLElement){
    removePauseIcon()

    if(isPlaying) {
        btn.classList.add('pause');
        const img = document.createElement('img');
        img.setAttribute('src', './assets/icons/pause.svg')
        img.setAttribute("width", "60")
        img.setAttribute("height", "60")
        img.setAttribute("id", "pauseIcon")

        btn.appendChild(img)
    }
}

function removePauseIcon(){
    btns.forEach(btn => {
        btn.classList.remove('pause');
        const pauseIcon = btn.querySelector('#pauseIcon')
        if (pauseIcon) {
            btn.removeChild(pauseIcon)
        }
    })
}