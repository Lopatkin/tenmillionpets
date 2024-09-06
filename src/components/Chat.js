import React, { useState, useEffect, useRef } from 'react';
import { Context } from '../index';
import { useContext } from 'react';
import { Paper, Tab, Tabs, Avatar, Button, Container, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { getRandomAddress } from './FirstInit'
import { get_random_apartment } from './FirstInit'
import { get_random_profession } from './FirstInit'

import city_map from '../images/city_map.png';



import { useCollectionData } from "react-firebase-hooks/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { fb_users, fb_messages } from '../utils/consts';

const Chat = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";

    const { userData } = useContext(Context);
    const { tg } = useContext(Context);

    tg.expand() // метод позволяет растянуть окно на всю высоту.

    //реальные данные
    // const userID = userData.id.toString();
    // const userFirstName = userData.first_name;
    // const userLastName = userData.last_name;
    // const userName = userData.username;
    // // const userPhotoUrl = userData.photo;
    // const userPhotoUrl = "";

    //данные для проверки интерфейса
    const userID = "859320";
    const userFirstName = "Андрей";
    const userLastName = "Лопаткин";
    const userName = "vizor101";
    // const userPhotoUrl = userData.photo;
    const userPhotoUrl = "";


    const { firestore } = useContext(Context)
    // const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection(fb_users).doc(userID).collection(fb_messages).orderBy('createdAt')
    )



    const sendMessage = async () => {
        // if (value == "first_init") {
        //     console.log(getRandomAddress());
        // }

        // if (value == "get_random_apartment") {
        //     get_random_apartment();
        // }

        // if (value == "get_random_profession") {
        //     get_random_profession();
        // }

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

    // const img = document.createElement('img');
    // img.src = 'path/to/image.png';
    // document.getElementById('map-container').append(img);

    return (
        <Container >
            <Grid container
                justify={"center"}
                style={{
                    backgroundColor: '#232323',
                    width: '100%'
                }}
            >

                {/* tabs begin */}
                <div className="container" >
                    <div >
                        <div className={`content ${getActiveClass(1, "active-content")}`}>
                            <div style={{ width: '100%', height: '75vh' }}>
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











                            </Grid >
                        </div>
                        <div className={`content ${getActiveClass(2, "active-content")}`}>
                            <h2>Ipsum</h2>
                        </div>
                        <div className={`content ${getActiveClass(3, "active-content")}`}>

                            <div style={{
                                display: "block"

                            }}>город Туманный</div>

                            <img

                                height='10px' src={city_map} />



                        </div>
                    </div>



                    <ul className="tab-list">
                        <li
                            className={`tabs ${getActiveClass(1, "active-tabs")}`}
                            onClick={() => toggleTab(1)}
                        >
                            Чат
                        </li>
                        <li
                            className={`tabs ${getActiveClass(2, "active-tabs")}`}
                            onClick={() => toggleTab(2)}
                        >
                            Действия
                        </li>
                        <li
                            className={`tabs ${getActiveClass(3, "active-tabs")}`}
                            onClick={() => toggleTab(3)}
                        >
                            Карта
                        </li>
                    </ul>
                </div>

                {/* tabs end */}











            </Grid >
        </Container >

    );
};

export default Chat;