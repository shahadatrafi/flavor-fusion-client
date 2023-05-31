import React, { useContext } from 'react';
import loader from '../assets/others/loader3.gif'
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    
    const location = useLocation();

    const { user, loading } = useContext(AuthContext);
    
    if (loading) {
        return <img src={loader} alt="" />
    }

    if (user) {
        return children
    }
    
    return (
        <Navigate to='/login' state={{ from: location }} replace>
            
        </Navigate>
    );
};

export default PrivateRoute;