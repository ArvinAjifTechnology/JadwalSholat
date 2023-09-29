class CityIdItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set city(city) {
    this._city = city;
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
          :host {
            display: block;
            margin-top: 19px;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
          }
          .fan-art-city {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
          }
          .city-info {
            padding: 24px;
            background-color: #FCE09B;
          }
          .city-info > h2 {
            font-weight: lighter;
          }
          .city-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
          }
            
            </style>
  
  
            <div class="city-info">
              <h2>${this._city[0].id}</h2>
              <p>${this._city[0].lokasi}</p>
            </div>`;
  }
}

customElements.define("city-id-item", CityIdItem);
