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
  },
  {
    id: '2',
    price: 700,
    title: 'Bio potatoes',
    supplier: 'Johann',
    description: 'Buy local and high quality potatoes from a farm.',
    coverImg: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1630b73eb8751e63da8e46cfcdbb45a&auto=format&fit=crop&w=1050&q=80'
  },
  {
    id: '3',
    price: 1800,
    title: 'Wine from a local farm',
    supplier: 'Gertrud',
    description: 'Tasty wine from a local farm.',
    coverImg: 'https://images.unsplash.com/photo-1504868173-db962b7c3757?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37c9497a690714318741835b032894c2&auto=format&fit=crop&w=1050&q=80'
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

function randomInt(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function setup() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
      const places = (await getPlaces({ latitude, longitude })).map(place => ({
        ...place,
        amount: randomInt(50, 500)
      }));
      const NUM_FAKE_TRANSACTIONS = 5;
      for (let i = 0; i < NUM_FAKE_TRANSACTIONS; i += 1)
        globalState.addTransaction({ amount: places[i].amount, description: places[i].Shortname });
      globalState.setPlaces(places);

      const NUM_FAKE_TRAVELS = 10;
      for (let i = 0; i < NUM_FAKE_TRAVELS; i += 1) {
        const distance = randomInt(2, 12);
        globalState.addTransaction({
          amount: distance * 10,
          description: 'Travelled by bus',
          distance,
          travelType: 'bus',
          type: 'travel'
        });
      }
    });
  }
}

setup();

export default globalState;
