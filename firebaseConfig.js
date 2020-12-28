import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyB9abDsUN_QU2Kiv5Ji-1QGHgdYx6eYTUQ",
    authDomain: "visitor-book-4653c.firebaseapp.com",
    projectId: "visitor-book-4653c",
    storageBucket: "visitor-book-4653c.appspot.com",
    messagingSenderId: "1090045616540",
    appId: "1:1090045616540:web:6b0be3e3e6ca7b2a3ba859",
    measurementId: "G-3XXJK4R4GY"
  };
  if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}
  firebase.firestore().settings({ experimentalForceLongPolling: true });


  export default firebase;