import "./city-id-item.js";

class CityId extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set cities(cities) {
    console.log("Cities:", typeof cities);
    this._cities = cities;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._cities.data.forEach((city) => {
      const cityIdItemElement = document.createElement("city-id-item");
      cityIdItemElement.city = city;
      this.shadowDOM.appendChild(cityIdItemElement);
    });
  }
  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("city-id", CityId);
