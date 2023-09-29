import "../component/app-header.js";
import "../component/navbar.js";
import "../component/search-bar.js";
import "../component/city-id.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const cityListElement = document.querySelector("city-id");

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
};

export default main;
