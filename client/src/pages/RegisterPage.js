import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../pages/HooksPage/useFirebase';
import './RegisterPage.css';
export default function RegisterPage() {
    const { signInUsingGoogle} = useFirebase();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');
   async function confirmRegister(ev){
            ev.preventDefault();
                const response =  await fetch('http://localhost:5000/register',{
                    method: 'POST',
                    body: JSON.stringify({username,password}),
                    headers: {'Content-Type':'application/json'},
                }); 
                if(response.status === 200) {
                    alert('Registration successful');
                } else {
                    alert('Registration Failed');
                }        
        
    }

    return (
        <div >
            <section className='register-form'>
                    <div className='heading'>
                        <h2>Create Account</h2>
                        </div>
                        <div className='form-all'>
                        <form onSubmit={confirmRegister}>
                            <input type="text" name="" id="" 
                                placeholder='Your Name'
                                className='box' 
                                value={username}
                                onChange ={ev => setUsername(ev.target.value)}
                                /><br/>
                            <input type="email" name="" id="" 
                                placeholder='Your Email'
                                className='box' 
                                value={email}
                                onChange = {ev => setEmail(ev.target.value)}
                                /><br/>
                            <input type="Number" name="" id="" 
                                placeholder='Phone Number'
                                className='box' 
                                value={phone}
                                onChange = {ev => setPhone(ev.target.value)}
                                /><br/>
                            <input type="text" name="" id="" 
                                placeholder='Country'
                                className='box' 
                                value={country}
                                onChange = {ev => setCountry(ev.target.value)}
                                /><br/>
                            <input type="password" name="" id="" 
                                placeholder='Enter Your Password' 
                                className='box' 
                                value={password}
                                onChange ={ev => setPassword(ev.target.value)}
                                /> <br />
                            <input type="password" name="" id="" 
                                placeholder='Re-enter password' 
                                className='box' 
                                value={password}
                                onChange ={ev => setPassword(ev.target.value)}
                                /><br />
                            {/* <input type="submit" value="Submit" className='btn' /> */}
                            <button className='btn'>Submit</button>

                        </form>
                        
                    </div>
                    <div className="old-user">
                            <p>Already have an account?<Link to='/login'>Login</Link> </p>
                                <div className='or'>----------------or-----------------</div>
                                <button 
                                className="log-btn"
                                onClick={signInUsingGoogle}
                                >Google Sign In</button>
                    </div>
            </section>
        </div>
    );
};
