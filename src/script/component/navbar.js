class Navbar extends HTMLElement {
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
          nav {
            background-color: var(--primary-color);
            padding: 5px;
            position: sticky;
            top: 0;
          }
          
          nav ul {
              padding-inline: 4rem;
              display: flex;
              gap: 2rem;
          }
          
          nav li {
            list-style-type: none;
          }
          
          nav a {
            font-size: 29px;
            font-weight: 400;
            text-decoration: none;
          
            color: white;
          }
          
          nav a:hover {
            font-weight: bold;
          }
          
          
        @media screen and (max-width: 768px) {
        nav ul {
            justify-content: center;
            }
        }
          </style>
          
        <nav>
            <ul>
                <li><a href="#cari-id-kota">Cari ID Kota</a></li>
                <li><a href="#prayer-schedule">Jadwal Sholat</a></li>
                <li><a href="#penggunaan">Penggunaan</a></li>
            </ul>
        </nav>
          `;
  }
}

customElements.define('nav-bar', Navbar);
