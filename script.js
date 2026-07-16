function verificarEmoji() {

  const respuesta = document.getElementById("emojiInput").value;
  const correcto = "🥹"; // aquí irá el emoji que nos identifica

  if (respuesta === correcto) {

    document.getElementById("pregunta").style.display = "none";

    const mensaje = document.getElementById("mensaje");
    mensaje.classList.remove("oculto");

    escribirMensaje();

  } else {

    document.getElementById("error").innerHTML =
      "Ese no es nuestro emoji, intenta otra vez ❤️";

  }

}


function escribirMensaje() {

  const texto =
  "Tengo un mensaje especial para ti 💌";

  let i = 0;

  const elemento =
  document.getElementById("textoEscrito");


  const intervalo = setInterval(() => {

    elemento.innerHTML += texto[i];

    i++;

    if (i >= texto.length) {
      clearInterval(intervalo);
    }

  }, 100);

}



function abrirCarta() {

  document.getElementById("mensaje")
  .style.display = "none";


  const carta =
  document.getElementById("carta");


  carta.classList.remove("oculto");

}
