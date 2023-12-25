import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CookiesKey, CookiesStorage } from '../../../utils/cookies';
import { toast } from 'react-toastify';

export const ProtectedUser = ({ children }) => {

    const [FirstLoad, setFirstLoad] = useState(false);
    const navigate = useNavigate();
    const TokenUser = CookiesStorage.get(CookiesKey.User);

    useEffect(() => {
        console.log(TokenUser, "ini token")
        if (TokenUser == undefined) {
            setFirstLoad(true);
        }
    }, []);

    useEffect(() => {
        if (FirstLoad) {
            toast.warn("Please Login Now");
            navigate("/login");
        }
    }, [FirstLoad]);

    return children;
}
