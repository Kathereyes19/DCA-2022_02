import "./components/index.js";
enum Screens {
    login,
    register,
    home,
    newpost
}

enum HMAttributes {
    'onNewPost' = 'onNewPost'
}

interface HMProperties extends Element {
    onNewPost: (val:EventListener) => void;
}
class AppContainer extends HTMLElement{
    screen: Screens = Screens.register;

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();

        this.setEventListeners();
    }

    setEventListeners() {
        const Home = () => this.changeScreen(Screens.home);
        const Login = () => this.changeScreen(Screens.login);
        const Register = () => this.changeScreen(Screens.register);
        const NewPost = () => this.changeScreen(Screens.newpost);

        const newpost = this.shadowRoot?.querySelector("app-newpost");
        newpost?.addEventListener('form-sucess', Home);

        const home = this.shadowRoot?.querySelector("app-home");
        (home as HMProperties | undefined)?.onNewPost(NewPost);

        const login = this.shadowRoot?.querySelector("app-login");
        login?.addEventListener("login-success", Home);
        login?.addEventListener('go-register', Register);
        
        const register = this.shadowRoot?.querySelector("app-register");
        register?.addEventListener("login-success", Login);
        register?.addEventListener('go-login', Login);
    }

    render(){
        if(!this.shadowRoot) return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>"
                break;
        
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>"
            break;
            
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>"
            break;

            case Screens.newpost: 
                this.shadowRoot.innerHTML = "<app-newpost></app-newpost>"
            break;

            default:
                break;
        }
    }

    changeScreen(screen: Screens) {
        this.screen = screen;
        this.render();
        this.setEventListeners();
    }
}

customElements.define("app-container",AppContainer);
