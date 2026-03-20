// ===== NAMA OTOMATIS DARI LINK =====
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('to') || "Andi Abd Wahab. Z";
document.getElementById("nama").innerText = nama;

// ===== SHARE WHATSAPP =====
function shareWA(){
  const link = window.location.href;
  const text = "Selamat Idul Fitri 🙏\n" + link;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
}

// ===== FIREWORK =====
const canvas = document.getElementById("firework");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(){
  for(let i=0;i<50;i++){
    particles.push({
      x:canvas.width/2,
      y:canvas.height/2,
      dx:(Math.random()-0.5)*5,
      dy:(Math.random()-0.5)*5,
      life:100
    });
  }
}

function draw(){
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  particles.forEach((p,i)=>{
    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    ctx.fillStyle = "gold";
    ctx.fillRect(p.x,p.y,2,2);

    if(p.life <= 0) particles.splice(i,1);
  });

  requestAnimationFrame(draw);
}

setInterval(createFirework,2000);
draw();
