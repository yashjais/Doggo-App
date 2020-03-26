import React from 'react'
import axios from 'axios'

class DoggoShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breed: this.props.match.params.breed,
            image: ''
        }
    }
    componentDidMount() {
        const breed = this.state.breed
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(res => {
                const image = res.data.message
                this.setState({image})
            })
            .catch(err => alert(err))
    }
    render() {
        return (
            <div>
                <h2>Doggo show page</h2>
                <img src={this.state.image} />
            </div>
        )
    }
}

export default DoggoShow