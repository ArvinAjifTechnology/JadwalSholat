class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .jumbotron {
        padding: 60px;
        background: linear-gradient(47deg, rgba(97,131,100,1) 0%, rgba(121,172,120,1) 33%, rgba(176,217,177,1) 81%, rgba(209,232,211,1) 100%);
        text-align: center;
        color: white;
      }
      .jumbotron h1{
        font-family: 'Ketupat Ramadhan';
        font-size: 99px;
        margin-bottom: 0px;
      }
      
      .jumbotron p {
        margin-top: 0px;
        font-family: 'Arabic Ramadhan';
        font-size: 69px;
      }
      </style>
      
      <div class="jumbotron">
        <h1>Jadwal Sholat</h1>
        <p>Sholatlah Sebelum Di Sholatkan</p>
      </div>
      `;
  }
}

customElements.define('app-header', AppHeader);
