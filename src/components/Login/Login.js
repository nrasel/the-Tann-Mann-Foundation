import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { setUserSession } from '../Utilities/Common';
import './Login.css'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState(null)
    const[success,setSuccess]=useState(null)
    const[loading,setLoading]=useState(false)
    const history=useHistory()

    
        const handleLogin=()=>{
            setError(true)
            setLoading(true)
            axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffLogin',{
                email:email,
                password:password
            })
            .then(response=>{
                setLoading(false)
                console.log('response>>>',response);
                setSuccess("Login Success")
                window.reload()
            })
            .catch(error=>{
                setLoading(false)
                if(error.response.status=== 401 || error.response.status=== 400){
                    setError('something went wrong.Please try again later')
                }
                else{
                    setError('Something went wrong.Please try again later')
                }
            })
            // history.push('/home')
        }


    const activeStyle={
        backgroundColor: '#f78c30',
        color: '#fff'
    }
    return (
        <div>
               <div className='bg-form w-50 m-auto '>
                    <div className='switch-section mt-5'>
                        <NavLink activeStyle={activeStyle} className='btn-1' to="/login">LOGIN</NavLink>
                        <NavLink activeStyle={activeStyle} className='btn-2' to="/register">REGISTER</NavLink>
                    </div>
                    <h3 className='mb-4'>Please Login</h3>
                    <div >

                            <div className='from-box'>
                                <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" className="form-control box-control border-radius-change mb-3"   />
                                <i className="far fa-envelope form-box-icon"></i>
                            </div>


                            <div className='from-box'>
                                <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="form-control box-control border-radius-change mb-3"  />
                                <i className="fas fa-lock form-box-icon"></i>
                            </div>

                    <br />
                    {success && <span>{success}</span>}
                    {error && <span>{error}</span>}

                <br />

                    <input onClick={handleLogin} className="btn sign-up-btn mb-2" type="submit" value={loading? "Loading...":"Login"}/>
                </div>
                </div>
        </div>
    );
};

export default Login;