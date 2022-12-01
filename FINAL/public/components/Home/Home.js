import "../index.js";
import data from "./feed/data.js";
import dataMN from "./feed/dataMN.js";
import "./feed/components/index.js";
import { MNAttribute } from "./feed/components/menu/menu.js";
import { STttribute } from "./feed/components/story/story.js";
import { Attribute } from "./feed/components/profile/profile.js";
import { SGAttribute } from "./feed/components/suggestions/suggestions.js";
class FeedContainer extends HTMLElement {
    constructor() {
        super();
        this.counters = [];
        this.profiles = [];
        this.attachShadow({ mode: "open" });
        const counter = this.ownerDocument.createElement("my-counter");
        counter.button.addEventListener("click", () => {
            console.log("button clicked");
        });
        this.counters.push(counter);
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attribute.username, user.username);
            profileCard.setAttribute(Attribute.ubication, user.ubication);
            profileCard.setAttribute(Attribute.profileimg, user.profileimg);
            profileCard.setAttribute(Attribute.postimg, user.postimg);
            profileCard.setAttribute(Attribute.captiontext, user.caption.captiontext);
            profileCard.setAttribute(Attribute.hashtag, user.caption.hashtag);
            profileCard.setAttribute(Attribute.numbercoms, String(user.numbercoms));
            profileCard.setAttribute(Attribute.time, user.time);
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
class MenuContainer extends HTMLElement {
    constructor() {
        super();
        this.menu = [];
        this.attachShadow({ mode: "open" });
        dataMN.forEach((usermenu) => {
            const menuCard = this.ownerDocument.createElement("my-menu");
            menuCard.setAttribute(MNAttribute.logo, usermenu.logo);
            menuCard.setAttribute(MNAttribute.casa, usermenu.casa);
            menuCard.setAttribute(MNAttribute.brujula, usermenu.brujula);
            menuCard.setAttribute(MNAttribute.mensajes, usermenu.mensajes);
            menuCard.setAttribute(MNAttribute.heart, usermenu.heart);
            menuCard.setAttribute(MNAttribute.nuevopost, usermenu.nuevopost);
            menuCard.setAttribute(MNAttribute.perfilfoto, usermenu.perfilfoto);
            this.menu.push(menuCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.menu.forEach((menu) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(menu);
            });
        }
    }
}
class StoryContainer extends HTMLElement {
    constructor() {
        super();
        this.stories = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const storyCard = this.ownerDocument.createElement("my-story");
            storyCard.setAttribute(STttribute.username, user.username);
            storyCard.setAttribute(STttribute.profileimg, user.profileimg);
            this.stories.push(storyCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.stories.forEach((story) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(story);
            });
        }
    }
}
class Suggestions extends HTMLElement {
    constructor() {
        super();
        this.suggestions = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const storyCard = this.ownerDocument.createElement("my-suggestions");
            storyCard.setAttribute(SGAttribute.username, user.username);
            storyCard.setAttribute(SGAttribute.profileimg, user.profileimg);
            this.suggestions.push(storyCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.suggestions.forEach((suggestion) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(suggestion);
            });
        }
    }
}
customElements.define("menu-container", MenuContainer);
customElements.define("stories-container", StoryContainer);
customElements.define("feed-container", FeedContainer);
customElements.define("suggestions-container", Suggestions);
export class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link href="./components/Home/style.css" rel="stylesheet">
        <article>
    <div class="menu">
                <menu-container></menu-container>
            </div>
    <div class="info">
        <div>
            <div class="stories">
                <stories-container></stories-container>
            </div>
            <feed-container></feed-container>
        </div>
        <div class="Suggestionscard">
            <div class="user">
                <img class="profile" src="https://images.pexels.com/photos/13625508/pexels-photo-13625508.jpeg?cs=srgb&dl=pexels-alteredsnaps-13625508.jpg&fm=jpg">
                <div>
                    <p class="name1">kathe.reyes19</p>
                    <p class="name2">Kathe Reyes</p>
                </div>
                <p class="switch">Switch</p>
            </div>
            <div class="Suggestions">
                <p class="suggest">Suggestions for you</p>
                <p class="allinfo">See All</p>
            </div>
            <suggestions-container></suggestions-container>
            <p class="infoapp">About · Help · Press · API · Jobs · Privacy · Terms · Locations · Language</p>
            <p class="infoapp">2022 INSTAGRAM CLASS PROJECT</p>
        </div>
        
    </div>
        </article>
        `;
    }
}
customElements.define("app-home", Home);
