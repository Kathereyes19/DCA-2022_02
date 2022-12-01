export enum STttribute {
    "username"="username",
    "profileimg" = "profileimg",
}

class Story extends HTMLElement{
    username?: string;
    profileimg?: string;

    static get observedAttributes(){
        const attrs: Record<STttribute,null> = {
            username: null,
            profileimg: null
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: STttribute,
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
            this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link href="./components/Home/style.css" rel="stylesheet">
            <section class="storiescard">
                <img class="profimg" ${this.profileimg}
                <p class="UserName">${this.username}</p>
            </section>
            `
        }
    }
}

customElements.define("my-story", Story);
export default Story;