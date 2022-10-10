import data from "./data.js";
import "./components/index.js";
import { STttribute } from "./components/story/story.js";
import { Attribute } from "./components/profile/profile.js";
import { SGAttribute } from "./components/suggestions/suggestions.js";
class AppContainer extends HTMLElement {
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
customElements.define("stories-container", StoryContainer);
customElements.define("app-container", AppContainer);
customElements.define("suggestions-container", Suggestions);
