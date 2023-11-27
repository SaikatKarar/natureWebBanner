import React from 'react'
import './Background.css'
import Button from '../Button/Button'

function Background() {
    return (
        <div id="main">
            <div id="overlay">
                <h1>nature</h1>
                <div id="line"></div>
                <Button></Button>
            </div>
        </div>
    )
}

export default Background