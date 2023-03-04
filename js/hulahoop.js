let estadoBaile = "noactivo";

/* sonidos */
let sonidoHulaHoop = document.querySelector("#totoro_hulahoop");

/* divs */

let totoro = document.querySelector("#totoro");

totoro.addEventListener("click",()=>{
  controlarTotoro()
})

function controlarTotoro() {
  if (estadoBaile == "noactivo") {
    estadoBaile = "activo";
    sonidoBaile()
    totoro.classList.add("totoro_activo");
  } else {
    estadoBaile = "noactivo";
    sonidoBaile()
    totoro.classList.remove("totoro_activo");
  }
}

function sonidoBaile() {
  if (sonidoHulaHoop.paused) {
  sonidoHulaHoop.play();
  } else {
  sonidoHulaHoop.pause();
  sonidoHulaHoop.currentTime=0;
  }
}
