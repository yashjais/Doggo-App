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
                Features of this website:
                <li>User Authentication</li>
            </ul>
        </div>
    )
}

export default Home 