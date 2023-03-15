
import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import {FaHeartbeat,FaBars} from 'react-icons/fa';
// import './Header.css';
import useAuth from './pages/HooksPage/useAuth';
// import { UserContext } from './UserContext';


export default function Header() {
    const {user, logOut} = useAuth();
//     const {userInfo,setUserInfo} = useContext(UserContext);
//   useEffect(() => {
//     fetch('http://localhost:5000/login',{
//         credentials: 'include',
//     }).then(response =>{
//       response.json().then(userInfo => {
//         setUserInfo(userInfo);
//       });
//     });
    
//   },[])
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
    // function logout(ev){
    //     ev.preventDefault();
    //     fetch('http://localhost:5000/logout',{
    //       credentials: 'include',
    //       method: 'POST',
    //     })
    //     setUserInfo(null);
      
    //   }
    
    // const username = userInfo?.username;
    return (
        <div className='header'>
            <h1>STAY WITH ME</h1>
            
            <nav>
            <div className="regi-btn">
                {/* { user.email && <span style={{color: 'white'}}>{user.displayName}</span>} */}
                <>
                    {
                        user.email ?
                            <button onClick={logOut} className='login-btn'>{user.displayName}</button>
                        :
                        <div><NavLink className='login-btn' to='/login'>Login</NavLink>
                        <NavLink className='signup-btn' to='/register'>Register</NavLink></div>}
                    </>
            </div>
            </nav>
        </div>
    );
};
