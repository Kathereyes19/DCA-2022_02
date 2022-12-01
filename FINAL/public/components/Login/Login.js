import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true
                    });
                    console.log(this);
                    this.dispatchEvent(event);
                }
                else {
                    swal({
                        title: "Error",
                        text: "La contraseña o el correo son incorrectos",
                        icon: "warning",
                    });
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./style2.css">
        <section class"login"
        <section class="celphoto">
        <img src="./components/img/cels.png">
        </section>

        <section class="CardLogin">
        <img class="InstaLogo" src="components/img/logoInstatext.png">
            <app-form></app-form>
        <h2> ------------ o ------------ </h2>
        <div class=downPart">
        <h5 class="B1">Iniciar sesión con Facebook</h5>
        <p><b>¿Olvidaste tu contraseña?</b></p>
        </div>
        </section>

        <section class="CardLoginn">
        <h3>¿No tienes una cuenta? <t>Registrate</t></h3>
        </section>
        
        <section class="descargas2">
        <h3>Descarga la app</h3>
        <img class="tiendas2" src="components/img/appStore.png">
        <img class="tiendas2" src="components/img/googlePlay.png">
    </section>
        <section>
        <p class="Infodown">Meta · Información · Blog · Empleo · Ayuda · API  Privacidad · Condiciones · Cuentas destacadas · Hashtags · Ubicaciones · Instagram  Lite · Subir contactos y no usuarios </p>
        <p class="Infodown">Español ·  © 2022 Instagram from Meta</p>
    </section>
    </section>
        `;
    }
}
customElements.define("app-login", Login);
