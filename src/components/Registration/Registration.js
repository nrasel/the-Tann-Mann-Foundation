import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink } from 'react-router-dom';
import './Registration.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { setUserSession } from '../Utilities/Common';
import Home from '../Home/Home';

const Registration = () => {
    const history=useHistory()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [mobile,setPhone]=useState('')
    const [error,setError]=useState(null)
    const[success,setSuccess]=useState(null)
    const[loading,setLoading]=useState(false)

    
   
        const handleRegistration=()=>{
            setError(true)
            setLoading(true)
            console.log(email,password,name,mobile);
            axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffRegister',{
                name:name,
                mobile:mobile,
                email:email,
                password:password
            })
            .then(response=>{
                setLoading(false)
                setUserSession(response.data.token,response.data.user)
                console.log('response',response);
                setSuccess("Registration Success")
                window.reload()
            })
            .catch(error=>{
                setLoading(false)
                if(error.response.status === 401 || error.response.status=== 400 || error.response.status=== 402){
                    setError('Something went wrong.Please try again later')
                    
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
        <div className='bg-form w-50 m-auto'>
                            <div className='switch-section  mt-5'>
                                <NavLink activeStyle={activeStyle} className='btn-1' to="/login">LOGIN</NavLink>
                                <NavLink activeStyle={activeStyle} className='btn-2' to="/register">REGISTER</NavLink>
                            </div>
                            <h3 className='mb-4'>Please Registration</h3>
                        <div>

                            <div className='from-box'>
                                <input placeholder='Name'  onChange={e=>setName(e.target.value)} className="form-control box-control border-radius-change mb-3 "/>
                                <i className="far fa-user form-box-icon"></i>
                            </div>

                            <div className='from-box'>
                                <input type="email" placeholder='Email'  onChange={e=>setEmail(e.target.value)}  className="form-control box-control border-radius-change mb-3"/>
                                <i className="far fa-envelope form-box-icon"></i>
                            </div>

                            <div className='from-box'>
                                <input  onChange={e=>setPhone(e.target.value)} placeholder="Mobile" type="text" className="form-control box-control border-radius-change mb-3"/>
                                <i className="fas fa-mobile-alt form-box-icon"></i>
                            </div>

                            <div className='from-box'>
                                <input  onChange={e=>setPassword(e.target.value)}  placeholder="Password" type="password" className="form-control box-control border-radius-change mb-3"/>
                                <i className="fas fa-lock form-box-icon"></i>
                            </div>
                            {success && <span>{success}</span>}
                            {error && <span>{error}</span>}

                            <br />


                            <input onClick={handleRegistration} className="btn sign-up-btn mb-2" type="submit" value={loading? "Loading...":"Register"} />
                            </div>
                            
                        </div>
    );
};

export default Registration;