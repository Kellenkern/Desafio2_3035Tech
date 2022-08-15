import { View } from "./views.js";
export class MessageView extends View {
    template(model) {
        return `
            <p class="register alert alert-primary">${model}</p>
        `;
    }
}
