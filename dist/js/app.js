import { MusicController } from "./controllers/musicController.js";
const controller = new MusicController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
