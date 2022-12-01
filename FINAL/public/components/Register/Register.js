import { addUser } from "../../services/db.js";
export class Register extends HTMLElement {
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
            addUser({ email, password });
            swal({
                title: "Excelente",
                text: "Registro exitoso, ya puedes iniciar sesión",
                icon: "success",
            });
            const event = new CustomEvent("login-success", {
                composed: true
            });
            this.dispatchEvent(event);
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./style2.css">
        <section>
        <div class="CardRegister">
        <img class="InstaLogo" src="components/img/logoInstatext.png">
        <h1 class="G1"><b>Registrate para ver fotos y videos de tus amigos</b></h1>
        <buttom class="facebook">Inicia sesión con Facebook</buttom>
         <h2 class"G1"> ------------ o ------------ </h2>
            <app-form></app-form>
        <div class=downPart">
        <p>Es posible que las personas que usan nuestro
        servicio hayan subido tu información de
        contacto a Instagram.<b>Más información</b></p>
        <p>Al registrarte, aceptas nuestras <b>Condiciones</b>,
        la <b>Política de privacidad</b> y la <b>Política de
        cookies</b>.</p>
        </div>
        </div>
        </section>
        <section class="CardRegisterr">
            <h3>¿Ya tienes una cuenta? <t>Iniciar sesión</t></h3>
        </section>

        <section class="descargas">
        <h3>Descarga la app</h3>
        <img class="tiendas" src="components/img/appStore.png">
        <img class="tiendas" src="components/img/googlePlay.png">
    </section>
        <section>
        <p class="Infodown">Meta · Información · Blog · Empleo · Ayuda · API  Privacidad · Condiciones · Cuentas destacadas · Hashtags · Ubicaciones · Instagram  Lite · Subir contactos y no usuarios </p>
        <p class="Infodown">Español ·  © 2022 Instagram from Meta</p>
    </section>
  
        `;
    }
}
customElements.define("app-register", Register);
