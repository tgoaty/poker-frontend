import React from 'react';
import {Form, Input, Select} from "antd";
import BaseForm from "src/shared/ui/BaseForm";
import {apiSlice} from "src/shared/api/apiSlice";
import { v4 as uuidv4 } from "uuid";
import {useNavigate} from "react-router-dom";

const {Option} = Select;

const CreateTableForm = () => {
    const [createTableData, {}] = apiSlice.useCreateTableDataMutation();

    const navigate = useNavigate()

    const handleSubmit = async (values: { [key: string]: any }) => {
        const id = uuidv4();
        await createTableData({tableName: values.tableName, votingSystem: values.votingSystem, id: id});
        navigate(`/table/${id}`, {replace: true});

    }

    return (
        <BaseForm btnName={'CREATE GAME'} handleSubmit={handleSubmit} formName={'СОЗДАТЬ СТОЛ'}>

            <Form.Item name="tableName" label="Game's name" rules={[{ required: true, message: 'Please input!' }]}>
                <Input placeholder="НАЗВАНИЕ"/>
            </Form.Item>
            <Form.Item name="votinSystem" label="Voting system" rules={[{ required: true, message: 'Please input!' }]}>
                <Select
                    placeholder="Select a option and change input text above"
                >
                    <Option value="FIBONACCI">Fibonacci ( 0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ?, ☕ )</Option>
                    <Option value="ONE_TO_TEN">One to ten ( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ?, ☕
                        )</Option>
                    <Option value="TSHIRTS" disabled>T-shirts (XS, S, M, L, XL, ?, ☕ )</Option>
                    <Option value="POWERS_OF_TWO">Powers of 2 ( 0, 1, 2, 4, 8, 16, 32, 64, ?, ☕ )</Option>
                </Select>
            </Form.Item>
        </BaseForm>
    );
};

export default CreateTableForm;