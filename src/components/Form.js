import React from 'react'
import Card from './Card'

const Form = () => {
    return (
        <Card>
            <h2>Section 1: Form Layout</h2>
            <form id='form-link'>
                <div>
                    <label htmlFor='full_name'>Full Name :</label>
                    <input type='text' name='full_name' id='full_name' required />
                </div>
                <div>
                    <label htmlFor='email'>Email :</label>
                    <input type='email' name='email' id='email' required />
                </div>
                <div>
                    <label htmlFor='password'>Password :</label>
                    <input type='password' name='password' id='password' required />
                </div>
                <div>
                    <label htmlFor='password_confirmation'>Confirm Password :</label>
                    <input type='password' name='password_confirmation' id='password_confirmation' required />
                </div>
                <div>
                    <button type='submit' id='submit'>Submit</button>
                </div>
            </form>
        </Card>

    )
}

export default Form