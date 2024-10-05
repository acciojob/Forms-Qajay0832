import React, { useRef } from 'react'
import Card from './Card';

const FormRef = () => {
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        console.log({ fullName, email, password, confirmPassword });
    }
    return (
        <Card>
            <h2>Section 2: Form with useRef</h2>
            <form id='form-ref-link' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='full_name'>Full Name :</label>
                    <input type='text' name='full_name' id='full_name' ref={fullNameRef} required />
                </div>
                <div>
                    <label htmlFor='email'>Email :</label>
                    <input type='email' name='email' id='email' ref={emailRef} required />
                </div>
                <div>
                    <label htmlFor='password'>Password :</label>
                    <input type='password' name='password' id='password' ref={passwordRef} required />
                </div>
                <div>
                    <label htmlFor='password_confirmation'>Confirm Password :</label>
                    <input type='password' name='password_confirmation' id='password_confirmation' ref={confirmPasswordRef} required />
                </div>
                <div>
                    <button type='submit' id='submit'>Submit</button>
                </div>

            </form>
        </Card>

    )
}

export default FormRef