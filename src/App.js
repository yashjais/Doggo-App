import React, { useState } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';


import PrivateRoute from './components/users/PrivateRoute';
import PublicRoute from './components/users/PublicRoute';

import Home from './components/users/Home'
import Login from './components/users/Login'
import Register from './components/users/Register'


import Dogs from './components/Doggo/doggoListingPage'
import DoggoShow from './components/Doggo/doggoShowPage'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        window.location.href = "/"
    }

    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Doggo App</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>

                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/">  Home </Link>
                            </NavItem>
                            {localStorage.getItem('authToken') ? <React.Fragment>
                                <NavItem>
                                    <Link className="nav-link" to="/dogs">  Listing </Link>
                                </NavItem>
                                <Link onClick={handleLogout} style={{ color: 'black' }} className="nav-link" to="#">  Logout </Link>

                            </React.Fragment> : <React.Fragment>
                                    <NavItem>
                                        <Link className="nav-link" to="/login">  Login </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="nav-link" to="/register">  Register </Link>
                                    </NavItem>
                                </React.Fragment>}


                        </Nav>
                    </Collapse>
                </Navbar>

                <PublicRoute restricted={false} component={Home} path="/" exact />
                <PublicRoute restricted={true} component={Register} path="/register" exact />
                <PublicRoute restricted={true} component={Login} path="/login" exact />
                <PrivateRoute component={Dogs} path="/dogs" exact />
                <PrivateRoute component={DoggoShow} path="/dog-show/:breed" exact />
                <PrivateRoute component={DoggoShow} path="/dog-show/:breed/:subbreed" exact />

                {/* <Route path="/" component={Home} exact={true} /> */}
                {/* <Route path="/login" component={Login} /> */}
                {/* <Route path="/register" component={Register} /> */}
                {/* <Route path="/dogs" component={Dogs} exact={true} /> */}
                {/* <Route path="/dog-show/:breed" component={DoggoShow} exact={true} /> */}
                {/* <Route path="/dog-show/:breed/:subbreed" component={DoggoShow} /> */}

            </BrowserRouter>
        </div>
    )
}

export default App