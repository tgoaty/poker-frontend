import React from 'react';
import {message, Button, Row} from 'antd';

const CopyLinkBtn = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const info = () => {
        messageApi.info('Ссылка скопирована');
    };
    const copyLink = () => {
        const link = window.location.href;
        navigator.clipboard.writeText(link);
        info();
    }
    return (
        <>
            {contextHolder}
            <Row style={{margin: 20}} justify="end">
                <Button  type="primary" onClick={copyLink}>
                    Пригласить игроков
                </Button>
            </Row>

        </>
    );
};

export default CopyLinkBtn;