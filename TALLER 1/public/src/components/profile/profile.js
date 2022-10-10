class MyProfile extends HTMLElement {
  //Metodo para declarar que atributos/parametros
  //vamos a utilizar en nuestra clase
  static get observedAttributes() {
    return ['img1','username', 'ubication', 'dot', 'img2', 'heart', 'comments', 'bubblechat', 'share', 'bookmark', 'likes', 'caption', 'hashtags', 'posttime'];
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
       <div class="body" >
        <div class="card" >
        <div class="top">
        <div class="userDetails">
        <div class="profile_img">
        <img src=${this.img1} class="cover">
        </div>
        <h3>${this.username}<br><span>${this.ubication}</span></h3>
        </div>
        <div>
        <img src=${this.dot} class="dot"</div>
        </div>
        </div>
        <div class="imgBx">
        <img src=${this.img2} class="cover">
        </div>
        <div class="actionButtons">
        <div class="left">
          <img src=${this.heart} class="heart" >
          <img src=${this.bubblechat}>
          <img src=${this.share}>
        </div>
        <div class="right"></div>
        <img src=${this.bookmark}>
        </div>
        <h4 class="likes">${this.likes}</h4>
        <h4 class="message"><b>${this.username}</b>${this.caption}<span>#${this.hashtags}</span></h4>
        <h4 class="comments">${this.comments}</h4>
        <div class="addComments">
        <h5 class="posttime">${this.posttime}</h5>
        </div>
        `;
  }
}

customElements.define('my-profile', MyProfile);
export default MyProfile;
