import React, { useState, useEffect, Redirect } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom'


import Chat from "./Chat";

import { animalTypeVAR } from './RegisterStep2';
import { animalType3 } from './IntroStep2';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { fb_users, fb_messages } from '../utils/consts';


import { introStep3_human, introStep3_cat, introStep3_dog, animal_human, animal_cat, animal_dog } from '../utils/consts';

const IntroStep3 = () => {

    const { doc } = useContext(Context)
    const animalTypeFB = doc.data()?.userAnimal;
    var animalType;
    var show_intro3;
    const { userID } = useContext(Context);

    alert(userID);

    const { firestore } = useContext(Context);


    if (animalTypeVAR != undefined) {
        animalType = animalTypeVAR;
    }
    if (animalTypeFB != undefined) {
        animalType = animalTypeFB;
    }

    if (animalType3 == animal_human) {
        show_intro3 = introStep3_human;
    }
    if (animalType3 == animal_cat) {
        show_intro3 = introStep3_cat;
    }
    if (animalType3 == animal_dog) {
        show_intro3 = introStep3_dog;
    }


    // alert("animalTypeFB " + animalTypeFB + ". animalTypeVAR " + animalTypeVAR);
    // alert("animalType " + animalType);


    const { tg } = useContext(Context);
    tg.expand() // метод позволяет растянуть окно на всю высоту.


    const navigate = useNavigate();

    const navigateToChat = () => {
        //Тут выставляем стартовые параметры
        firestore.collection(fb_users).doc(userID).add({
            introPassed: true,
            // home_id: '2323'
        }).then(() => {
            console.log("Document successfully written!");
            // alert('Зарегились');
            navigate('/chat');
        })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });


    };

    return (
        <div>
            <h2>{show_intro3}</h2>
            <div>

                <Button style={{
                    display: 'inline-block',
                    width: '20%'

                }} variant={"outlined"} onClick={navigateToChat}>Поехали</Button>

                <Routes>
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/" element={<Home />} />
                </Routes>
                {/* <button onClick={navigateHome}>Home</button>
                <Button style={{
                    display: 'inline-block',
                    width: '20%'

                }} variant={"outlined"} onClick={navigateToRegisterStep1}>Далее</Button>

                <Routes>
                    <Route path="/registerStep1" element={<RegisterStep1 />} />
                    <Route path="/" element={<Home />} />
                </Routes> */}
            </div>
        </div>
    );
};

function Home() {
    // return <h2>Home</h2>;
}

export default IntroStep3;