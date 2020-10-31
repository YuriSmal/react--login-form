import React from 'react'
import ListItem from '../listItem/listItem'
import './toDoList.css'
import classNames from 'classnames'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "What do I need to do?",
            list: [],
            flag: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.addItemToTheList = this.addItemToTheList.bind(this)
        this.handleList = this.handleList.bind(this)
        this.handleFlagChange = this.handleFlagChange.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }

    handleChange(e) {
        this.setState({name: e.target.value})
    }

    addItemToTheList() {
        this.setState(
            function() {
                const list = [...this.state.list, this.state.name];

                return{
                        list
                    }
            }
        )
    }

    removeItem(func) {
        this.setState(this.state.list.splice(func, 1))
    }

    // removeItem = (itemTobeDeleted, index) => (event) => {
    //     const deletedItem = this.state.list.filter(item => {
    //         return item !== itemTobeDeleted;
    //     });
    //     this.setState({
    //         list: deletedItem
    //     });
    // }


    handleList() {
        return this.state.list.map(
            function(item) {
            return <ListItem item={item}  />
        })
    }

    handleFlagChange() {
        this.setState({flag: !this.state.flag})
    }

   

    render() {
        console.log(this.state.list);

        return(
            <div className='list-wrapper'>
                <div className='list-items-wrapper'>
                    <input className='list-input'
                    type="text"
                    onChange={this.handleChange}
                    placeholder={this.state.name}
                    />
                    <button className='btn' onClick={this.addItemToTheList}>Add task</button>
                    {this.state.flag == false && (<button className='btn btn-show-hide' onClick={this.handleFlagChange}>Show List</button>)}
                    {this.state.flag && (<button className='btn btn-show-hide' onClick={this.handleFlagChange}>Hide List</button>)}
                </div>
                {this.state.flag && (
                    <div className='ul-wrapper'>
                        <h2>Todo List</h2>
                        <ul className='ul-item'>
                        <ListItem
                           handleList={this.handleList()}
                           removeItem={this.removeItem}

                        /> 
                        <button onClick={this.removeItem}>Delete</button>
                        </ul>
                    </div>)}
            </div>
        )
    }
}


export default List;