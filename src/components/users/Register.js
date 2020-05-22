import React from 'react'
import axios from '../../config/axios'

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
        axios.post('/register', body)
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
                <h1 style={{ textAlign: 'center' }}>Register</h1> <br />
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