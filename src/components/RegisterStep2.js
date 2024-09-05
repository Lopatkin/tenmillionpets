import React, { useState, useEffect, createContext } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Route, Routes, useNavigate } from 'react-router-dom'

import RegisterStep1 from './RegisterStep1';
import RegisterStep3 from './RegisterStep1';
import { animal_dog, animal_cat, animal_human, role_master, role_pet, base_salary } from '../utils/consts';
import { professionsArr } from '../utils/consts_professions';
import { get_random_profession } from './FirstInit';
import { getRandomAddress } from './FirstInit';






import animal_cat_pic from '../images/animal_cat.png';
import animal_dog_pic from '../images/animal_dog.png';

// import animal_dog_pic from '../src/images/animal_dog.png';

import IntroStep1 from './IntroStep1';


// import { collection, getDocs } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { fb_users, fb_messages } from '../utils/consts';

export var animalTypeVAR;

const RegisterStep2 = () => {

    var role;
    var animal;
    const { tg } = useContext(Context);
    const { userID } = useContext(Context);
    const { firestore } = useContext(Context);
    const { userData } = useContext(Context);

    tg.expand() // метод позволяет растянуть окно на всю высоту.

    const navigate = useNavigate();

    const navigateToRegisterStep3 = () => {
        var getProfession;
        var myAddressArr;
        var fullAddress;

        // alert('пришли ' + userID);

        if (animal == animal_human) {
            getProfession = get_random_profession();
            myAddressArr = getRandomAddress();
            var apps = (myAddressArr[4] > 0) ? ", кв " + myAddressArr[4] : "";
            fullAddress = myAddressArr[1] + ", " + myAddressArr[2] + ", дом " + myAddressArr[3] + apps;

            // alert(getProfession);
        } else {
            // alert("я " + animal);
        }


        firestore.collection(fb_users).doc(userID).set({
            userID: userID,
            userRole: role,
            userAnimal: animal,
            introPassed: false,
            userFirstName: userData.first_name,
            userLastName: userData.last_name,
            userName: userData.username,
            userPhotoUrl: "",
            socialRating: 0,
            profession: getProfession,
            salary: base_salary,
            salaryMultiplier: 1,
            fullAddress: fullAddress,
            city: myAddressArr[0],
            district: myAddressArr[1],
            street: myAddressArr[2],
            home: myAddressArr[3],
            appartment: myAddressArr[4],
            experience: 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            console.log("Document successfully written!");
            // alert('Зарегились');

            var docRef = firestore.collection(fb_users).doc(userID);

            docRef.get().then((doc) => {
                if (doc.introPassed) {
                    // alert('ок');
                    // navigate('/Chat');

                    console.log("Document data:", doc.data());
                } else {
                    // alert('не ок' + doc.data().introPassed);
                    //вот здесь начинается интро
                    // alert('пора в интро');
                    // if (animal == animal_human) {
                    // <IntroStep1 anim_type = "animal_human" />
                    animalTypeVAR = animal;
                    navigate('/introStep1');

                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    };

    const hideDiv = () => {
        document.getElementById("animal_pics_block").style.display = 'none';
    }

    const human = () => {
        document.getElementById("textRole").innerHTML = 'Хозяин';
        document.getElementById("textRoleDescription").innerHTML = 'Вы сами принимаете за себя решение';
        document.getElementById("animal_pics_block").style.display = 'none';
        document.getElementById("mewgav").style.display = 'none';

        role = role_master;
        animal = animal_human;
    }

    const pet = () => {
        document.getElementById("textRole").innerHTML = 'Питомец';
        document.getElementById("textRoleDescription").innerHTML = 'Ваша судьба неопределена';
        document.getElementById("animal_pics_block").style.display = 'inline';
        role = role_pet;
    }

    const animal_cat_check = () => {
        document.getElementById("mewgav").style.display = 'inline';
        document.getElementById("mewgav").innerHTML = 'Вы кот.';
        role = role_pet;
        animal = animal_cat;
    }

    const animal_dog_check = () => {
        document.getElementById("mewgav").style.display = 'inline';
        document.getElementById("mewgav").innerHTML = 'Вы собака.';
        role = role_pet;
        animal = animal_dog;
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

                    <div style={{
                        display: 'inline-block',
                        margin: '10px',
                        textAlign: 'center'
                    }}>

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

                    <div id='animal_pics_block' style={{
                        display: 'none',
                        margin: '10px',
                        textAlign: 'center'
                    }}> <div>Какое вы животное?</div>
                        <img style={{
                            margin: '10px',
                        }}
                            onClick={animal_cat_check} width='10%' src={animal_cat_pic} />
                        <img style={{
                            margin: '10px',
                        }}
                            onClick={animal_dog_check} width='20%' src={animal_dog_pic} />
                    </div >

                    <div style={{
                        display: 'inline-block',
                        width: '100%',
                        textAlign: 'center'
                    }} id="mewgav" />

                    <Button style={{
                        display: 'inline-block',
                        width: '100%',
                        marginTop: '20px'

                    }} onClick={navigateToRegisterStep3}>Выбрать</Button>
                </Grid>
            </Grid >
        </Container >
    );
};

export default RegisterStep2;