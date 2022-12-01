export var STttribute;
(function (STttribute) {
    STttribute["username"] = "username";
    STttribute["profileimg"] = "profileimg";
})(STttribute || (STttribute = {}));
class Story extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            username: null,
            profileimg: null
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link href="./components/Home/style.css" rel="stylesheet">
            <section class="storiescard">
                <img class="profimg" ${this.profileimg}
                <p class="UserName">${this.username}</p>
            </section>
            `;
        }
    }
}
customElements.define("my-story", Story);
export default Story;
