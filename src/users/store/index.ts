import { Middleware, configureStore } from "@reduxjs/toolkit"
import usersReducers, { rollbackUser } from './slice'
import { toast } from "sonner";


const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem('redux_state' , JSON.stringify(store.getState()));
}

const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
    const {type, payload} = action
    const previousState = store.getState() as RootState;
    next(action);

    if(type === 'users/deleteUserById'){
        const userIdToRemove = payload;
        const userToRemove = previousState.users.find(user => user.id === userIdToRemove);

        fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok){
                toast.success('User deleted succesfully')
            }
        })
        .catch(() => {
            toast.error(`Failed to delete user ${userToRemove?.name}`)
            if(userToRemove){
                store.dispatch(rollbackUser(userToRemove))
            }
        })
    }
}


export const store = configureStore({
    reducer: {
        users : usersReducers,
    },
    middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch