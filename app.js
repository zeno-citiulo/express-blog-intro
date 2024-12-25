const { log } = require('console');
const express = require('express');
const app = express()
const path = require('path')

const port = 3000;

const posts = [
  {
    titolo: "Introduzione a Express.js",
    contenuto: "Express. js è un framework minimalista per Node.js.",
    immagine: "/public/ciambeellone. jpeg",
    tags: ["Node.js", "Express", "Backend"]
  },
  {
    titolo: "JavaScript",
    contenuto: "Funzionalità del linguaggio JavaScript.",
    immagine: "",
    tags: ["JavaScript", "JS", "Frontend"]
  },
  {
    titolo: "API", 
    contenuto: "API con Express. js.",
    immagine: "",
    tags: ["API", "URL", "Express"]
  },
  {
    titolo: "Database", 
    contenuto: "Database NoSQL",
    immagine: "",
    tags: ["Database", " Librerie", "Nosol"]
  },
  {
    titolo: "Bootstrap",
    contenuto: "Guida all'utilizzo di Bootstrap",
    immagine: "",
    tags: ["Bootstrap", "CSS", "Card"]
  }
];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/bacheca', (req, res) => {
  const post = {
    conteggioPost: posts. length,
    listaPost: posts
  };
  res.json(post);
});

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});