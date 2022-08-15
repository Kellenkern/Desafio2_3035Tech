import { View } from "./views.js";

export class MessageView extends View<String>{

    protected template(model:string): string {
        return `
            <p class="register alert alert-primary">${model}</p>
        `;
    }
}