const playBtn = document.getElementById("playBtn");
const music = document.getElementById("music");

let isPlaying = false;

playBtn.addEventListener("click", () => {
    if (!isPlaying) {
        music.play();
        playBtn.innerHTML = "⏸ Pause Music";
        isPlaying = true;
    } else {
        music.pause();
        playBtn.innerHTML = "▶ Play Music";
        isPlaying = false;
    }
});

// Music khatam hone par button reset
music.addEventListener("ended", () => {
    playBtn.innerHTML = "▶ Play Music";
    isPlaying = false;
});

// Page load animation
window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease";
        document.body.style.opacity = "1";
    }, 100);
});
