import React, { useState, useEffect } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Route, Routes, useNavigate } from 'react-router-dom'

import RegisterStep1 from './RegisterStep1';
import RegisterStep3 from './RegisterStep1';
import { master_role, pet_role } from '../utils/consts';

// import { collection, getDocs } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { fb_users, fb_messages } from '../utils/consts';

const RegisterStep2 = () => {

    var role;
    const { tg } = useContext(Context);
    const { userID } = useContext(Context);
    const { firestore } = useContext(Context);
    const { userData } = useContext(Context);


    tg.expand() // метод позволяет растянуть окно на всю высоту.

    const navigate = useNavigate();

    const navigateToRegisterStep3 = () => {
        // alert('пришли ' + userID);

        firestore.collection(fb_users).doc(userID).set({
            userID: userID,
            userRole: role,
            introPassed: false,
            userFirstName: userData.first_name,
            userLastName: userData.last_name,
            userName: userData.username,
            userPhotoUrl: "",
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
            .then((docRef) => {
                alert('Зарегились');

                console.log("Document written with ID: ", docRef.id);

                firestore.collection(fb_users).doc(userID).get().then((doc) => {
                    if (doc.introPassed = true) {
                        console.log("Document data:", doc.data());
                        alert('intro passed');
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                        alert('intro not passed');

                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                // navigate('/registerStep3');

            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });



    };

    const navigateToRegisterStep1 = () => {
        navigate('/registerStep1');
    };

    const human = () => {
        document.getElementById("textRole").innerHTML = 'Хозяин';
        document.getElementById("textRoleDescription").innerHTML = 'Вы сами принимаете за себя решение';
        role = master_role;
    }

    const pet = () => {
        document.getElementById("textRole").innerHTML = 'Питомец';
        document.getElementById("textRoleDescription").innerHTML = 'Ваша судьба неопределена';
        role = pet_role;
    }


    return (

        <Container >
            <Grid container
                style={{
                    backgroundColor: '#232323',
                }}
            >
                <div style={{
                    width: '100%',
                    textAlign: 'center'
                }}>
                    <h2>Кем вы хотите быть?</h2>
                </div >

                <Grid container
                    justifyContent={'center'}

                >
                    <div style={{
                        display: 'inline-block',
                        margin: '50px',
                        textAlign: 'center'
                    }}>
                        <img
                            onClick={human} width='20%' src='https://cdn.icon-icons.com/icons2/906/PNG/512/hand_icon-icons.com_70115.png' />
                        <img
                            onClick={pet} width='20%' src='https://cdn.promodj.com/afs/83a444d059de51cfcf3520e927a47e4a12%3Aresize%3A2000x2000%3Asame%3A269e3e' />
                    </div >

                    <Grid container
                        justifyContent={'center'}>

                        <div style={{
                            display: 'inline-block',
                            width: '100%',
                            textAlign: 'center'
                        }} id="textRole" />

                        <div style={{
                            display: 'inline-block',
                            width: '100%',
                            textAlign: 'center'
                        }} id="textRoleDescription" />
                    </Grid>



                    <Button style={{
                        display: 'inline-block',
                        width: '100%',
                        marginTop: '20px'

                    }} onClick={navigateToRegisterStep3}>Выбрать</Button>


                </Grid>
            </Grid >
        </Container >


        // <div>
        //     <h2>Кем вы хотите быть?</h2>

        //     <div>
        //         <img onClick={human} width='20%' src='https://cdn.icon-icons.com/icons2/906/PNG/512/hand_icon-icons.com_70115.png' />
        //         <img onClick={pet} width='20%' src='https://cdn.promodj.com/afs/83a444d059de51cfcf3520e927a47e4a12%3Aresize%3A2000x2000%3Asame%3A269e3e' />
        //     </div>

        //     <div>
        //         {/* <button onClick={navigateToRegisterStep1}>Назад</button> */}
        //         <Button style={{
        //             display: 'inline-block',
        //             width: '20%'

        //         }} onClick={navigateToRegisterStep3}>Выбрать</Button>

        //         <Routes>
        //             {/* <Route path="/registerStep1" element={<RegisterStep1 />} /> */}
        //             <Route path="/registerStep3" element={<RegisterStep3 />} />
        //         </Routes>
        //     </div>
        // </div>
    );
};

// function Register_step1() {
//     return <h2>Register_step1</h2>;
// }

// function Register_step3() {
//     return <h2>Register_step3</h2>;
// }

export default RegisterStep2;