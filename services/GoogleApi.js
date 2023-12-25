import axios from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = "AIzaSyCp3akDr9MGokBqo3XepisDoBz6xKE62Hk";

const nearbyPlaces = (latitude, longitude, type = "laundry") =>
  axios.get(
    `${BASE_URL}/nearbysearch/json?keyword=laundry&location=${latitude},${longitude}&radius=300&type=${type}&key=${API_KEY}`
  );

// return lat sama long
const searchPlace = (input = "Surabaya") =>
  axios.get(
    `${BASE_URL}/findplacefromtext/json?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&input=${input}&inputtype=textquery&key=${API_KEY}`
  );

const getPlacePhotoId = (placeid = "Surabaya") =>
  axios.get(`${BASE_URL}/details/json?placeid=${placeid}&key=${API_KEY}`);

const getPlacePhotoById = (photo_reference = "Surabaya") =>
  axios.get(
    `${BASE_URL}/photo?maxwidth=130&maxheight=110&photo_reference=${photo_reference}&key=${API_KEY}`
  );

export default {
  nearbyPlaces,
  searchPlace,
  getPlacePhotoById,
  getPlacePhotoId,
};
