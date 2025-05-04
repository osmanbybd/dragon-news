import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    // console.log(user)
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }


        const upDateUser = (upDateDate) =>{
            return updateProfile(auth.currentUser, upDateDate)
        }


        const logIn= (email, password)=>{
          return  signInWithEmailAndPassword(auth,email, password)
        }

        const logOut = () =>{
            return signOut(auth)
        }

    useEffect(() =>{

        const unSubscribe = onAuthStateChanged(auth , currentUser=>{

            setUser(currentUser)
            setLoading(false)

        })

            return () =>{
                unSubscribe()
            }

    },[])


    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        logIn,
        loading,
        setLoading,
        upDateUser
    }

    return <AuthContext value={authData}>
    {children}
    </AuthContext>
};

export default AuthProvider;