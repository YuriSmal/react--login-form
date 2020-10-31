import React from 'react';
import './listItem.css'


function ListItem(props) {
    return(
        <li  className='li-list-item' key = {props.item}><input className='li-item-checkbox' type='checkbox'></input>{props.handleList}
        <button onClick={props.removeItem} className='btn btn-delete-item'>Delete</button>
        </li>
    )
}

export default ListItem;
