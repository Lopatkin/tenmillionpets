import React, { useState, useEffect, Redirect } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { fb_users, fb_messages } from '../utils/consts';
import firebase from "firebase/compat/app";


import RegisterStep1 from "./RegisterStep1";
import IntroStep1 from "./IntroStep1";




// alert('пре ок буффер ');


const BufferPage = () => {
    const { tg } = useContext(Context);
    tg.expand() // метод позволяет растянуть окно на всю высоту.


    const { doc } = useContext(Context)
    var isUserExist = doc.exists;
    var isIntroPassed = doc.data()?.introPassed;

    // alert('это буффер')

    isIntroPassed = false
    isUserExist = true

    // alert('buffer isUserExist ' + isUserExist);
    // alert('buffer isIntroPassed ' + isIntroPassed);

    const navigate = useNavigate();


    if (isUserExist && !isIntroPassed) {
        alert('тут')
        navigate('/introStep1');

    }
    // alert('вот тут')


    const navigateToRegisterStep1 = () => {
        navigate('/registerStep1');
    };

    return (
        <div>
            <h2>Это буффер.</h2>

            <div>
                {navigate('/introStep1')}
                {/* {alert('навигируем')} */}

                {/* <button onClick={navigateHome}>Home</button>
                <Button style={{
                    display: 'inline-block',
                    width: '20%'

                }} variant={"outlined"} onClick={navigateToRegisterStep1}>Далее</Button> */}

                <Routes>
                    {/* <Route path="/registerStep1" element={<RegisterStep1 />} /> */}
                    <Route path="/introStep1" element={<IntroStep1 />} />
                </Routes>
            </div>
        </div>
    );
};

function Home() {
    // return <h2>Home</h2>;
}

export default BufferPage;