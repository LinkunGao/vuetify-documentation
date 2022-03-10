// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  query,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";

// collection, getDocs

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWSPczHahPzcS0m4y5MZ0sG09g8HVE-8w",
  authDomain: "todo-skycoco.firebaseapp.com",
  projectId: "todo-skycoco",
  storageBucket: "todo-skycoco.appspot.com",
  messagingSenderId: "373352697464",
  appId: "1:373352697464:web:d46a8d1a6ac7ebbfaf278d",
  measurementId: "G-6J9FFH8WYP",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

// const doc_aaa = doc(db, "projects/aaa");

// const project = {
//   title: "this.title",
//   content: "this.content",
//   due: 'format(new Date(this.due), "do MMM yyyy")',
//   person: "Skycoco",
//   status: "ongoing",
// };

// setDoc(doc_aaa, project, { merge: true });

// another way to add docs
// const ordersCollection = collection(db, "projects");
// addDoc(ordersCollection, project);

// get sigle doc
// getDoc(doc_aaa).then((res) => {
//   if (res.exists()) {
//     console.log(res.data());
//   }
// });

//get multiple docs
// getDocs(query(collection(db, "projects"))).then((res) => {
//   res.forEach((doc) => {
//     console.log(doc.data());
//   });
// });
// const all = query(collection(db, "projects"));

// onSnapshot(all, (docSnapshot) => {
//   // console.log(JSON.stringify(docSnapshot.docs.map((e) => e.data())));
//   docSnapshot.docs.map((e) => console.log(e.data()));
// });

// onSnapshot(doc_aaa, (docSnapshot) => {
//   if (docSnapshot.exists()) {
//     console.log(docSnapshot.data());
//   }
// });

export { doc, db, setDoc, collection, query, getDocs, getDoc, onSnapshot };
