
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const {createUser,setUser,upDateUser} =use(AuthContext)
    const [nameError , setNameError] = useState("")
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        // console.log(e.target)

        const form = e.target;
        const name = form.name.value;
        if(name.length < 5){
            setNameError('name is more then 5 cheracter')
            return
        }
        else{
            setNameError(" ")
        }
        
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // e.log({name, email, password,photo})

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            upDateUser({displayName :name , photoURL: photo})
            .then(() => {
                setUser({...user, displayName :name , photoURL: photo} )
                navigate('/')
            })
            .catch((error) =>{
                console.log(error)
                setUser(user)
            })
        })
        .catch(error =>{
            console.log(error)
        })

    }
    return (
        <div className='flex justify-center  py-5 items-center'>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 py-4 shadow-2xl">

         <h1 className='text-2xl font-semibold text-center'>Login your account</h1>
        <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
        {/* name */}
        <label className="label">Name</label>
        <input name='name' type="text" className="input" placeholder="Name" />
        {
            nameError && <p className='text-xs text-red-400'>{nameError}</p>
        }
        {/* photo url */}
        <label className="label">Photo URL</label>
        <input name='photo' type="text" className="input" placeholder="Photo URL" />
            {/* email  */}
        <label className="label">Email</label>
        <input type="email" name='email' className="input" placeholder="Email" />

{/* password */}
        <label className="label">Password</label>
        <input type="password" name='password' className="input" placeholder="Password" />
      
        <button className="btn btn-neutral mt-4">Register</button>
        <p className='text-center font-semibold'>AllReady have and account ? <Link to='/auth/login' className='text-secondary'> login</Link></p>
        </form>
        </div>
        </div>
        </div>
    );
};

export default Register;