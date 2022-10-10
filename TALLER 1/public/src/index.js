import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-profile img1=".././img/img1.jpg" username="kathe.reyes19" ubication="Cali-Colombia" dot=".././img/option.png" img2=".././img/img1.jpg" heart=".././img/heart.png" bubblechat=".././img/bubble-chat.png" share=".././img/send.png" bookmark=".././img/bookmark-white.png" likes="200 likes" caption=" post de Instagram" hashtags="#hola #programación #Instagram" comments="see all 50 comments" posttime="24 minutes ago"></my-profile>
        `
    }
}

customElements.define("app-container",AppContainer);