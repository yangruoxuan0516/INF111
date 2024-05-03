var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class DeezerService {
    getSongsFromDeezer() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("http://localhost:8088/https://api.deezer.com/playlist/11846226041");
            const songjson = yield response.json();
            // console.log(songjson);
            return songjson.tracks.data;
        });
    }
    createSongElement(song, index) {
        const li = document.createElement('li');
        li.style.listStyleType = 'none';
        const h3 = document.createElement('h3');
        h3.textContent = 'No.' + index.toString() + ' - ' + song.title;
        li.appendChild(h3);
        const artistP = document.createElement('p');
        artistP.textContent = 'Singer: ' + song.artist.name;
        li.appendChild(artistP);
        const albumP = document.createElement('p');
        albumP.textContent = 'Album: ' + song.album.title;
        li.appendChild(albumP);
        const img = document.createElement('img');
        img.src = song.album.cover_small;
        img.alt = 'cover';
        li.appendChild(img);
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.preload = 'none';
        const source = document.createElement('source');
        source.src = song.preview;
        source.type = 'audio/mpeg';
        audio.appendChild(source);
        li.appendChild(audio);
        return li;
    }
    displaySongs() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ul = document.createElement("ul");
                const song = yield this.getSongsFromDeezer();
                let index = 0;
                song.forEach((song, index) => {
                    index++;
                    // console.log(song.title);
                    const songElement = this.createSongElement(song, index);
                    ul.appendChild(songElement);
                });
                document.body.appendChild(ul);
            }
            catch (error) {
                console.error('Error');
            }
        });
    }
}
const deezerService = new DeezerService();
deezerService.displaySongs();
//# sourceMappingURL=app.js.map