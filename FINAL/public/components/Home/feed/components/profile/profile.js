export var Attribute;
(function (Attribute) {
    Attribute["username"] = "username";
    Attribute["ubication"] = "ubication";
    Attribute["profileimg"] = "profileimg";
    Attribute["postimg"] = "postimg";
    Attribute["captiontext"] = "captiontext";
    Attribute["hashtag"] = "hashtag";
    Attribute["numbercoms"] = "numbercoms";
    Attribute["time"] = "time";
})(Attribute || (Attribute = {}));
class Profile extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
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
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link href="./components/Home/style.css" rel="stylesheet">
            <section class="Card">
                <section id="header">
                    <img class="Profileimg" ${this.profileimg}
                    <div>
                        <h4 class="username">${this.username}</h4>
                        <h4 class="ubication"> ${this.ubication}</h4>
                    </div>

                    <img class="dot" src="./components/Home/Feed/components/profile/img/dot.png">
                </section>
                <img class="Postimg" ${this.postimg}

                <div class="counter">
                <my-counter></my-counter>
                </div>

                <section>
                <div class=captionn></div>
                    <p class="caption"><b class="username">${this.username}</b> ${this.captiontext} <t>${this.hashtag}</t> </p>
                    <p class="comment">View all ${this.numbercoms} comments</p>
                    <p class="time">${this.time}</p>
                    </div>
                </section>
            </section>
            `;
        }
    }
}
customElements.define("my-profile", Profile);
export default Profile;
