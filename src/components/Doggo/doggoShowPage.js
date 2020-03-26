import React from 'react'
import axios from 'axios'

class DoggoShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            breed: this.props.match.params.breed,
            subbreed: this.props.match.params.subbreed,
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
            <div style={{textAlign: 'center'}}>
                <br />
                <h2>Doggo show page</h2>
                <h3> Breed - {this.state.breed}</h3>
                {this.state.subbreed && 
                <h3> SubBreed - {this.state.subbreed}</h3>}
                <img src={this.state.image} alt="doggo_image" />
            </div>
        )
    }
}

export default DoggoShow