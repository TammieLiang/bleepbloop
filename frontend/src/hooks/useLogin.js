import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const {dispatch, ACTION} = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const userObj = {email, password};
        // console.log(JSON.stringify(userObj))

        const response = await fetch('http://localhost:4000/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })

        const user = await response.json();

        if (!response.ok) {
            setError(user.error);
            console.log(user.error)
        }

        if (response.ok) {
            // saving user to local storage
            localStorage.setItem('user', JSON.stringify(user));

            // update to auth context
            dispatch({type: ACTION.LOGIN, payload: user});
        }
        setIsLoading(false);
    }

    return {login, isLoading, error};
}

export { useLogin };