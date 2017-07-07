import firebase from 'firebase';

// feedback4_proto

const config = {
  apiKey: 'AIzaSyDKc4x3TDOsCD-_esdv6Hgwk7TAfIVZiN8',
  authDomain: 'feedbackr-proto.firebaseio.com',
  databaseURL: 'https://feedbackr-proto.firebaseio.com/'
};

var feedbackrApp = firebase.initializeApp(config, "feedbackrApp");
const database = feedbackrApp.database();

export default database;
