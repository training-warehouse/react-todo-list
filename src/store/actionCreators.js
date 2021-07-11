import axios from "axios";
import {
    GET_ALL_TODO,
    DEL_ONE_TODO,
    CHANGE_ONE_TODO,
    ADD_ONE_TODO,
    DEL_FINISHED_TODO,
    IS_CHECKED_ALL_TODO
} from './actionTypes'

import store from "./index";


export const getAllTodoAction = () => {
    return () => {
        axios.get('/data.json').then(res => {
            if (res.data) {
                const todos = res.data.todos
                store.dispatch({
                    type: GET_ALL_TODO,
                    todos
                })
            }
        })
    }
}

export const delOneTodoAction = (todoId) => ({
    type: DEL_ONE_TODO,
    todoId
})

export const changeOneTodoAction = (todoId, isFinished) => ({
    type: CHANGE_ONE_TODO,
    todoId,
    isFinished
})

export const addOneTodoAction = (todo) => ({
    type: ADD_ONE_TODO,
    todo
})

export const delFinishedTodoAction = () => ({
    type: DEL_FINISHED_TODO
})

export const isCheckedAllTodoAction = (flag) => ({
    type: IS_CHECKED_ALL_TODO,
    flag
})
