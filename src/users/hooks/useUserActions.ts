import { userId, deleteUserById } from "../store/slice"
import { useAppDispatch } from "./store"

export const useUserActions = () => {
    const dispatch = useAppDispatch();
    const removeUser = (id:userId) => {
        dispatch(deleteUserById(id));
    }
    return {removeUser};
}