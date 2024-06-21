import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import NameForm from "src/features/auth/ui/NameForm";
import Table from "src/widgets/Table/ui/Table";
import {useLocalStorageName} from "src/shared/hooks/useLocalStorageName";
import CopyLinkBtn from "src/features/copyLink/ui/CopyLinkBtn";
import VoteBlock from "src/features/vote/ui/VoteBlock";
import {connect, useSelector} from "react-redux";
import {RootState} from "src/app/store/store";
import {HubConnectionBuilder} from "@microsoft/signalr";
import config from "src/shared/config/config";
import {IConnection} from "@microsoft/signalr/dist/esm/IConnection";

const TablePage = () => {
    const [connection, setConnection] = useState<any | null>(null)
    const {username} = useLocalStorageName();
    const userMode = useSelector((state: RootState) => state.userSlice.mode);
    const tableID = useSelector((state: RootState) => state.tableSlice.id);

    useEffect(() => {
        if (username) {
            joinTable();
        }
        window.addEventListener('beforeunload', closeTable);
        return () => {
            window.removeEventListener('beforeunload', closeTable);
        };
    }, []);

    useEffect(() => {
        joinTable()
    }, [username]);

    const joinTable = async () => {
        const connection = new HubConnectionBuilder()
            .withUrl(`${config.apiBaseUrl}/table`)
            .withAutomaticReconnect()
            .build();

        try{
            await connection.start();
            await connection.invoke('JoinTable', {
                id: tableID,
                username: username,
                userMode: userMode
            });
            setConnection(connection);

        } catch (error) {
            console.error(error)
        }
    }

    const closeTable = async () => {
        await connection.stop();
        setConnection(null);
    }
    
    return (
        <div>

            {username ? (
                <>
                    <CopyLinkBtn/>
                    <div  style={{display: 'flex', flexDirection: "column", alignItems: "center", rowGap: 40, marginTop: 100}}>
                        <Table/>
                        <VoteBlock/>
                    </div>
                </>

            ) : (
                <NameForm visitor={true}/>
            )}
        </div>
    );
};

export default TablePage;