import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const history = useHistory()

    const handleLogOut=()=>{
        history.push('/login')
    }

    return (
        <div className='mt-5'>
            <h1>Welcome to home</h1>

            <input onClick={handleLogOut} className="btn sign-up-btn mb-2" type="submit" value="LogOut"/>
        </div>
    );
};

export default Home;