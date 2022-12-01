
class Counter extends HTMLElement{
    count: number = 119;
    button: HTMLElement;

    

    constructor(){
        super();
        var heartlike = document.getElementById('heartlike');

        this.attachShadow({mode: "open"});
        this.button = this.ownerDocument.createElement("img");
        this.button.setAttribute('src', "./components/Home/Feed/components/profile/img/heartred.png")
        this.button.className = "more";
        this.button.id = "heartlike";
        this.button.addEventListener("click",this.handleClick);

    }

    handleClick= () =>{
        this.count ++;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
            <link href="./components/Home/style.css" rel="stylesheet">
            <div id="lower">
                <div>
                    <img class="more" src="./components/Home/Feed/components/profile/img/heart.png">
                    <img class="more" src="./components/Home/Feed/components/profile/img/bubblechat.png">
                    <img class="more" src="./components/Home/Feed/components/profile/img/send.png">
                </div>
                <img class="more" id="bookmark" src="./components/Home/Feed/components/profile/img/bookmark.png">
            </div>
            <b>${this.count} likes</b>
            </section>
            `;
            this.shadowRoot.appendChild(this.button);
        }
    }

}

customElements.define("my-counter",Counter);
export default Counter;