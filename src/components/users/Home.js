import React from 'react'
// import husky from '../image/download.jpg'
import husky from '../image/doggo-2.jpeg'

function Home() {
    return (
        <div style={{
            textAlign: 'center',
            backgroundImage: `url(${husky})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '800px'
        }}>

            <br />
            <h1>Welcome to the Doggo App</h1>
            <br />
            <ul>
                Features of this website: <br />
                User Authentication is enabled via a site called backendless. <br />
                This site is responsive.<br />
                Private routes are enabled.<br />
                Several Packages are used like react-router-dom, axios, reactstrap, bootstrap.<br />
            </ul>
        </div>
    )
}

export default Home 