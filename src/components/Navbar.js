import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import { LOGIN_ROUTE } from '../utils/consts';
// import { Context } from '..';
// import { useContext } from 'react';
import { Context } from '../index';
import { useContext } from 'react';

import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/database";
import { fb_users } from '../utils/consts';


const Navbar = () => {
    const { userData } = useContext(Context);
    const { firestore } = useContext(Context)
    const { doc } = useContext(Context)

    const userID = doc.data()?.userID;
    const userFirstName = doc.data()?.userFirstName;
    const userName = doc.data()?.userName;
    const userLastName = doc.data()?.userLastName;

    const fullAddress = doc.data()?.fullAddress;



    var fullName = userFirstName + " " + userName + " " + userLastName;

    // const db = firebase.firestore();

    // var docRef = db.collection(fb_users).doc('859320');



    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}
                >
                    <div style={{
                        position: 'absolute',
                        left: '15px',
                        top: '15px'
                    }}>{fullAddress}</div>

                    <div style={{
                        position: 'absolute',
                        right: '15px',
                        top: '15px'
                    }}>{fullName}</div>

                    {/* {userData ?
                        <IconButton>Выйти</IconButton>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <IconButton>Логин</IconButton>
                        </NavLink>

                    } */}
                </Grid>
            </Toolbar>
        </AppBar >
    );
};

export default Navbar;
