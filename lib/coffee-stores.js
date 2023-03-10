import { createApi } from "unsplash-js";
const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
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
export const fetchCoffeeStores = async (
  latLong = "43.653833032607096,-79.37896808855945",
  limit = 6
) => {
  const photos = await getListOfCoffeeStorePhotos();
  //console.log("photos inside fetchcoffeestores", photos);
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(
    getUrlForCoffeeStores(latLong, "coffee", limit),
    options
  );
  const data = await response.json();
  return data.results.map((result, index) => {
    return {
      address: result.location.address,
      name: result.name,
      locality: result.location.locality,
      id: result.fsq_id,
      imgUrl: photos.length > 0 ? photos[index] : null,
    };
  });
  // .catch((err) => console.error(err));
};
