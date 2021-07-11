import React from 'react'

import store from "./store";
import {getAllTodoAction} from "./store/actionCreators";

import './index.css'
import Top from "./components/Top";
import List from "./components/List";
import Foot from "./components/Foot";


class App extends React.Component {
    render() {
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Top/>
                    <List/>
                    <Foot/>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const action = getAllTodoAction()
        store.dispatch(action)
    }

}


export default App;
