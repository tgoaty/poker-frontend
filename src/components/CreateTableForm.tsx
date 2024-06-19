import React from 'react';
import {Button, Card, Form, Input, Select} from "antd";

const {Option} = Select;

const CreateTableForm = () => {



    return (
        <Card bordered={false} style={{width: 500, margin: "100px auto"}}>
            <Form>

                <Form.Item label="Game's name">
                    <Input placeholder="ИМЯ"/>
                </Form.Item>
                <Form.Item name="Voting system" label="Voting system">
                    <Select
                        placeholder="Select a option and change input text above"

                    >
                        <Option value="Fibonacci">Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?, ☕ )</Option>
                        <Option value="MFibonacci">Modified Fibonacci ( 0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?, ☕ )</Option>
                        <Option value="Tshirts">T-shirts (XS, S, M, L, XL, ?, ☕ )</Option>
                        <Option value="Powers">Powers of 2 ( 0, 1, 2, 4, 8, 16, 32, 64, ?, ☕ )</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary">CREATE GAME</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default CreateTableForm;