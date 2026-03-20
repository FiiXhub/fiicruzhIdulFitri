function playMusic(){
  document.getElementById("music").play();
}

// efek bintang random
setInterval(()=>{
  document.body.style.background =
    "linear-gradient(45deg,#" + Math.floor(Math.random()*16777215).toString(16) + ",#000)";
},4000);
