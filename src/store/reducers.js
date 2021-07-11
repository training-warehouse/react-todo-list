import {
    GET_ALL_TODO,
    DEL_ONE_TODO,
    CHANGE_ONE_TODO,
    ADD_ONE_TODO,
    DEL_FINISHED_TODO,
    IS_CHECKED_ALL_TODO
} from './actionTypes'

const defaultState = {
    todos: [],
    finishedCount: 0
}

export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    let tmpFinishedCount = 0

    switch (action.type) {
        case GET_ALL_TODO: {
            newState.todos = action.todos;
            return newState
        }
        case DEL_ONE_TODO: {
            newState.todos.forEach((todo, index) => {
                if (todo.id === action.todoId) {
                    newState.todos.splice(index, 1)
                }
            })

            newState.todos.forEach((todo, index) => {
                if (todo.finished) {
                    tmpFinishedCount += 1
                }
            })
            newState.finishedCount = tmpFinishedCount
            return newState
        }

        case CHANGE_ONE_TODO: {
            newState.todos.forEach((todo, index) => {
                if (todo.id === action.todoId) {
                    todo.finished = action.isFinished
                }
            })

            newState.todos.forEach((todo, index) => {
                if (todo.finished) {
                    tmpFinishedCount += 1
                }
            })

            newState.finishedCount = tmpFinishedCount
            return newState
        }
        case ADD_ONE_TODO: {
            newState.todos.push(action.todo)
            return newState
        }

        case DEL_FINISHED_TODO: {
            let tmpArr = []
            newState.todos.forEach((todo, index) => {
                if (!todo.finished) {
                    tmpArr.push(todo)
                }
            })

            newState.todos = tmpArr
            return newState
        }

        case IS_CHECKED_ALL_TODO: {
            newState.todos.forEach((todo, index) => {
                todo.finished = action.flag
            })

            newState.todos.forEach((todo, index) => {
                if (todo.finished) {
                    tmpFinishedCount += 1
                }
            })

            newState.finishedCount = tmpFinishedCount
            return newState
        }

        default:
            return state

    }
}