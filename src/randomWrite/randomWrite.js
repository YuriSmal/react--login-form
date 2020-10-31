import React from 'react'

class GetRandomNumber extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let getRandom = (event) => {this.props.name(Math.random())}; 
        return(
            <div >
                <button onClick = {getRandom}>
                    Get random number
                </button>
            </div>
        )
    }
}

// НАМАГАВСЯ ЗРОБИТИ ФУНКЦІЄЮ, АЛЕ ЗАГРУЗ, ДОВЕЛОСЬ РОБИТИ КЛАСОМ

// function GetRandomNumber(props) {

//     return (
//         <button onClick = {function(event) {
//             props.fuction(Math.random())
//         }}>
//             Get random number
//         </button>
//     )
// }

export default GetRandomNumber