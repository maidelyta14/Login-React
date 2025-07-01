import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../slices/authThunks';
import { logout } from '../slices/authSlice';
import {
    selectAuth,
    selectUser,
    selectIsAuthenticated,
    selectIsLoading,
    selectError
} from '../slices/authSelectors';

export const useAuth = () => {
    const dispatch = useDispatch();

    const auth = useSelector(selectAuth);
    const user = useSelector(selectUser);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    const login = async (credentials) => {
        const result = await dispatch(loginUser(credentials));
        if (result.meta.requestStatus === 'fulfilled') {
            localStorage.setItem('user', JSON.stringify(result.payload));
        }
        return result;
    };

    const logoutUser = () => {
        dispatch(logout());
        localStorage.removeItem('user');
    };

    return {
        auth,
        user,
        isAuthenticated,
        isLoading,
        error,
        login,
        logout: logoutUser
    };
};

