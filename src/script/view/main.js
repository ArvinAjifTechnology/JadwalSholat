import "../component/app-header.js";
import "../component/navbar.js";
import "../component/search-bar.js";
import "../component/city-id.js";
import "../component/search-prayer-schedule.js";
import "../component/prayer-schedule.js";
import "bootstrap/dist/css/bootstrap.min.css";

import DataSource from "../data/data-source.js";
import { async } from "regenerator-runtime";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const cityListElement = document.querySelector("city-id");
  const searchPrayerScheduleElement = document.querySelector(
    "search-prayer-schedule"
  );
  const prayerScheduleElement = document.querySelector("prayer-schedule");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCityId(searchElement.value);
      console.log(result);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    cityListElement.cities = results;
  };
  const fallbackResult = (message) => {
    cityListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

  const onButtonSearchPrayerScheduleClicked = async () => {
    const cityID = searchPrayerScheduleElement.value.cityId;
    const dateValue = searchPrayerScheduleElement.value.date;
    const dateParts = dateValue.split("-");
    const day = parseInt(dateParts[2], 10);
    const month = parseInt(dateParts[1], 10); // Bulan dimulai dari 0 (Januari = 0, Februari = 1, dst.)
    const year = parseInt(dateParts[0], 10);
    console.log(year, month, day);

    try {
      const result = await DataSource.searchPrayerSchedule(
        cityID,
        year,
        month,
        day
      );
      console.log(result);
      renderResultPrayerSchedule(result);
    } catch (message) {
      fallbackResultPrayerSchedule(message);
    }
  };

  const renderResultPrayerSchedule = (results) => {
    prayerScheduleElement.prayerSchedule = results;
  };
  const fallbackResultPrayerSchedule = (message) => {
    prayerScheduleElement.renderError(message);
  };
  searchPrayerScheduleElement.clickEvent = onButtonSearchPrayerScheduleClicked;
};

export default main;
