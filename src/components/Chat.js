import React, { useState, useEffect } from 'react';
import { Context } from '../index';
import { useContext } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// import { collection, getDocs } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { fb_users, fb_messages } from '../utils/consts';

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
    const { tg } = useContext(Context);

    tg.expand() // метод позволяет растянуть окно на всю высоту.

    //реальные данные
    const userID = userData.id;
    const userFirstName = userData.first_name;
    const userLastName = userData.last_name;
    const userName = userData.username;
    // const userPhotoUrl = userData.photo;
    const userPhotoUrl = "";

    //данные для проверки интерфейса
    // const userID = 300;
    // const userFirstName = "Андрей";
    // const userLastName = "Лопаткин";
    // const userName = "vizor101";
    // // const userPhotoUrl = userData.photo;
    // const userPhotoUrl = "";


    const { firestore } = useContext(Context)
    // const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection(fb_users).doc(userID).collection(fb_messages).orderBy('createdAt')
    )



    const sendMessage = async () => {
        if (value) {
            firestore.collection(fb_users).doc(userID).collection(fb_messages).add({
                userID: userID,
                userFirstName: userFirstName,
                userLastName: userLastName,
                userName: userName,
                userPhotoUrl: userPhotoUrl,
                text: value,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setValue('');
        } else { }
    }

    return (
        <Container >
            <Grid container

                justify={"center"}
                style={{
                    backgroundColor: '#232323',
                    width: '100%'
                }}
            >
                <div style={{ width: '100%', height: '70vh' }}>
                    {messages?.map(message =>

                        // Блок сообщения
                        <div style={{
                            margin: 5,
                            marginLeft: userID === message.userID ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 1,
                        }}>

                            {/* UserName */}
                            <div style={{
                                display: userID === message.userID ? 'none' : 'visible',
                                color: '#514c4c'
                            }}>{message.userFirstName} {message.userName} {message.userLastName}</div>

                            {/* Avatar */}
                            <div style={{
                                display: userID === message.userID ? 'none' : 'inline-block'
                            }}><Avatar src={message.userPhotoUrl} /></div>

                            {/* Message */}
                            <div style={{
                                display: 'inline-block',
                                color: '#ffffff',
                                marginLeft: userID === message.userID ? 'auto' : '10px',
                                backgroundColor: userID === message.userID ? '#0d49d7' : '#4e4c4f',
                                width: 'fit-content',
                                borderRadius: '8px',
                                padding: '8px'
                            }}>{message.text}</div>
                        </div>
                    )}
                </div >

                <Grid container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{
                        width: '100%',
                        display: 'inline-block'


                    }}>
                    <TextField
                        style={{
                            width: '80%',
                            display: 'inline-block'
                        }}
                        fullWidth
                        rowsmax={2}
                        variant={"outlined"}
                        value={value}
                        onChange={e => setValue(e.target.value)} //получаем значение в инпуте и кладём его в состояние
                    />
                    <Button style={{
                        display: 'inline-block',
                        width: '20%'

                    }} onClick={sendMessage} variant={"outlined"} endIcon={<SendIcon />}>SEND</Button>
                </Grid>
            </Grid >
        </Container >
    );
};

export default Chat;