import React, { useContext, useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import useAuth from '../pages/HooksPage/useAuth';
import { UserContext } from '../UserContext';
import './LoginPage.css';
export default function LoginPage() {
    const { signInUsingGoogle} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function loginConfirm(ev) {
        ev.preventDefault();
       const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({email,password}),
            headers:{'Content-Type':'application/json'},
            // credentials: 'include',
        });
        if(response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
            
        }else {
            alert('wrong credentials!');
        }                                                       

    }
    

    if(redirect){
        return <Navigate to={'/'}/>
    }
    return (
        <div className="login" >
            <section className='login-form' id='login-form'>
            
            
                <h2>Login</h2>
                
                <div className='form-all'>

                <form onSubmit={loginConfirm}>
                    <input type="email" name="" id="" 
                        placeholder='Your Email' 
                        className='box' 
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        />
                    <br />
                    <input type="password" name="" id="" 
                        placeholder='Password' 
                        className='box'
                        value={password}
                        onChange = {ev => setPassword(ev.target.value)}
                        />
                    <br />
                    {/* <input type="submit" value="Submit" className='btn' /> */}
                    <button className='btn'>Submit</button>
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
    );
}