// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors'); // Add this line
// const app = express();
// const PORT = 3001;

// app.use(bodyParser.json());
// app.use(cors()); // Add this line to enable CORS

// const playlists = [];

// app.post('/api/createPlaylist', (req, res) => {
//   const { name, songs } = req.body;

//   // Validate input (you can add more validation as needed)

//   const newPlaylist = {
//     id: playlists.length + 1,
//     name,
//     songs,
//   };

//   playlists.push(newPlaylist);

//   res.json(newPlaylist);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

const playlists = [];

app.post('/api/createPlaylist', (req, res) => {
  const { name, songs } = req.body;

  // Validate input (you can add more validation as needed)

  const newPlaylist = {
    id: playlists.length + 1,
    name,
    songs: songs.map((song, index) => ({ number: index + 1, name: song })), // Include song numbers
  };

  playlists.push(newPlaylist);

  res.json(newPlaylist);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
