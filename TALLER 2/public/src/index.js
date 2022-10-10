import * as components from "./components/index.js"
import data from './components/data.js';

console.log(data);

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((element) => {
        this.shadowRoot.innerHTML += `
        <my-profile logo=".././img/logotinder.png" chat=".././img/chat-3.png" settings=".././img/settings.png" userimg="${element.userimg}" name="${element.name}" age="${element.age}" ubication="${element.ubication}" kilometers="${element.kilometers}" description="${element.description}"></my-profile>
        `;
    }); 
}
}

customElements.define("app-container",AppContainer);
