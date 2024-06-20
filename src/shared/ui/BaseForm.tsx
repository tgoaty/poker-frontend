import React from 'react';
import {Form, Button, Card} from "antd";

interface BaseFormProps {
    children: React.ReactNode;
    btnName: string;
    formName?: string;
    handleSubmit: (values: { [key: string]: any }) => void;
}


const BaseForm: React.FC<BaseFormProps> = ({children, btnName, formName, handleSubmit}) => {
    const [form] = Form.useForm();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        form.validateFields().then(values => {
            handleSubmit(values);
        });
    };
    return (
        <Card bordered={false} style={{width: 500, margin: "100px auto"}}>
            <Form form={form} onSubmitCapture={onSubmit}>
                {formName &&
                <Form.Item>
                    <h3>{formName}</h3>
                </Form.Item>
                }
                {children}
                <Form.Item>
                    <Button type="primary" htmlType="submit">{btnName}</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default BaseForm;