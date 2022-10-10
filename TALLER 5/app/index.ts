import {Data} from "./data.js"
import {Attributes} from "./components/characters/characters.js";

class Characters extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    async connectedCallback() {
        const data = await Data ();
        this.render(data);
    }

     render(data: Array<Attributes>) {
        if(!this.shadowRoot) return;

        const character = data.map(
            ({char_id, name, nickname, birthday, occupation, img, status, portrayed}) => `<article>
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
        }}

customElements.define("my-characters",Characters)