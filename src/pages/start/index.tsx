import React, {useEffect} from 'react';
import NameForm from "src/features/auth/ui/NameForm";
import { useNavigate } from "react-router-dom";
import {useLocalStorageName} from "src/shared/hooks/useLocalStorageName";

const StartPage = () => {
    const navigate = useNavigate();
    const {username} = useLocalStorageName();
    useEffect(() => {
        if (username) {
            return navigate("/create-table", {replace: true});
        }
    }, []);

    return (
        <div>
            <NameForm/>
        </div>
    );
};

export default StartPage;