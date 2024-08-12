import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/database";



// {
//   <script src="https://telegram.org/js/telegram-web-app.js"></script>

// }



// tg.expand(); //расширяем сайт на весь экран

// //Эти кнопки создаются телеграмом
// tg.MainButton.textColor = '#FFFFFF';
// tg.MainButton.color = '#2cab37';


// Telegram.WebApp.onEvent("mainButtonClicked", function () {
//   tg.sendData(item);
// });



// let usercard = document.getElementById("usercard");

// let p = document.createElement("p");

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}
// ${tg.initDataUnsafe.user.id}`;

// usercard.appendChild(p);

// firebase.initializeApp({
//   apiKey: "AIzaSyDKdcVmzzvFu_7lTiI-rMASUsT8qjchMr8",
//   authDomain: "tenmillionpets.firebaseapp.com",
//   projectId: "tenmillionpets",
//   storageBucket: "tenmillionpets.appspot.com",
//   messagingSenderId: "105880127070",
//   appId: "1:105880127070:web:430221607b4b3de026d6cf",
//   measurementId: "G-J4VZXFD0FS"
// }
// );

// const firestore = firebase.firestore()

{/* <div>hello user</div> */ }
// let tg = window.Telegram.WebApp;
// console.log(tg);

firebase.initializeApp({
  apiKey: "AIzaSyDKdcVmzzvFu_7lTiI-rMASUsT8qjchMr8",
  authDomain: "tenmillionpets.firebaseapp.com",
  projectId: "tenmillionpets",
  storageBucket: "tenmillionpets.appspot.com",
  messagingSenderId: "105880127070",
  appId: "1:105880127070:web:430221607b4b3de026d6cf",
  measurementId: "G-J4VZXFD0FS"
}
);

export const Context = createContext(null)

const firestore = firebase.firestore()

const tg = window.Telegram.WebApp;


const userData = tg.initDataUnsafe?.user;




const db = firebase.firestore();

var docRef = db.collection('users').doc("3030");
const myData = docRef.get().then((doc) => {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Context.Provider value={{
      userData,
      firestore,
      tg,
      doc
    }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context.Provider>
  );

}).catch((error) => {
  console.log("Error getting document:", error);
});