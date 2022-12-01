
export enum MNAttribute {
    "nuevopost" = "nuevopost",
    "mensajes" = "mensajes",
    "brujula" = "brujula",
    "casa" = "casa",
    "heart" = "heart",
    "perfilfoto" = "perfilfoto",
    "logo" = "logo"
   
}

class Menu extends HTMLElement{
    nuevopost?: string;
    mensajes?: string;
    brujula?: string;
    casa?: string;
    heart?: string;
    perfilfoto?: string;
    logo?: string;

    static get observedAttributes(){
        const attrs: Record<MNAttribute,null> = {
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

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const newpostbtn = this.shadowRoot?.querySelector("#new-post");
        newpostbtn?.addEventListener('click', () => {
            console.log('From Menu')

            const event: CustomEvent = new CustomEvent("to-new-post",
                {composed: true
            });

            this.dispatchEvent(event);
        

        });
    }

    attributeChangedCallback(
        propName: MNAttribute, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
           
            this[propName] = newValue;
            this.render();
    }

    render(){
        if(!this.shadowRoot) return;
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
`
}
}

customElements.define("my-menu", Menu);
export default Menu;