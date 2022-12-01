export class Form extends HTMLElement {
    constructor() {
        super();
        this.username = "";
        this.ubication = "";
        this.profileimg = "";
        this.postimg = "";
        this.caption = "";
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a, _b, _c, _d, _e, _f;
        this.render();
        const btn2 = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn2 === null || btn2 === void 0 ? void 0 : btn2.addEventListener("click", () => {
            const event = new CustomEvent("form-fullfiled", {
                detail: { username: this.username, ubication: this.ubication, profileimg: this.profileimg, postimg: this.postimg, caption: this.caption },
                composed: true
            });
            this.dispatchEvent(event);
        });
        const usernameInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('input[type="text"]');
        const ubicationInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('input[type="text"]');
        const profileimgInput = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('input[type="image"]');
        const postimgInput = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.querySelector('input[type="image"]');
        const captionInput = (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.querySelector('input[type="text"]');
        usernameInput === null || usernameInput === void 0 ? void 0 : usernameInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.username = value;
        });
        ubicationInput === null || ubicationInput === void 0 ? void 0 : ubicationInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.ubication = value;
        });
        profileimgInput === null || profileimgInput === void 0 ? void 0 : profileimgInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.profileimg = value;
        });
        postimgInput === null || postimgInput === void 0 ? void 0 : postimgInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.postimg = value;
        });
        captionInput === null || captionInput === void 0 ? void 0 : captionInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.caption = value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./style2.css">       
        <article class="Form">
        <div>
        <input type="text" placeholder="Nombre de Usuario"/>
    </div>
    <div>
        <input type="text" placeholder="Ubicación"/>
    </div>
    <div>
        <input type="image" placeholder="Foto de perfil"/>
    </div>
    <div>
    <input type="image" placeholder="foto de publicación"/>
    </div>
    <div>
    <input type="text" placeholder="caption"/>
    </div>  

    <button type="submit">Publicar</button>
    </article>
`;
    }
}
customElements.define("app-form", Form);
