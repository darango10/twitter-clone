import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCEyjh1db5fCbNn4YgpDa3fH8dnF4hQKW8",
    authDomain: "clonetwitter123.firebaseapp.com",
    databaseURL: "https://clonetwitter123.firebaseio.com",
    projectId: "clonetwitter123",
    storageBucket: "clonetwitter123.appspot.com",
    messagingSenderId: "38355180882",
    appId: "1:38355180882:web:55ed0cac3054afd1b36e8b",
    measurementId: "G-V5PSP48VNZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db;
