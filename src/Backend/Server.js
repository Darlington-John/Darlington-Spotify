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

    const newPlaylist = {
        id: playlists.length + 1,
        name,
        songs: songs.map((song, index) => ({ number: index + 1, name: song })),
    };

    playlists.push(newPlaylist);

    res.json(newPlaylist);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});