export var MNAttribute;
(function (MNAttribute) {
    MNAttribute["nuevopost"] = "nuevopost";
    MNAttribute["mensajes"] = "mensajes";
    MNAttribute["brujula"] = "brujula";
    MNAttribute["casa"] = "casa";
    MNAttribute["heart"] = "heart";
    MNAttribute["perfilfoto"] = "perfilfoto";
    MNAttribute["logo"] = "logo";
})(MNAttribute || (MNAttribute = {}));
class Menu extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            nuevopost: null,
            mensajes: null,
            brujula: null,
            casa: null,
            heart: null,
            perfilfoto: null,
            logo: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const newpostbtn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("#new-post");
        newpostbtn === null || newpostbtn === void 0 ? void 0 : newpostbtn.addEventListener('click', () => {
            console.log('From Menu');
            const event = new CustomEvent("to-new-post", { composed: true
            });
            this.dispatchEvent(event);
        });
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link href="./components/Home/style.css" rel="stylesheet">
        <article>
    <div class="head">
    <img class="logo" src=${this.logo}>
    <input type="text" class="search" placeholder="Search">
    <div class="Icons">
        <img class="icons" src=${this.casa}>
        <img class="icons" src=${this.mensajes}>
        <button type="button"><img class="addpost" src=${this.nuevopost}></button>
        <img class="icons" src=${this.brujula}>
        <img class="icons" src=${this.heart}>
        <img class="icons" id="userimg" src=${this.perfilfoto}>    
    </div>
</div>
</article>
`;
    }
}
customElements.define("my-menu", Menu);
export default Menu;
