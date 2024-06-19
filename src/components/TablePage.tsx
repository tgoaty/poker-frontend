import React from 'react';
import {useParams} from "react-router-dom";
import Table from "./Table";
import UserForm from "./UserForm";

const TablePage = () => {
    const {id} = useParams()
    const name = localStorage.getItem('name');
    return (
        <div>
            {id}
            {name ? (<Table/>) : (<UserForm/>)}
        </div>
    );
};

export default TablePage;