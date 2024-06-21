import {Layout} from 'antd';
import {Content } from 'antd/es/layout/layout';
import React from 'react';
import { Routing } from "src/pages";


const App = () => {
    return (
        <Layout>
            <Content style={{height: "calc(100vh)", backgroundColor: 'rgb(240,242,245)'}}>
                <Routing />
            </Content>

        </Layout>
    );
};

export default App;