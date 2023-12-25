function getPlaceInformation(tempat) {
  return {
    nama: tempat.name,
    place_id: tempat.place_id,
    vicinity: tempat.vicinity,
    photo_reference: tempat.photos[0].photo_reference,
    rating: tempat.rating || 0,
  };
}

export default {
  getPlaceInformation,
};
