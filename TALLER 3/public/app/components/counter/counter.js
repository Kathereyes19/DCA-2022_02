class Counter extends HTMLElement {
    constructor() {
        super();
        this.count = 119;
        this.handleClick = () => {
            this.count++;
            this.render();
        };
        var heartlike = document.getElementById('heartlike');
        this.attachShadow({ mode: "open" });
        this.button = this.ownerDocument.createElement("img");
        this.button.setAttribute('src', "./app/components/profile/img/hred.png");
        this.button.className = "more";
        this.button.id = "heartlike";
        this.button.addEventListener("click", this.handleClick);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
            <link href="./app/components/profile/style.css" rel="stylesheet">
            <div id="lower">
                <div>
                    <img class="more" src="./app/components/profile/img/heart.png">
                    <img class="more" src="./app/components/profile/img/bubblechat.png">
                    <img class="more" src="./app/components/profile/img/send.png">
                </div>
                <img class="more" id="bookmark" src="./app/components/profile/img/bookmark.png">
            </div>
            <b>${this.count} likes</b>
            </section>
            `;
            this.shadowRoot.appendChild(this.button);
        }
    }
}
customElements.define("my-counter", Counter);
export default Counter;
