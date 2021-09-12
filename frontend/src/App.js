import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import { useSelector} from 'react-redux'
import SignUp from './component/SignUp'
import Home from './component/Home';
import Navbar from './navbar/Navbar';
import Login from './component/Login';
import Product from './component/Product';

function App() {
    const user = useSelector((store) => store.auth.user)
    console.log(user)
    return (
        <div>
           
            <Router>
                <Navbar/>
                <div style={{marginTop: 70}}>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/ragistation" component={SignUp}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/product" component={Product}/>
                </div>                
            </Router>
        </div>
    )
}

export default App
