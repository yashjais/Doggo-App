import React from 'react'
import axios from 'axios'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleClick = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
       
        console.log(this.state.email, this.state.password)
        const body = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('https://api.backendless.com/D0A3D923-54D9-1A0F-FF40-FE6E51E06100/A0F9167B-6B71-4F4B-99BD-7E03CBC4D9B7/users/register', body)
            .then(res => {
                alert('user successfully created')
                this.props.history.push('/login')
            })
            .catch(err => alert(err))

    }
    render() {
        return (
            <div>
            <br />
            <h1 style={{textAlign: 'center'}}>Register</h1> <br />
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="text" className="form-control" onChange={this.handleClick} /> 
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" className="form-control" onChange={this.handleClick} /> 
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}

export default Register