import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const {logIn} =use(AuthContext)
      const location = useLocation()
      // console.log(location)
      const navigate = useNavigate()
      const [error, setError] = useState("")



    const handleLogIn =(e) =>{
        e.preventDefault()

          const form = e.target;
          const  email = form.email.value;
          const password = form.password.value;
          logIn(email, password) 
          .then((result) =>{
            const user = result.user;
            // console.log(user)
            navigate(`${location.state ? location.state : '/'}`)
          })
          .catch((error) =>{
            // console.log(error)
            const errorCode = error.code;
            setError(errorCode)
          })

    }


    return (
        <div className='flex justify-center  py-5 items-center'>
               <div className="card bg-base-100 w-full max-w-sm shrink-0 py-4 shadow-2xl">

                <h1 className='text-2xl font-semibold text-center'>Login your account</h1>
      <div className="card-body">
        <form  onSubmit={handleLogIn} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {
            error && <p className='text-red-500 '>{error}</p>
          }
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='text-center font-semibold'>Dont’t Have An Account ? <Link to='/auth/register' className='text-secondary'> Register</Link></p>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Login;