import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAEdsX2yHdQfXMD-GFpzEJtLGGauNL1IaI',
  authDomain: 'think-we-know.firebaseio.com',
  databaseURL: 'https://think-we-know.firebaseio.com/'
};

var weknowApp = firebase.initializeApp(config, "weknowApp");
const database = weknowApp.database();

export default database;
