import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDtlAHi5AfmymETpjvleLSsLLOpFgmz0aE",
  authDomain: "mymarket-41b14.firebaseapp.com",
  projectId: "mymarket-41b14",
  storageBucket: "mymarket-41b14.appspot.com",
  messagingSenderId: "470319733986",
  appId: "1:470319733986:web:57b17f7513af564db252bb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
