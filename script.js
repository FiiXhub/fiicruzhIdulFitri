// ===== NAMA OTOMATIS =====
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('to') || "Andi Abd Wahab. Z";
document.getElementById("nama").innerText = nama;

// ===== MUSIC =====
const music = document.getElementById("music");

function toggleMusic(){
  if(music.paused){
    music.muted = false;
    music.play();
  } else {
    music.pause();
  }
}

// AUTO PLAY (SEMI)
document.body.addEventListener("click", () => {
  music.muted = false;
  music.play();
});

// ===== SHARE WA =====
function shareWA(){
  const link = window.location.href;
  const text = `🌙 Selamat Hari Raya Idul Fitri\n\n${link}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}
