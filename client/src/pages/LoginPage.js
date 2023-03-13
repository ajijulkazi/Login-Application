import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../pages/HooksPage/useAuth';
import './LoginPage.css';
export default function Login() {
    const { signInUsingGoogle} = useAuth();
    return (
        <form className="login">
<div >
            <section className='login-form' id='login-form'>
            
            
                <h2>Login</h2>
                
                <div className='form-all'>

                <form>
                    <input type="email" name="" id="" placeholder='Your Email' className='box' />
                    <br />
                    <input type="password" name="" id="" placeholder='Password' className='box'/>
                    <br />
                    <input type="submit" value="Submit" className='btn' />
                </form>
                
                
            </div>
            <div className='new-user'>
                    <p>New to MediLife?<NavLink to='/register'>Create Account</NavLink> </p>
                    <div className='or'>-----------------or------------------</div>
                    <button 
                    className='signin-btn'
                    onClick={signInUsingGoogle}
                    >Google Sign In</button>
                </div>
            
            </section>
            
        </div>
        </form>
    );
}