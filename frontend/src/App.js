import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import SignUp from './component/SignUp'
import Home from './component/Home';
import Navbar from './navbar/Navbar';
import Login from './component/Login';

function App() {
    return (
        <div>
            
            <Router>
            <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/ragistation" component={SignUp}/>
                <Route exact path="/login" component={Login}/>
            </Router>
        </div>
    )
}

export default App
