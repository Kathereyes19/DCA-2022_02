export var SGAttribute;
(function (SGAttribute) {
    SGAttribute["username"] = "username";
    SGAttribute["profileimg"] = "profileimg";
})(SGAttribute || (SGAttribute = {}));
class Suggestion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        const attrs = {
            username: null,
            profileimg: null,
        };
        return Object.keys(attrs);
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
            <link rel="stylesheet" href="./app/components/Profile/style.css">
            <section class="suggestions">
                    <img class="Profileimg" ${this.profileimg}
                    <div>
                        <h4 class="username">${this.username}</h4>
                        <p class="new">new in instagram</p>
                    </div>
                    <p class="follow"><t>follow</t></p>
            </section>
            `;
        }
    }
}
customElements.define("my-suggestions", Suggestion);
export default Suggestion;
