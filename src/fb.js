import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyABCW7cxogBa-O1yRGMxT3LkBZj9NqZPVM",
  authDomain: "todo-ninja-9de2e.firebaseapp.com",
  databaseURL: "https://todo-ninja-9de2e.firebaseio.com",
  projectId: "todo-ninja-9de2e",
  storageBucket: "todo-ninja-9de2e.appspot.com",
  messagingSenderId: "1071214720206",
  appId: "1:1071214720206:web:e473f7a32d0bfa1bef0c9f",
  measurementId: "G-J75M6HYM26"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true })

export default db;