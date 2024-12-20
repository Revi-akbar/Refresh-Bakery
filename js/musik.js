const musik = document.getElementById("logo-musik");
const bgMusik = document.getElementById("bg-musik");

musik.addEventListener("click", () => {
  if (bgMusik.paused) {
    bgMusik.play();
  } else {
    bgMusik.pause();
    bgMusik.currentTime = 0;
  }
});
