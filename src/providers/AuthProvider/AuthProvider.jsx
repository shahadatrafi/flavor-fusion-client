import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        loading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;