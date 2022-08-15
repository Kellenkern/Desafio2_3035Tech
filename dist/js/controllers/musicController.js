import { Music } from "../models/music.js";
import { Musics } from "../models/musics.js";
import { MessageView } from "../views/messageView.js";
import { MusicsView } from "../views/MusicViews.js";
export class MusicController {
    constructor() {
        this.musics = new Musics();
        this.negociacoesView = new MusicsView('#musicView');
        this.mensagemView = new MessageView('#mensagemView');
        this.inputName = document.querySelector('#music_name');
        this.inputArtist = document.querySelector('#artist_name');
        this.inputAlbum = document.querySelector('#album_name');
        this.negociacoesView.update(this.musics);
    }
    adiciona() {
        const music = new Music(this.inputName.value, this.inputArtist.value, this.inputAlbum.value);
        this.musics.adiciona(music);
        this.limparFormulario();
        this.atualizaView();
    }
    limparFormulario() {
        this.inputName.value = '';
        this.inputArtist.value = '';
        this.inputAlbum.value = '';
        this.inputName.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.musics);
        this.mensagemView.update('music added successfully!');
    }
}
