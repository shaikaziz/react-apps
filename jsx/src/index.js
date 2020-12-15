// Import the React libraries
import React from 'react'
import ReactDOM from 'react-dom'

//  Create a component
const App1 = () => {
    const buttonText = {text: "Click me"}
    return (
        <div>
            <label class="label" for='name'>Enter name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'grey'}}>
                {buttonText.text}
            </button>
        </div>
    )
}

const getTime = () => {
    return (
        new Date()
    ).toLocaleTimeString()
}

const currTime = "Current Time"

const App = () => {
    return (
        <div>
            <div>{currTime}</div>
            {getTime()}
        </div>
    )
}

// Using the component and showing it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))
// ReactDOM.render(<App1 />, document.querySelector('#root'))