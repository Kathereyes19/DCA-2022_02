var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Data } from "./data.js";
class Characters extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Data();
            this.render(data);
        });
    }
    render(data) {
        if (!this.shadowRoot)
            return;
        const character = data.map(({ char_id, name, nickname, birthday, occupation, img, status, portrayed }) => `<article>
        <link rel="stylesheet" href="./app/components/characters/style.css">
             <section class="card">
             <img class="imgbx" src="${img}">
             <section class="characterInfo">
                 <h2>character Id: ${char_id}</h2>
                 <h3>Name: ${name}</h3>  
                 <p>Nickame: ${nickname}</p> 
                 <p>Birthday: ${birthday}</p>
                 <p>Occupation: ${occupation}</p>
                 <p>Status: ${status}</p>
                 <p>Portrayed: ${portrayed}</p>
                </section>
             </section>
        </article>`);
        this.shadowRoot.innerHTML = `<section>
            ${character.join("")}
        </section>`;
    }
}
customElements.define("my-characters", Characters);
