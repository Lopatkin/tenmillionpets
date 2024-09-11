import React, { useState, useEffect, useRef } from 'react';
import { Context } from '../index';
import { useContext } from 'react';
import { Paper, Tab, Tabs, Avatar, Button, Container, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { getRandomAddress } from './FirstInit'
import { get_random_apartment } from './FirstInit'
import { get_random_profession } from './FirstInit'
import { FirstInit } from './FirstInit'

import { test_user_id } from '../utils/consts';



import city_map from '../images/city_map.png';
import { currentLoc } from './RegisterStep2';




import { useCollectionData } from "react-firebase-hooks/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { fb_users, fb_messages, fb_locations } from '../utils/consts';
import { ControlCameraSharp } from '@mui/icons-material';

const Chat = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";

    const { userData } = useContext(Context);
    const { tg } = useContext(Context);
    const { userID } = useContext(Context);
    const { doc } = useContext(Context);
    const { docRef } = useContext(Context);

    var curLoc = doc.data()?.locationID;
    if (curLoc == undefined) {
        curLoc = currentLoc;
    }
    tg.expand() // метод позволяет растянуть окно на всю высоту.

    var userFirstName;
    var userLastName;
    var userName;
    var userPhotoUrl;

    if (userID == test_user_id) {
        userFirstName = "Вася";
        userLastName = "Пупкин";
        userName = "Watcher";
        //  userPhotoUrl = userData.photo;
        userPhotoUrl = "";
    } else {
        userFirstName = userData.first_name;
        userLastName = userData.last_name;
        userName = userData.username;
        // userPhotoUrl = userData.photo;
        userPhotoUrl = "";
    }

    //реальные данные
    // const userID = userData.id.toString();
    // const userFirstName = userData.first_name;
    // const userLastName = userData.last_name;
    // const userName = userData.username;
    // // const userPhotoUrl = userData.photo;
    // const userPhotoUrl = "";

    //данные для проверки интерфейса
    // const userID = "859320";
    // const userFirstName = "Андрей";
    // const userLastName = "Лопаткин";
    // const userName = "vizor101";
    // const userPhotoUrl = userData.photo;
    // const userPhotoUrl = "";

    const { firestore } = useContext(Context)
    // const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection(fb_locations).doc(curLoc).collection(fb_messages).orderBy('createdAt')
    )

    const [locations, loading1] = useCollectionData(
        firestore.collection(fb_locations).where("locationPublic", "==", true)
    )

    console.log('locations ' + locations)
    const switchToMap = () => {
        // alert('тут карта')
        document.getElementById("city_map").style.display = 'inline';
        document.getElementById("city_list").style.display = 'none';



    }
    const switchToList = () => {
        // alert('тут список')
        document.getElementById("city_map").style.display = 'none';
        document.getElementById("city_list").style.display = 'inline';

    }

    const goToLocation = (loc) => {
        alert('goToLocation ' + loc)

    }





    const sendMessage = async () => {
        if (value == "first_init") {
            FirstInit();
        }

        // if (value == "get_random_apartment") {
        //     get_random_apartment();
        // }

        // if (value == "get_random_profession") {
        //     get_random_profession();
        // }

        if (value) {
            firestore.collection(fb_locations).doc(curLoc).collection(fb_messages).add({
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


                            <Container container
                                justify={"end"}
                                style={{
                                    backgroundColor: '#232323',
                                    width: '100%'
                                }}>
                                <Grid container
                                    direction={"column"}
                                    alignItems={"flex-end"}
                                    style={{
                                        width: '100%',
                                        display: 'inline-block'
                                    }}>
                                    <div style={{
                                        display: 'inline-block'
                                    }}><h3>город Туманный</h3></div>

                                    <div style={{
                                        position: 'absolute',
                                        right: '20px',
                                        display: 'inline-block'
                                    }}>
                                        <Button onClick={switchToMap}>карта</Button>
                                        <Button onClick={switchToList}>списком</Button>
                                    </div>
                                </Grid>

                            </Container>

                            <img id='city_map' src={city_map} />

                            <div id='city_list' style={{ width: '100%', height: '75vh' }}>
                                {locations?.map(location =>

                                    // Блок сообщения
                                    <div style={{
                                        margin: 5,
                                        marginLeft: 'auto',
                                        width: 'fit-content',
                                        padding: 1,
                                    }}>


                                        {/* Message */}
                                        <div onClick={function () { goToLocation(location.locationID) }} style={{
                                            display: 'inline-block',
                                            color: '#ffffff',
                                            fontSize: '20px',
                                            marginLeft: 'auto',
                                            backgroundColor: '#7ba730',
                                            width: 'fit-content',
                                            borderRadius: '15px',
                                            padding: '15px'
                                        }}> {location.locationName}</div>
                                    </div>
                                )}
                            </div >

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
                            Навигация
                        </li>
                    </ul>
                </div>

                {/* tabs end */}











            </Grid >
        </Container >

    );


};

export default Chat;