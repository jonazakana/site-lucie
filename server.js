const express = require('express');
const app = express();
const path = require('path');

// Définit le répertoire des fichiers statiques (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Écoute le port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
