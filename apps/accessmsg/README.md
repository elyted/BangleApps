Appli JavaScript pour montre bangle.js conçue pour afficher une série de messages prédéfinis sur la montre. Le code permet à l'utilisateur de naviguer entre les messages en utilisant deux boutons.

  Quatre messages ("J'ai faim", "Je suis fatigué", "J'ai mal", "J'ai soif") sont stockés dans un tableau
la variable current est utilisé pour sélectionner le message actuel à afficher. Il commence à 0, correspondant au premier message du tableau.


La fonction afficherMessage gère l'affichage des messages sur l'écran. Elle commence par effacer l'écran avec g.clear(), définit la police du texte via g.setFont("Vector", 10), puis affiche le message correspondant à l'indice current avec g.drawString(messages[current], 20, 100, true). L'écran est mis à jour avec g.flip().


setWatch pour BTN1: Augmente l'indice current de 1 à chaque appui sur le bouton, et revient à 0 après avoir atteint le dernier message grâce à l'opération modulo messages.length. La fonction afficherMessage est appelée pour mettre à jour l'affichage.

setWatch pour BTN2: Diminue l'indice current de 1 à chaque appui. Si current est à 0, il passe au dernier message, permettant une navigation cyclique en arrière. L'ajout de messages.length avant de prendre le modulo empêche current de devenir négatif.

Les options { repeat: true, edge: "rising" } appliquées dans setWatch signifient que l'action est déclenchée à la montée du signal du bouton (appui), et que le bouton peut être maintenu enfoncé pour répéter l'action.

afficherMessage() est exécutée au démarrage pour afficher le premier message.

