export enum Attribute {
    "username"="username",
    "ubication" = "ubication",
    "profileimg" = "profileimg",
    "postimg" = "postimg",
    "captiontext" = "captiontext",
    "hashtag" = "hashtag",
    "numbercoms" = "numbercoms",
    "time" = "time",
}

class Profile extends HTMLElement{
    username?: string;
    ubication?: string;
    profileimg?: string;
    postimg?: string;
    captiontext?: string;
    hashtag?: string;
    numbercoms?: number;
    time?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            username: null,
            ubication: null,
            profileimg: null,
            postimg: null,
            captiontext: null,
            hashtag: null,
            numbercoms: null,
            time: null,
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
        propName: Attribute,
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
            switch (propName) {
                case Attribute.numbercoms:
                    this.numbercoms = newValue ? Number(newValue) : undefined;                                        
                    break;
            
                default:
                    this[propName] = newValue;
                    break;
            }

            this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Profile/style.css">
            <section class="Card">
                <section id="header">
                    <img class="Profileimg" ${this.profileimg}
                    <div>
                        <h4 class="username">${this.username}</h4>
                        <h4 class="ubication"> ${this.ubication}</h4>
                    </div>

                    <img class="dot" src="./app/components/profile/img/dot.png">
                </section>
                <img class="Postimg" ${this.postimg}

                <div class="counter">
                <my-counter></my-counter>
                </div>

                <section>
                    <p class="caption"><b class="username">${this.username}</b> ${this.captiontext} <t>${this.hashtag}</t> </p>
                    <p class="comment">View all ${this.numbercoms} comments</p>
                    <p class="time">${this.time}</p>
                </section>
            </section>
            `
        }
    }
}

customElements.define("my-profile", Profile);
export default Profile;