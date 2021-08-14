import firebase from 'firebase/app';
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyDxArCZ03psGfr7pIfl2Hum9Hdj8RLJnac",
  authDomain: "online-biblioteka.firebaseapp.com",
  databaseURL: "https://online-biblioteka-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-biblioteka",
  storageBucket: "online-biblioteka.appspot.com",
  messagingSenderId: "59664396449",
  appId: "1:59664396449:web:8274bf7fc1f532116640e0",
  measurementId: "G-2X46CY57TJ"
  
};





firebase.initializeApp(firebaseConfig);




export default firebase;