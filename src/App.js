import React from 'react'
import {BrowserRouter, Link, Route} from 'react-router-dom'

import Home from './components/home'
import Login from './components/users/login'
import Register from './components/users/register'

import Dogs from './components/Doggo/doggoListingPage'
import DoggoShow from './components/Doggo/doggoShowPage'

function App(){
    const handleLogout = () => {

        localStorage.removeItem('authToken')
        window.location.href = "/"
    
    }
    return (
        <div className="container">
            <BrowserRouter>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Doggo App</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                <li className="nav-item active">
                    <a className="nav-link" href="/"><Link to="/">Home</Link> <span className="sr-only">(current)</span></a>
                </li>
                {localStorage.getItem('authToken') ? <React.Fragment>
                    <li className="nav-item active">
                        <a className="nav-link" href="/dogs"><Link to="/dogs">Listing</Link> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/logout"><Link to="/logout" onClick={handleLogout}>Logout</Link> <span className="sr-only">(current)</span></a>
                    </li>
                </React.Fragment> : <React.Fragment>
                    <li className="nav-item active">
                            <a className="nav-link" href="/login"><Link to="/login">Login</Link> <span className="sr-only">(current)</span></a>
                    </li><li className="nav-item active">
                        <a className="nav-link" href="/register"><Link to="/register">Register</Link> <span className="sr-only">(current)</span></a>
                    </li>
                </React.Fragment>}
                </ul>
            </div>
            </nav>

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