import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../pages/HooksPage/useFirebase';
import './RegisterPage.css';
export default function Register() {
    const { signInUsingGoogle} = useFirebase();
    return (
        <div >
            <section className='register-form'>
                    <div className='heading'>
                        <h2>Create Account</h2>
                        </div>
                        <div className='form-all'>
                        <form>
                            <input type="text" name="" id="" placeholder='Your Name'className='box' /><br/>
                            <input type="email" name="" id="" placeholder='Your Email'className='box' /><br/>
                            <input type="password" name="" id="" placeholder='Enter Your Password' className='box' /> <br />
                            <input type="password" name="" id="" placeholder='Re-enter password' className='box' /><br />
                            <input type="submit" value="Submit" className='btn' />

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
