import React from 'react'
import axios from 'axios'

class Dogs extends React.Component {
    constructor() {
        super()
        this.state = {
            dogList: {},
            breed: '',
            subbreeds: [],
            subbreed: ''
        }
    }
    componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(res => {
                console.log(res.data.message)
                const dogList = res.data.message
                console.log(Object.entries(dogList), 'here')
                this.setState({dogList})
            })
            .catch(err => alert(err))
    }
    handleChange = (e) => {
        const breed = e.target.value.split(',')[0]
        const subbreeds = e.target.value.split(',').slice(1)
        if(subbreeds[0].length != 0) {
            this.setState({breed, subbreeds})
        } else {
            const subbreeds = []
            const subbreed = ''
            this.setState({breed, subbreeds, subbreed})
        }
    }
    handlesubbreedsChange = (e) => {
        const subbreed = e.target.value
        this.setState({subbreed})
    }
    handleClick = (e) => {
        const breed = this.state.breed
        if(this.state.subbreeds.length != 0) {
            if(this.state.subbreed.length == 0) {
                alert('you gotta select subbreed man')
            }
            else{
                const subbreed = this.state.subbreed
                this.props.history.push(`/dog-show/${breed}/${subbreed}`)
            }
        } else{
            console.log('everything is fine')
            this.props.history.push(`/dog-show/${breed}`)
        }
    }
    render() {
        console.log(this.state.breed, this.state.subbreed)
        return (
            <div style={{textAlign: 'center'}}>
                <br />
                <h1>Dogs Listing Page</h1>
                <h3>Breed</h3>
                <select onChange={this.handleChange}>
                    <option value=''>select</option>
                    {
                        Object.entries(this.state.dogList).map((breed, index) => {
                            return(
                                <option value={[breed[0], breed[1]]} key={index}>{breed[0]}</option>
                            )
                        })
                    }
                </select> <br /> <br />
                {
                    this.state.subbreeds.length != 0 && <div><h3>Subbreed</h3>
                    <select onChange={this.handlesubbreedsChange}>
                        <option value=''>select</option>
                        {
                            this.state.subbreeds.map((breed, index) => {
                                return(
                                    <option name={index} value={breed} key={index}>{breed}</option>
                                )
                            })
                        }
                </select> 
                </div>  
                }
                <br />
                <button onClick={this.handleClick}>submit</button>
                
            </div>
        )
    }
}

export default Dogs