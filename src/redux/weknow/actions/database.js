import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAEdsX2yHdQfXMD-GFpzEJtLGGauNL1IaI',
  authDomain: 'think-we-know.firebaseio.com',
  databaseURL: 'https://think-we-know.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
