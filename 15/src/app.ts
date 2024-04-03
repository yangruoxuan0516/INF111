interface SongInterface {
  title: string;
  artist: {name: string;};
  album: {title: string; cover_small: string;};
  preview: string;
}

interface SongAPI {
  tracks: {data: SongInterface[];}
}

class DeezerService {
  async getSongsFromDeezer() {
    const response = await fetch(
      "http://localhost:8088/https://api.deezer.com/playlist/11846226041"
    );
    const songjson: SongAPI = await response.json();
    // console.log(songjson);
    return songjson.tracks.data;
  }

  createSongElement(song: SongInterface, index: number): HTMLLIElement {
    const li = document.createElement('li');
    li.style.listStyleType = 'none';
  
    const h3 = document.createElement('h3');
    h3.textContent = 'No.'+ index.toString()+' - '+song.title;
    li.appendChild(h3);
  
    const artistP = document.createElement('p');
    artistP.textContent = 'Singer: '+song.artist.name;
    li.appendChild(artistP);
  
    const albumP = document.createElement('p');
    albumP.textContent = 'Album: '+song.album.title;
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

  async displaySongs() {
    try{
      const ul: HTMLUListElement = document.createElement("ul");
      const song: SongInterface[] = await this.getSongsFromDeezer();
      let index = 0;
      song.forEach((song: SongInterface, index: number) => {
        index++;
        // console.log(song.title);
        const songElement = this.createSongElement(song,index);
        ul.appendChild(songElement);
      });
      document.body.appendChild(ul);
    }catch(error){
      console.error('Error');
    }
  }
}

const deezerService = new DeezerService();
deezerService.displaySongs();
