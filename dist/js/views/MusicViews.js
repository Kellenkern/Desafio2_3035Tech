import { View } from "./views.js";
export class MusicsView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered tableView" id="tableView">
                <thead>
                    <tr>
                        <th>Music's Name</th>
                        <th>Artist's Name</th>
                        <th>Album's Name</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(Music => {
            return `
                        <tr>
                            <td>${Music.name}</td>
                            <td>${Music.artist}</td>
                            <td>${Music.album}</td>
                        </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
}
