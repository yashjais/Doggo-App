import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'

import Home from './components/home'
import Login from './components/users/login'
import Register from './components/users/register'

import Dogs from './components/doggoListingPage'
import DoggoShow from './components/doggoShowPage'

function App(){
    const handleLogout = () => {

        localStorage.removeItem('authToken')
        window.location.reload()
    
    }
    return (
        <div>
            <BrowserRouter>
                <h1>Doggo App</h1>

                <Link to="/">Home</Link>
                {localStorage.getItem('authToken') ? <div>

                    <Link to="/dogs">Listing</Link>
                    <Link to="/logout" onClick={handleLogout}>Logout</Link>

                </div> : <div>

                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    
                    </div>}

                <Route path="/" component={Home} exact={true} />
                <Route path="/login" component={Login} /> 
                <Route path="/register" component={Register} /> 
                <Route path="/dogs" component={Dogs} exact={true} />
                <Route path="/dog-show/:breed" component={DoggoShow} exact={true} />
                <Route path="/dog-show/:breed/:subbreed" component={DoggoShow} />
            </BrowserRouter>
        </div>
    )
}

export default App