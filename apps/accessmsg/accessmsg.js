// tableau contenant les messages préenregistrés
const messages = [
  "J'ai faim",
  "Je suis fatigué",
  "J'ai mal",
  "J'ai soif",
];

let current = 0;

function afficherMessage() {
  // Efface l'écran et affiche le message actuel
  g.clear();
  g.setFont("Vector", 10);
  g.drawString(messages[current], 20, 100, true);
  g.flip(); // Actualise l'écran
}

// Configuration des boutons pour naviguer entre les messages, utilisation de % pour un comportement cyclique.
setWatch(() => {
  current = (current + 1) % messages.length;
  afficherMessage();
}, BTN1, { repeat: true, edge: "rising" });

setWatch(() => {
  current = (current - 1 + messages.length) % messages.length;
  afficherMessage();
}, BTN2, { repeat: true, edge: "rising" });

// Affiche le premier message au démarrage
afficherMessage();
// emulateur : https://www.espruino.com/ide/?emulator#
// app loader bangle : https://banglejs.com/apps/
