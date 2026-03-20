const app = document.getElementById("app");
const music = document.getElementById("music");

// FOTO KAMU
const profile = "https://i.ibb.co.com/Pspvz9RZ/foto.png";

// DATA VIDEO
const videos = [
  {
    src:"video1.mp4",
    user:"@akun_kamu",
    desc:"🌙 Ramadhan vibes",
    likes:120,
    comments:["Keren banget 🔥","MasyaAllah 🙏","Mantap 👍"]
  },
  {
    src:"video2.mp4",
    user:"@akun_kamu",
    desc:"✨ Malam Ramadhan",
    likes:300,
    comments:["Auto masuk FYP 😍","Bagus banget","Keren parah"]
  }
];

// RENDER
videos.forEach(v=>{
  const el = document.createElement("div");
  el.className = "video-item";

  el.innerHTML = `
    <video src="${v.src}" loop></video>

    <div class="overlay">
      <div class="profile">
        <img src="${profile}">
        <b>${v.user}</b>
      </div>
      <p>${v.desc}</p>
    </div>

    <div class="right">
      <div class="btn" onclick="like(this)">❤️ ${v.likes}</div>
      <div class="btn" onclick="openComment(this)">💬</div>
      <div class="btn" onclick="playMusic()">🎵</div>
    </div>

    <div class="comment-box">
      ${v.comments.map(c=>`<p>${c}</p>`).join("")}
    </div>
  `;

  app.appendChild(el);
});

// LIKE
function like(el){
  let num = parseInt(el.innerText.replace(/\D/g,'')) + 1;
  el.innerText = "❤️ " + num;
}

// COMMENT
function openComment(btn){
  const box = btn.parentElement.parentElement.querySelector(".comment-box");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

// MUSIC
function playMusic(){
  music.play();
}

// AUTO PLAY VIDEO
document.addEventListener("scroll", ()=>{
  document.querySelectorAll("video").forEach(v=>v.pause());

  const el = document.elementFromPoint(window.innerWidth/2, window.innerHeight/2);
  if(el && el.tagName === "VIDEO"){
    el.play();
  }
});

// VIEW COUNT NAIK
setInterval(()=>{
  document.querySelectorAll(".btn").forEach(btn=>{
    if(btn.innerText.includes("❤️")){
      let num = parseInt(btn.innerText.replace(/\D/g,'')) + Math.floor(Math.random()*5);
      btn.innerText = "❤️ " + num;
    }
  });
},2000);