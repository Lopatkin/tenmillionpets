import React, { useState, useEffect, Redirect } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom'

import IntroStep3 from "./IntroStep3";

import { animalType2 } from './IntroStep1';

import { introStep2_human, introStep2_cat, introStep2_dog, animal_human, animal_cat, animal_dog } from '../utils/consts';

export var animalType3;

const IntroStep2 = () => {

    const { doc } = useContext(Context)
    const animalTypeFB = doc.data()?.userAnimal;
    var animalType;
    var show_intro2;

    if (animalType2 == animal_human) {
        show_intro2 = introStep2_human;
    }
    if (animalType2 == animal_cat) {
        show_intro2 = introStep2_cat;
    }
    if (animalType2 == animal_dog) {
        show_intro2 = introStep2_dog;
    }

    animalType3 = animalType2;

    const { tg } = useContext(Context);
    tg.expand() // метод позволяет растянуть окно на всю высоту.

    const navigate = useNavigate();

    const navigateToIntroStep3 = () => {
        navigate('/introStep3');
    };

    return (
        <div>
            <h2>{show_intro2}</h2>
            <div>

                <Button style={{
                    display: 'inline-block',
                    width: '20%'

                }} variant={"outlined"} onClick={navigateToIntroStep3}>Допустим</Button>
                <Routes>
                    <Route path="/introStep3" element={<IntroStep3 />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
};

function Home() {
    // return <h2>Home</h2>;
}

export default IntroStep2;