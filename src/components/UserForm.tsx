import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';

const UserForm = () => {
    const [name, setName] = useState<string>('');

    const handleSubmit = () => {
        localStorage.setItem('name', name);
    };

    return (
        <Card bordered={false} style={{ width: 500, margin: "100px auto" }}>
            <Form>
                <Form.Item>
                    <h3>ВВЕДИТЕ ИМЯ</h3>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="ИМЯ" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handleSubmit}>
                        Далее
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default UserForm;