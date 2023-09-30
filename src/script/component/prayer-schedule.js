class PrayerSchedule extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set prayerSchedule(prayerSchedule) {
    console.log("Cities:", typeof prayerSchedule);
    this._prayerSchedule = prayerSchedule;
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
  @font-face {
    font-family: 'Sketsa Ramadhan';
    src: url('/src/fonts/SketsaRamadhan.otf') format('otf');
    font-weight: 600;
    font-style: normal;
  }
  :host {
    display: block;
    margin-top: 19px;
    margin-bottom: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }
  .fan-art-prayer-schedule {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    object-position: center;
  }
  .prayer-schedule-info {
    padding: 24px;
    background-color: #FCE09B;
  }
  .prayer-schedule-info > h2 {
    font-weight: lighter;
    font-family: 'Sketsa Ramadhan';
  }
  .prayer-schedule-info > p {
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10; /* number of lines to show */
  }
    
      }
    </style>
    <div class="prayer-schedule-info">
        <h2>Imsak</h2>
        <p>${this._prayerSchedule.imsak}</p>
    </div>
    <div class="prayer-schedule-info">
        <h2>Shubuh</h2>
        <p>${this._prayerSchedule.subuh}</p>
    </div>
    <div class="prayer-schedule-info">
        <h2>Dzuhur</h2>
        <p>${this._prayerSchedule.dzuhur}</p>
    </div>
    <div class="prayer-schedule-info">
        <h2>Ashar</h2>
        <p>${this._prayerSchedule.ashar}</p>
    </div>
    <div class="prayer-schedule-info">
        <h2>Maghrib</h2>
        <p>${this._prayerSchedule.maghrib}</p>
    </div>
    <div class="prayer-schedule-info">
        <h2>Isya</h2>
        <p>${this._prayerSchedule.isya}</p>
    </div>
    `;
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

customElements.define("prayer-schedule", PrayerSchedule);
