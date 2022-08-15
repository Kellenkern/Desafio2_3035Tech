import { Music } from "./music.js";

export class Musics{
    private musics: Array<Music> = [];

    public adiciona(music: Music) {
        this.musics.push(music);
    }

    public lista(): ReadonlyArray<Music>{
        return this.musics;
    }
}
