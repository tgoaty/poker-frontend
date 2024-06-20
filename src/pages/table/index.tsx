import React from 'react';
import {useParams} from "react-router-dom";
import NameForm from "src/features/auth/ui/NameForm";
import Table from "src/widgets/Table/ui/Table";
import {useLocalStorageName} from "src/shared/hooks/useLocalStorageName";

const TablePage = () => {
    const {id} = useParams()
    const {username} = useLocalStorageName();
    return (
        <div>
            {id}
            {username ? (<Table/>) : (<NameForm visitor={true}/>)}
        </div>
    );
};

export default TablePage;