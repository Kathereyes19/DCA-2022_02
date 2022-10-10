import data from "./data.js"

import "./components/index.js"
import Story, {STttribute} from "./components/story/story.js";
import Counter from "./components/counter/counter.js";
import Profile, {Attribute} from "./components/profile/profile.js";
import Suggestion, {SGAttribute} from "./components/suggestions/suggestions.js";


class AppContainer extends HTMLElement{
    counters: Counter[] = [];
    profiles: Profile[] =[];

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        const counter = this.ownerDocument.createElement("my-counter") as Counter;
        counter.button.addEventListener("click",()=>{
            console.log("button clicked");
        })
        this.counters.push(counter);

        data.forEach((user)=>{
            const profileCard = this.ownerDocument.createElement("my-profile") as Profile;
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

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            this.profiles.forEach((profile)=>{
                this.shadowRoot?.appendChild(profile);
            })
        }
    }
}

class StoryContainer extends HTMLElement{
    stories: Story[] =[];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        data.forEach((user)=>{
            const storyCard = this.ownerDocument.createElement("my-story") as Story;
            storyCard.setAttribute(STttribute.username, user.username);
            storyCard.setAttribute(STttribute.profileimg, user.profileimg);
            this.stories.push(storyCard);
        });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            this.stories.forEach((story)=>{
                this.shadowRoot?.appendChild(story);
            })
        }
    }
}

class Suggestions extends HTMLElement{
    suggestions: Suggestion [] =[];

    constructor(){
        super();
        this.attachShadow({mode: "open"});

        data.forEach((user)=>{
            const storyCard = this.ownerDocument.createElement("my-sidebar") as Suggestion;
            storyCard.setAttribute(SGAttribute.username, user.username);
            storyCard.setAttribute(SGAttribute.profileimg, user.profileimg);
            this.suggestions.push(storyCard);
        });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            this.suggestions.forEach((suggestion)=>{
                this.shadowRoot?.appendChild(suggestion);
            })
        }
    }
}

customElements.define("stories-container",StoryContainer);

customElements.define("app-container",AppContainer);

customElements.define("suggestions-container",Suggestions);