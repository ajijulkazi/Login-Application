
import React from 'react';
import { NavLink } from 'react-router-dom';
// import {FaHeartbeat,FaBars} from 'react-icons/fa';
// import './Header.css';
import useAuth from './pages/HooksPage/useAuth';


export default function Header() {
    const {user, logOut} = useAuth();
    // window.onload = function(){ 
        // your code 
    //     var menu= document.querySelector('#menu-btn');
    // var navbar= document.querySelector('.navbar');

    // menu.onclick = () =>{
    //     menu.classList.toggle('fa-times');
    //     navbar.classList.toggle('active');
    // }

    // window.onscroll = () =>{
    //     menu.classList.remove('fa-times');
    //     navbar.classList.remove('active');
    // }
    // };
    
    
    return (
        <div className='header'>
            <h1>STAY WITH ME</h1>
            
            <div className="regi-btn">
                {/* { user.email && <span style={{color: 'white'}}>{user.displayName}</span>} */}
            
                {
                user.email ?
                    <button onClick={logOut} className='login-btn'>{user.displayName}</button>
                :
                <div><NavLink className='login-btn' to='/login'>Login</NavLink>
                <NavLink className='signup-btn' to='/register'>Register</NavLink></div>}
            </div>
        </div>
    );
};
