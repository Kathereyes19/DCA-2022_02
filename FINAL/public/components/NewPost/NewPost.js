var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addnewPost } from "../../services/db.js";
export class NewPost extends HTMLElement {
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
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            if (this.username && this.username && this.ubication && this.profileimg && this.postimg && this.caption) {
                const postData = {
                    username: this.username,
                    ubication: this.ubication,
                    profileimg: this.profileimg,
                    postimg: this.postimg,
                    caption: this.caption
                };
                try {
                    yield addnewPost(postData);
                    alert("Post creado");
                    const event = new CustomEvent("form-sucess", { composed: true });
                    this.dispatchEvent(event);
                }
                catch (error) {
                    console.error(error);
                    swal("Error al crear el post");
                }
            }
            else {
                swal("Complete todos los campos");
            }
        }));
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
        <link rel="stylesheet" href="./style3.css">       
        <section>
        <div class="CardNewpost">
        <h1 class="G1"><b>Nueva publicación</b></h1>
        <div>
        <input type="text" placeholder="Nombre de Usuario"/>
    </div>
    <div>
        <input type="text" placeholder="Ubicación"/>
    </div>
    <div>
    <input type="text" placeholder="enlace de la foto"/>
    </div>
    <div>
    <input type="text" placeholder="caption"/>
    </div>  

    <button type="submit">Publicar</button>
    </section>
`;
    }
}
customElements.define("app-newpost", NewPost);
