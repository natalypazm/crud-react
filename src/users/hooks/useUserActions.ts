import { userId, deleteUserById, addUser, User } from "../store/slice"
import { useAppDispatch } from "./store"

export const useUserActions = () => {
    const dispatch = useAppDispatch();

    const removeUser = (id:userId) => {
        dispatch(deleteUserById(id));
    }
    const createUser = ({name,email,github}: User) => {
        dispatch(addUser({name,email,github}))
    }
    return {removeUser, createUser};
}