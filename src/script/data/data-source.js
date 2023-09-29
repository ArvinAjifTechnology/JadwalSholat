import "regenerator-runtime/runtime";
import axios from "axios";
class DataSource {
  static searchCityId(keyword) {
    // return fetch(`https://api.themoviedb.org/3/search/movie?api_key=76e6c22d884d081696ff4d738eda69cd&language=en-US&query=${keyword}&include_adult=false`)
    return axios
      .get(`https://api.myquran.com/v1/sholat/kota/cari/${keyword}`)
      .then((response) => {
        if (response.data) {
          return Promise.resolve(response.data);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      })
      .catch((error) => {
        console.error("Error during search:", error);
        return Promise.reject("Error during search");
      });
  }
}

export default DataSource;
