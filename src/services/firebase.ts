import React from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6v4DW_EwtUcbgkCJuoVKvqRLiW95Uy7g",
  authDomain: "pedropaivaportfolio.firebaseapp.com",
  databaseURL: "https://pedropaivaportfolio-default-rtdb.firebaseio.com",
  projectId: "pedropaivaportfolio",
  storageBucket: "pedropaivaportfolio.appspot.com",
  messagingSenderId: "199378979419",
  appId: "1:199378979419:web:a6223254ed35ac29810d7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

//----------------------------------------

//MÉTODOS DO REALTIME DATABASE:

export function getData<Type>(path:string, setState:React.Dispatch<React.SetStateAction<Type>>) {
  const getRef = ref(db, path);
  onValue(
    getRef,
    (snapshot) => setState(snapshot.val()),
    {onlyOnce: true}
  )
}