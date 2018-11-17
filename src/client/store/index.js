import { store } from 'react-easy-state';
import { getPlaces } from '../network';

const globalState = store({
  places: [],
  setPlaces(places) {
    this.places = places;
  }
});

function setup() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
      const places = await getPlaces({ latitude, longitude });
      globalState.setPlaces(places);
    });
  }
}

setup();

export default globalState;
