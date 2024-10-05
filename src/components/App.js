{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */ }
import React from 'react'
import '../styles/App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Form from './Form'
import FormRef from './FormRef'
import FormState from './FormState'

const App = () => {
    return (
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to='/'>Section 1</Link></li>
                <li><Link to='/ref'>Section 2</Link></li>
                <li><Link to='/state'>Section 3</Link></li>
            </ul>
        </nav>
        <div className='card-body'>
        <Routes>
            <Route path='/' element={<Form/>}/>
            <Route path='/ref' element={<FormRef/>}/>
            <Route path='/state' element={<FormState/>}/>
        </Routes>
        </div>
        </BrowserRouter>

    )
}

export default App
