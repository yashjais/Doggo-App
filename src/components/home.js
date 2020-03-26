import React from 'react'
import husky from './image/download.jpg'

function Home() {
    return (
        <div style={{textAlign: 'center', 
                    backgroundImage: `url(${husky})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '800px'
                    }}>
            <br />
            <h1>Welcome to the Doggo App</h1>
            
        </div>
    )
}

export default Home 