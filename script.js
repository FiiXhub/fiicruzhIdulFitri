// ===== PARAMETER LINK =====
const params = new URLSearchParams(window.location.search);
const nama = params.get("to") || "Andi Abd Wahab. Z";
const foto = params.get("img") || "https://i.ibb.co.com/Pspvz9RZ/foto.png";

document.getElementById("nama").innerText = nama;
document.getElementById("foto").src = foto;

// ===== MUSIC =====
const m1 = document.getElementById("music1");
const m2 = document.getElementById("music2");

document.body.addEventListener("click", ()=>{
  m1.muted = false;
  m1.play();
});

// ===== OPEN CARD =====
function openCard(){
  document.getElementById("card").classList.add("open");
  m1.pause();
  m2.play();
}

// ===== SHARE =====
function shareWA(){
  const link = window.location.href;
  window.open(`https://wa.me/?text=${encodeURIComponent("Selamat Idul Fitri 🙏\n"+link)}`);
}

// ===== PARTICLES =====
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let particles = [];

function create(){
  for(let i=0;i<5;i++){
    particles.push({
      x:Math.random()*canvas.width,
      y:0,
      size:Math.random()*3,
      speed:Math.random()*2+1
    });
  }
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach((p,i)=>{
    p.y += p.speed;
    ctx.fillStyle="gold";
    ctx.fillRect(p.x,p.y,p.size,p.size);

    if(p.y > canvas.height) particles.splice(i,1);
  });

  requestAnimationFrame(draw);
}

setInterval(create,200);
draw();
