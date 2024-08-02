import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

import Login from "./Login";
import Chat from "./Chat";
import { Context } from '..';

const AppRouter = () => {
    // const user = false;
    const { userData } = useContext(Context);

    return userData ?
        (
            <Routes>
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<Navigate to="/chat" replace />} />
            </Routes>
        )
        :
        (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        )
};

export default AppRouter;