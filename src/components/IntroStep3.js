import React, { useState, useEffect, Redirect } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom'

// import IntroStep3 from "./IntroStep3";

import Context1 from "./RegisterStep2";
import { animalTypeVAR } from './RegisterStep2';

import { introStep2_human, introStep2_cat, introStep2_dog, animal_human, animal_cat, animal_dog } from '../utils/consts';

const IntroStep3 = (props) => {

    const { doc } = useContext(Context)
    const animalTypeFB = doc.data()?.userAnimal;
    var animalType;
    var show_intro2;

    if (animalTypeVAR != undefined) {
        animalType = animalTypeVAR;
    }
    if (animalTypeFB != undefined) {
        animalType = animalTypeFB;
    }

    if (animalType == animal_human) {
        show_intro2 = introStep2_human;
    }
    if (animalType == animal_cat) {
        show_intro2 = introStep2_cat;
    }
    if (animalType == animal_dog) {
        show_intro2 = introStep2_dog;
    }


    // alert("animalTypeFB " + animalTypeFB + ". animalTypeVAR " + animalTypeVAR);
    // alert("animalType " + animalType);


    const { tg } = useContext(Context);
    tg.expand() // метод позволяет растянуть окно на всю высоту.

    // alert('в интро')

    const navigate = useNavigate();

    const navigateToIntroStep3 = () => {
        navigate('/introStep3');
    };

    return (
        <div>
            <h2>333</h2>
            <div>

                <Button style={{
                    display: 'inline-block',
                    width: '20%'

                }} variant={"outlined"} onClick={navigateToIntroStep3}>Всегда так делаю</Button>

                <Routes>
                    <Route path="/introStep3" element={<IntroStep3 />} />
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