import React, { useState } from 'react'
import Card from './Card';

const FormState = () => {
    const [fName, setFName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fName, password, confirmPassword, email);

    }
    return (
        <Card>
            <h2>Section 3: Form with useState</h2>
            <form id='form-state-link' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='full_name'>Full Name :</label>
                    <input type='text' name='full_name' id='full_name' value={fName} onChange={(e) => setFName(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor='email'>Email :</label>
                    <input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor='password'>Password :</label>
                    <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor='password_confirmation'>Confirm Password :</label>
                    <input type='password' name='password_confirmation' id='password_confirmation' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <div>
                    <button type='submit' id='submit'>Submit</button>
                </div>

            </form>
        </Card>

    )
}

export default FormState