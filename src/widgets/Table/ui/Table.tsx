import React from 'react';
import styles from './Table.module.css'
import {useSelector} from "react-redux";
import {RootState} from "src/app/store/store";

const Table = () => {
    const tableName = useSelector((state: RootState) => state.tableSlice.tableName);
    return (
        <div className={styles.table}>
            {tableName}
        </div>
    );
};

export default Table;