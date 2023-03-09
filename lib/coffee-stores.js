import { createApi } from "unsplash-js";
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStores = (latlong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}&limit=${limit}`;
};
const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: "coffee stop",
    perPage: 30,
    orientation: "landscape",
  });
  const unsplashResults = photos.response.results;
  //console.log(unsplashResults[0].urls.small);
  return unsplashResults.map((result) => {
    return result.urls.small;
    //console.log("result.urls.small returned: ", result.urls.small);
  });
};
export const fetchCoffeeStores = async () => {
  const photos = await getListOfCoffeeStorePhotos();
  //console.log("photos inside fetchcoffeestores", photos);
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(
    getUrlForCoffeeStores(
      "43.653833032607096%2C-79.37896808855945",
      "coffee",
      "6"
    ),
    options
  );
  const data = await response.json();
  return data.results.map((result, index) => {
    return {
      ...result,
      imgUrl: photos[index],
    };
  });
  // .catch((err) => console.error(err));
};
