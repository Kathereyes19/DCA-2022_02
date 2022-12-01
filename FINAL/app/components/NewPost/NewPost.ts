import { addnewPost } from "../../services/db.js";

export class NewPost extends HTMLElement{
    username = "";
    ubication = "";
    profileimg = "";
    postimg = "";
    caption = ""

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener("click", async ()=>{
            
            if(this.username && this.username && this.ubication && this.profileimg && this.postimg && this.caption) {
                const postData = {
                    username: this.username,
                    ubication: this.ubication,
                    profileimg: this.profileimg,
                    postimg: this.postimg,
                    caption: this.caption
                }
                try {
                    await addnewPost(postData);
                    alert("Post creado");

                    const event: CustomEvent = 
                    new CustomEvent("form-sucess",{composed: true});

                    this.dispatchEvent(event);
                } catch (error) {
                    console.error(error);
                    swal("Error al crear el post");
                }
            } else {
                swal("Complete todos los campos");
            }
        });

        const usernameInput = this.shadowRoot?.querySelector('input[type="text"]');
        const ubicationInput = this.shadowRoot?.querySelector('input[type="text"]');
        const profileimgInput = this.shadowRoot?.querySelector('input[type="image"]');
        const postimgInput = this.shadowRoot?.querySelector('input[type="image"]');
        const captionInput = this.shadowRoot?.querySelector('input[type="text"]');

        usernameInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.username = value;
        });

        ubicationInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.ubication = value;
        });

        profileimgInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.profileimg = value;
        });

        postimgInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.postimg = value;
        });

        captionInput?.addEventListener("change",(evt) => {
            const value: string = (evt.target as HTMLInputElement).value || "";
            this.caption = value;
        });
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./style3.css">       
        <section>
        <div class="CardNewpost">
        <h1 class="G1"><b>Nueva publicación</b></h1>
        <div>
        <input type="text" placeholder="Nombre de Usuario"/>
    </div>
    <div>
        <input type="text" placeholder="Ubicación"/>
    </div>
    <div>
    <input type="text" placeholder="enlace de la foto"/>
    </div>
    <div>
    <input type="text" placeholder="caption"/>
    </div>  

    <button type="submit">Publicar</button>
    </section>
`
}
}

customElements.define("app-newpost",NewPost);