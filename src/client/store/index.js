import { store } from 'react-easy-state';
import { getPlaces } from '../network';

const globalState = store({
  places: [],
  transactions: [],
  setPlaces(places) {
    this.places = places;
  },
  addTransaction({ amount, description }) {
    this.transactions.push({ amount, description });
  },
  get currentBalance() {
    return this.transactions.reduce((acc, el) => acc + el.amount, 0);
  }
});

function setup() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
      const places = await getPlaces({ latitude, longitude });
      const NUM_FAKE_TRANSACTIONS = 5;
      for (let i = 0; i < NUM_FAKE_TRANSACTIONS; i += 1)
        globalState.addTransaction({ amount: 100, description: places[i].Shortname });
      globalState.setPlaces(places);
    });
  }
}

setup();

export default globalState;
