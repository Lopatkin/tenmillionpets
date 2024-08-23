import React, { useState, useEffect, Redirect } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom'

import IntroStep2 from "./IntroStep2";

const IntroStep1 = () => {
    const { tg } = useContext(Context);
    tg.expand() // метод позволяет растянуть окно на всю высоту.


    // alert('в интро')

    const navigate = useNavigate();

    const navigateToIntroStep2 = () => {
        navigate('/introStep2');
    };

    return (
        <div>
            <h2>Вы решили сменить обстановку и уехали жить в другой город. Это было обдуманное решение. Вы выбрали небольшой город, заранее нашли там жильё, работу, купили билет и отправились в путь. </h2>
            <div>

                <Button style={{
                    display: 'inline-block',
                    width: '20%'

                }} variant={"outlined"} onClick={navigateToIntroStep2}>Всегда так делаю</Button>

                <Routes>
                    <Route path="/introStep2" element={<IntroStep2 />} />
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

export default IntroStep1;