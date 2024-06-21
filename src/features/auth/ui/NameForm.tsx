import React, {FC} from 'react';
import {Checkbox, Form, Input} from 'antd';
import BaseForm from "src/shared/ui/BaseForm";
import {useLocalStorageName} from "src/shared/hooks/useLocalStorageName";
import {useNavigate, useParams} from "react-router-dom";

interface UserFormProps {
    visitor?: boolean;
}

const UserForm: FC<UserFormProps> = ({visitor}) => {
    const {params} = useParams();
    const navigate = useNavigate();
    const {updateUsername} = useLocalStorageName();

    const handleSubmit = (values: { [key: string]: any }) => {
        if (values.name) {
            updateUsername(values.name);
            if (!params) {
                return navigate('/create-table', {replace: true})
            }
        }
    };

    return (

        <BaseForm btnName={"Далее"} handleSubmit={handleSubmit} formName={'ВВЕДИТЕ ИМЯ'}>

            <Form.Item name="name" rules={[{ required: true, message: 'Please input!' }]}>
                <Input placeholder="ИМЯ"/>
            </Form.Item>
            {
                visitor &&
              <Form.Item name="disabled" valuePropName="checked">
                <Checkbox>VISITOR MODE</Checkbox>
              </Form.Item>
            }
        </BaseForm>

    );
};

export default UserForm;