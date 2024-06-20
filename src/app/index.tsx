import {Layout} from 'antd';
import { Header, Content } from 'antd/es/layout/layout';
import React from 'react';
import { Routing } from "src/pages";

const App = () => {
    return (
        <Layout>
            <Header>
            </Header>
            <Content style={{height: "calc(100vh - 64px)", backgroundColor: 'rgb(240,242,245)'}}>
                <Routing />
            </Content>

        </Layout>
    );
};

export default App;