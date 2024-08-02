import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import { Context } from '..';
import { useContext } from 'react';

const Navbar = () => {
    // const { userData } = useContext(Context);

    return (
        <AppBar color={"primary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}>
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
