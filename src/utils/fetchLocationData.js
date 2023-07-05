import getCurrentPosition from './getCurrentPosition';

const fetchLocationData = async () => {
  try {
    const position = await getCurrentPosition();
    const { latitude, longitude } = position.coords;
    return { lat: latitude, lng: longitude };
  } catch (error) {
    console.log(error);
    return { lat: 0, lng: 0 };
  }
};

export default fetchLocationData;
