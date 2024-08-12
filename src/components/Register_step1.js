import React, { useState, useEffect } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { Route, Routes, Navigate } from 'react-router-dom'


// import { collection, getDocs } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { fb_users, fb_messages } from '../utils/consts';

import Login from "./Login";
import Chat from "./Chat";

// const tg = window.Telegram.WebApp;
//

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDKdcVmzzvFu_7lTiI-rMASUsT8qjchMr8",
//     authDomain: "tenmillionpets.firebaseapp.com",
//     projectId: "tenmillionpets",
//     storageBucket: "tenmillionpets.appspot.com",
//     messagingSenderId: "105880127070",
//     appId: "1:105880127070:web:430221607b4b3de026d6cf",
//     measurementId: "G-J4VZXFD0FS"
// };
// // Initialize Firebase

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
/////TG/////
// const TelegramBot = require('node-telegram-bot-api');

// const token = '7429947035:AAFhVtxukC71l3YUsNiPMGxMeGTjRV_VRPk';

// const bot = new TelegramBot(token, { polling: true });

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;

//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });
// /////TG/////
const Register_step1 = () => {

    const { tg } = useContext(Context);
    tg.expand() // метод позволяет растянуть окно на всю высоту.

    // const viewProfile = () => {
    //     // window.location.assign('/Chat');

    // }

    return (
        <h2>А что если.. по другую сторону экрана будет не виртуальный зверёк, следовавший своим алгоритмам, а настоящий живой человек?..</h2>





    );

    // alert('Регистрируем пользователя ');


    //   <script src="https://telegram.org/js/telegram-web-app.js"></script>

    // {
    //     <script>
    // console.log('tg ' + tg.initDataUnsafe.user);

    //         let tg = window.Telegram.WebApp;
    //     </script>
    // }

    // db.collection("messages").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // });



    // const { user } = useContext(Context);
    // const [value, setValue] = useState('');
    // const [messages, loading] = useCollectionData(
    //     db.collection('messages').orderBy('createdAt')
    // )
    // console.log(messages);

    // const { userData } = useContext(Context);
    // const { tg } = useContext(Context);

    // tg.expand() // метод позволяет растянуть окно на всю высоту.
    // alert("Регистрируем пользовалея " + userData)

    //реальные данные
    // const userID = userData.id;
    // const userFirstName = userData.first_name;
    // const userLastName = userData.last_name;
    // const userName = userData.username;
    // // const userPhotoUrl = userData.photo;
    // const userPhotoUrl = "";

    //данные для проверки интерфейса
    // const userID = 800;
    // const userFirstName = "Андрей";
    // const userLastName = "Лопаткин";
    // const userName = "vizor101";
    // // const userPhotoUrl = userData.photo;
    // const userPhotoUrl = "";


    // const { firestore } = useContext(Context)
    // const [value, setValue] = useState('')
    // const [messages, loading] = useCollectionData(
    //     firestore.collection('messages').orderBy('createdAt')
    // )





    // const { firestore } = useContext(Context)
    // // const [user] = useAuthState(auth)
    // const [value, setValue] = useState('')
    // const [messages, loading] = useCollectionData(
    //     firestore.collection(fb_users).doc('800').collection(fb_messages).orderBy('createdAt')
    // )



    // const sendMessage = async () => {
    //     if (value) {
    //         firestore.collection(fb_users).doc('800').collection(fb_messages).add({
    //             userID: userID,
    //             userFirstName: userFirstName,
    //             userLastName: userLastName,
    //             userName: userName,
    //             userPhotoUrl: userPhotoUrl,
    //             text: value,
    //             createdAt: firebase.firestore.FieldValue.serverTimestamp()
    //         })
    //         setValue('');
    //     } else { }
    // }

    // return (
    //     <Routes>
    //         <Route path="/chat" element={<Chat />} />
    //         <Route path="*" element={<Navigate to="/chat" replace />} />
    //     </Routes>
    // );


};


export default Register_step1;