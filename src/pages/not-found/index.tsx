import { Result, Button } from 'antd';
import React from 'react';
import {useNavigate} from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/create-table", {replace: true})
    }
    return (
        <Result style={{marginTop: 200}}
            icon={''}
            title="404 Page not found"
            extra={<Button onClick={goHome} type="primary">Home</Button>}
        />
    );
};

export default NotFoundPage;