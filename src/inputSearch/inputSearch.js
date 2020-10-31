import React from 'react';
import Title from '../inputValue/inputValue'

class InputSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <div className = "wrapper">
                <input 
                    type = "text"
                    onChange = {this.handleChange}
                    value = {this.state.name}
                    placeholder = "type something..."
                />
                <Title name = {this.state.name}/> 
            </div>
        )
        
    }
}

export default InputSearch;