import React from 'react'
import GetRandomNumber from '../randomWrite/randomWrite'

class ReadRandomNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            multiplier: 1000
        }

        this.multiplyValue = this.multiplyValue.bind(this)
    }

    multiplyValue(event) {
        this.setState({multiplier: this.state.multiplier * event})
    }

    render() {
        return (
            <div className = "btn-wrapper">
                <p className = "tasks-divider">This is second task</p>
                <hr></hr>
                <GetRandomNumber name={this.multiplyValue}/>
                <h2>The number is: {this.state.multiplier}</h2>
            </div>
        )
    }
}

export default ReadRandomNumber