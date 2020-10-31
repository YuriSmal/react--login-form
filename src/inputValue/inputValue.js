import React from 'react';

function Title(props) {

    return (
        <h1>{props.name}</h1>
    )
}

Title.defaultProps = {
    name: "Nothing is typed yet..."
}

export default Title;