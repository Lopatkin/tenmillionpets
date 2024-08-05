import React, { useState, useEffect } from 'react';
import { Context } from '../index';
import { useContext } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
// import { collection, getDocs } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";

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
const Chat = () => {


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

    const { userData } = useContext(Context);

    const userID = userData.id;
    const userFirstName = userData.first_name;
    const userLastName = userData.last_name;
    const userName = userData.username;
    // const userPhotoUrl = userData.photo;
    const userPhotoUrl = "";





    // const { firestore } = useContext(Context)
    // const [value, setValue] = useState('')
    // const [messages, loading] = useCollectionData(
    //     firestore.collection('messages').orderBy('createdAt')
    // )





    const { firestore } = useContext(Context)
    // const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('users').doc('800').collection('messages').orderBy('createdAt')
    )



    const sendMessage = async () => {
        firestore.collection('users').doc('800').collection('messages').add({
            userID: userID,
            userFirstName: userFirstName,
            userLastName: userLastName,
            userName: userName,
            userPhotoUrl: userPhotoUrl,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('');
        // console.log(userData?.userName);
    }


    return (
        <Container>
            <Grid container
                justify={"center"}
                style={{ height: window.innerHeight - 50, marginTop: 20 }}>
                <div style={{ width: '100%', height: '70vh', border: '1px solid gray', overflowY: 'auto' }}>
                    {messages?.map(message =>
                        <div style={{
                            margin: 10,
                            border: userID === message.userID ? '2px solid green' : '2px dashed red',
                            marginLeft: userID === message.userID ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5,
                        }}>
                            <Grid container>
                                <Avatar src={message.userPhotoUrl} />
                                <div>{message.userFirstName} {message.userName} {message.userLastName} </div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}

                    {/* <div className={styles.messages}>
            {messages.map(({ user, message }, i) => {
                const itsMe = user.name.trim().toLowerCase() === name.trim().toLowerCase();
                const className = itsMe ? styles.me : styles.user;
                return (
                    <div key={i} className={`${styles.message} ${className}`}>
                        <span className={styles.user}>{user.name}</span>
                        <div className={styles.text}>{message}</div>
                    </div>
                );
            })}
        </div> */}


                </div>
                <Grid container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{ width: '80%' }}
                >
                    <TextField
                        fullWidth
                        rowsmax={2}
                        variant={"outlined"}
                        value={value}
                        onChange={e => setValue(e.target.value)} //получаем значение в инпуте и кладём его в состояние
                    />
                    {/* <Button variant={"outlined"}>Отправить</Button> */}
                    <Button onClick={sendMessage} variant={"outlined"}>Отправить</Button>


                </Grid>
            </Grid>
        </Container >
    );
};

export default Chat;