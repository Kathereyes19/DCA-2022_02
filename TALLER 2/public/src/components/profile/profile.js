class MyProfile extends HTMLElement {
  //Metodo para declarar que atributos/parametros
  //vamos a utilizar en nuestra clase
  static get observedAttributes() {
    return ['logo','chat', 'settings', 'userimg', 'username', 'name', 'age', 'ubication', 'kilometers', 'description'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  //Se ejecuta cuando la clase está
  //montado en nuestra pagina/html
  connectedCallback() {
    this.render();
  }

  //Metodo que se encarga de ejecutarse
  //si algun valor cambia
  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/profile/style.css"

        <div class="body">
        <div class="card">
        <div class="top">
        <div class="userDetails">

        <div class="settings_img">
        <img src=${this.settings} class=cover>
        </div>

        <div class="logo_img">
        <img src=${this.logo} class=cover>
        </div>

        <div class="chat_img">
        <img src=${this.chat} class=cover>
        </div>

        </div>

        </div>

        <div class="imgBx">
        <img src=${this.userimg} class="cover">
        </div>
      
        <h4 class="name">${this.name}, ${this.age}</h4>
        <h4 class="ubication">${this.ubication}, stay ${this.kilometers} km away</h4>
        <h5 class="description">${this.description}</h5>

        <div class="counters">
        <my-counter></my-counter>
        <my-counter2></my-counter2>
        <my-counter3></my-counter3>
        </div>
        </div>
        </div>
        `; 
  }
}

customElements.define('my-profile', MyProfile);
export default MyProfile;
