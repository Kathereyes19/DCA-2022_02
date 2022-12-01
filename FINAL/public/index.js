import "./components/index.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
    Screens[Screens["newpost"] = 3] = "newpost";
})(Screens || (Screens = {}));
var HMAttributes;
(function (HMAttributes) {
    HMAttributes["onNewPost"] = "onNewPost";
})(HMAttributes || (HMAttributes = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.register;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
        this.setEventListeners();
    }
    setEventListeners() {
        var _a, _b, _c, _d;
        const Home = () => this.changeScreen(Screens.home);
        const Login = () => this.changeScreen(Screens.login);
        const Register = () => this.changeScreen(Screens.register);
        const NewPost = () => this.changeScreen(Screens.newpost);
        const newpost = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-newpost");
        newpost === null || newpost === void 0 ? void 0 : newpost.addEventListener('form-sucess', Home);
        const home = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("app-home");
        home === null || home === void 0 ? void 0 : home.onNewPost(NewPost);
        const login = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("app-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("login-success", Home);
        login === null || login === void 0 ? void 0 : login.addEventListener('go-register', Register);
        const register = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector("app-register");
        register === null || register === void 0 ? void 0 : register.addEventListener("login-success", Login);
        register === null || register === void 0 ? void 0 : register.addEventListener('go-login', Login);
    }
    render() {
        if (!this.shadowRoot)
            return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>";
                break;
            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>";
                break;
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>";
                break;
            case Screens.newpost:
                this.shadowRoot.innerHTML = "<app-newpost></app-newpost>";
                break;
            default:
                break;
        }
    }
    changeScreen(screen) {
        this.screen = screen;
        this.render();
        this.setEventListeners();
    }
}
customElements.define("app-container", AppContainer);
