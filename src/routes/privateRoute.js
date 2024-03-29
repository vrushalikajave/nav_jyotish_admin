import React from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ Component }) => {
    const checkAuthentication = () => {
        const exp = localStorage.getItem('tokenExp');
        if (exp) return true;
        return false;
    };
    return checkAuthentication() ? <Component /> : <Navigate to="/signIn" />;
};

export default PrivateRoute;