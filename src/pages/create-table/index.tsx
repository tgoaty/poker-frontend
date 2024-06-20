import React, {useEffect} from 'react';
import CreateTableForm from "src/features/createTable/ui/CreateTableForm";
import {useNavigate} from "react-router-dom";
import {useLocalStorageName} from "src/shared/hooks/useLocalStorageName";

const CreateTablePage = () => {
    const navigate = useNavigate();
    const {username} = useLocalStorageName();
    useEffect(() => {
        if (!username) {
            return navigate("/", {replace: true});
        }
    }, []);

    return (
        <div>
            <CreateTableForm/>
        </div>
    );
};

export default CreateTablePage;