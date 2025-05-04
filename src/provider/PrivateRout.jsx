import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading';

const PrivateRout = ({children}) => {
    const {user,loading} = use(AuthContext)
    // console.log(user)
    const location = useLocation()
    // console.log(location)
    

    if(loading){
        return <Loading></Loading>
    }

    if(user && user.email){
        return children
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>

};

export default PrivateRout;