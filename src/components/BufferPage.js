import React, { useState, useEffect, Redirect } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { fb_users, fb_messages } from '../utils/consts';


import RegisterStep1 from "./RegisterStep1";

const BufferPage = () => {
    const { tg } = useContext(Context);
    tg.expand() // метод позволяет растянуть окно на всю высоту.

    const { firestore } = useContext(Context);
    const { userID } = useContext(Context);


    alert('это буффер')

    var docRef = firestore.collection(fb_users).doc(userID);

    docRef.get().then((doc) => {
        if (doc.data().introPassed) {
            alert('ок буффер ');
            return (
                <div>
                    <h2>Это буффер.</h2>
                    <div>
                        {/* <button onClick={navigateHome}>Home</button> */}
                        <Button style={{
                            display: 'inline-block',
                            width: '20%'

                        }} variant={"outlined"} onClick={navigateToRegisterStep1}>Далее</Button>

                        <Routes>
                            <Route path="/registerStep1" element={<RegisterStep1 />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </div>
            );
            console.log("Document data:", doc.data());
        } else {
            alert('не ок буффер' + doc.data().introPassed);
            //вот здесь начинается интро

            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });



    const navigate = useNavigate();

    const navigateToRegisterStep1 = () => {
        navigate('/registerStep1');
    };


};

function Home() {
    // return <h2>Home</h2>;
}

export default BufferPage;