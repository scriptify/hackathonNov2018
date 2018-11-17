import { store } from 'react-easy-state';
import { getPlaces } from '../network';

const greenGoods = [
  {
    id: '1',
    price: 2000,
    title: 'Rent an E-Bike for a day',
    supplier: 'Renate',
    description: 'Rent an E-bike for one day and experience the south tyrolean nature from a different angle.',
    coverImg: 'https://images.unsplash.com/photo-1517852537428-55f49251ceb5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb455b4f968970ea0a8529f60485b6ce&auto=format&fit=crop&w=1052&q=80'
  }
];

function extractGetParam(propName) {
  const obj = {};
  window.location.search
    .slice(1, window.location.search.length)
    .split('&')
    .forEach((pair) => {
      const [prop, value] = pair.split('=');
      obj[prop] = value;
    });
  return obj[propName];
}

const globalState = store({
  places: [],
  transactions: [],
  greenGoods,
  hooray: null,
  route: '/',
  client: {
    name: extractGetParam('name'),
    to: extractGetParam('to'),
    type: extractGetParam('type') || 'consumer'
  },
  setPlaces(places) {
    this.places = places;
  },
  addTransaction({
    amount, description, type = 'discover', distance, travelType
  }) {
    this.transactions.push({
      amount, description, type, distance, travelType
    });
    this.transactions = this.transactions.reverse();
  },
  get currentBalance() {
    return this.transactions.reduce((acc, el) => acc + el.amount, 0);
  },
  get distanceTravelled() {
    return this.transactions.reduce((acc, el) => acc + (el.type === 'travel' ? el.distance : 0), 0);
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

      const NUM_FAKE_TRAVELS = 10;
      for (let i = 0; i < NUM_FAKE_TRAVELS; i += 1) {
        globalState.addTransaction({
          amount: 100,
          description: 'Travelled by bus',
          distance: 10,
          travelType: 'bus',
          type: 'travel'
        });
      }
    });
  }
}

setup();

export default globalState;
