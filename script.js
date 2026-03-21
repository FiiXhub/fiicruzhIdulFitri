const params = new URLSearchParams(window.location.search);

const nama = params.get("to") || "Andi Abd Wahab. Z";
const foto = params.get("img") || "https://i.ibb.co.com/Pspvz9RZ/foto.png";

document.getElementById("nama").innerText = nama;
document.getElementById("foto").src = foto;

// MUSIC
const m1 = document.getElementById("music1");
const m2 = document.getElementById("music2");

document.body.addEventListener("click", ()=>{
  m1.muted = false;
  m1.play();
});

// OPEN CARD
function openCard(){
  document.getElementById("card").classList.add("open");
  m1.pause();
  m2.play();
}

// SHARE WA
function shareWA(){
  const link = window.location.href;
  window.open(`https://wa.me/?text=${encodeURIComponent("🌙 Selamat Idul Fitri 🙏\n"+link)}`);
}
