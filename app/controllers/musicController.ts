import { Music } from "../models/music.js";
import { Musics } from "../models/musics.js";
import { MessageView } from "../views/messageView.js";
import { MusicsView } from "../views/MusicViews.js";

export class MusicController{
    private inputName: HTMLInputElement;
    private inputArtist: HTMLInputElement;
    private inputAlbum: HTMLInputElement;
    private musics = new Musics();
    private negociacoesView = new MusicsView('#musicView');
    private mensagemView = new MessageView('#mensagemView');

    constructor(){
        this.inputName = document.querySelector('#music_name');
        this.inputArtist = document.querySelector('#artist_name');
        this.inputAlbum = document.querySelector('#album_name');
        this.negociacoesView.update(this.musics); 
    }

    public adiciona(): void{
        const music = new Music(this.inputName.value, this.inputArtist.value, this.inputAlbum.value);
        this.musics.adiciona(music);
        this.limparFormulario();
        this.atualizaView();
    }
    
    private limparFormulario():void{
        this.inputName.value = '';
        this.inputArtist.value = '';
        this.inputAlbum.value = '';
        this.inputName.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.musics);
        this.mensagemView.update('music added successfully!');
    }
}