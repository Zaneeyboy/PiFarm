import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAgaL8R_i9vwihqxugD3y9LIS6lGoWpbZQ",
    authDomain: "pifarm.firebaseapp.com",
    databaseURL: "https://pifarm.firebaseio.com",
    projectId: "pifarm",
    storageBucket: "pifarm.appspot.com",
    messagingSenderId: "911678453680",
    appId: "1:911678453680:web:aaf24af49b310729840875",
    measurementId: "G-J3F6LD6B38"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();