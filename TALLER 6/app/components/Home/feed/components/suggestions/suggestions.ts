export enum SGAttribute {
    "username"="username",
    "profileimg" = "profileimg"
}

class Suggestion extends HTMLElement{
    username?: string;
    profileimg?: string;

    static get observedAttributes(){
        const attrs: Record<SGAttribute,null> = {
            username: null,
            profileimg: null,
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
        propName: SGAttribute,
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
            <section class="Suggestions">
                    <img class="Profileimg" ${this.profileimg}
                    <div>
                        <h4 class="username">${this.username}</h4>
                        <p class="new">new in instagram</p>
                    </div>
                    <p class="follow"><t>follow</t></p>
            </section>
            `
        }
    }
}

customElements.define("my-suggestions", Suggestion);
export default Suggestion;