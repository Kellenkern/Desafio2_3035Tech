export class Musics {
    constructor() {
        this.musics = [];
    }
    adiciona(music) {
        this.musics.push(music);
    }
    lista() {
        return this.musics;
    }
}
