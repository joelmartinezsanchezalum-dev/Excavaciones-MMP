// El formulari és una prova: només mostra un missatge a la pàgina.
const formulari = document.getElementById("formulari");
const resultat = document.getElementById("resultat");

document.getElementById("boto").disabled = false;

formulari.addEventListener("submit", function (event) {
  event.preventDefault();
  resultat.textContent = "Prova completada. No s’han enviat dades ni s’ha fet cap reserva.";
});
