class Like extends HTMLElement {

    static get observedAttributes(){
        return ["count"];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.mount();
    }

    connectedCallback() {
        this.mount();
    }

    disconnectedCallback() {
        this.removeEventListeners();
    }

    constructor(){
        super();
        this.attachShadow({mode : 'open' });
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    mount(){
        this.render();
        this.addEventListeners();
    }

    addEventListeners() {
        this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }

    render(){
        this.shadowRoot.innerHTML = `
        <div class="like">
        <link rel="stylesheet" href="/src/components/profile/style.css">
            <img class="like_img" src=".././img/like.jpg">
            <h2>${this.count || 0}</h2>
        </div>
        `;
    }

    removeEventListeners(){
        this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }

    onButtonClicked() {
        const currentValue = Number(this.getAttribute("count")) || 0;
        this.setAttribute("count", currentValue + 1);
    }
}


class Star extends HTMLElement {

    static get observedAttributes(){
        return ["count"];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.mount();
    }

    connectedCallback() {
        this.mount();
    }

    disconnectedCallback() {
        this.removeEventListeners();
    }

    constructor(){
        super();
        this.attachShadow({mode : 'open' });
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    mount(){
        this.render();
        this.addEventListeners();
    }

    addEventListeners() {
        this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/profile/style.css">
        <div class="star">
            <img class="star_img" src=".././img/star.jpg">
            <h2>${this.count || 0}</h2>
        </div>
        `;
    }

    removeEventListeners(){
        this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }

    onButtonClicked() {
        const currentValue = Number(this.getAttribute("count")) || 0;
        this.setAttribute("count", currentValue + 1);
    }
}

class Dislike extends HTMLElement {

    static get observedAttributes(){
        return ["count"];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.mount();
    }

    connectedCallback() {
        this.mount();
    }

    disconnectedCallback() {
        this.removeEventListeners();
    }

    constructor(){
        super();
        this.attachShadow({mode : 'open' });
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    mount(){
        this.render();
        this.addEventListeners();
    }

    addEventListeners() {
        this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }

    render(){
        this.shadowRoot.innerHTML = `
        <div class="dislike">
        <link rel="stylesheet" href="/src/components/profile/style.css">
            <img class="dislike_img" src=".././img/dislike.jpg">
            <h2>${this.count || 0}</h2>
        </div>
        `;
    }
    removeEventListeners(){
        this.shadowRoot.querySelector("img").addEventListener("click", this.onButtonClicked);
    }

    onButtonClicked() {
        const currentValue = Number(this.getAttribute("count")) || 0;
        this.setAttribute("count", currentValue + 1);
}
}

customElements.define("my-counter", Like);
customElements.define("my-counter2", Star);
customElements.define("my-counter3", Dislike);
export default Like; Star; Dislike;