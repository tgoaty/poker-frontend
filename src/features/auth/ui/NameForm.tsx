import React, {FC} from 'react';
import {Checkbox, Form, Input} from 'antd';
import BaseForm from "src/shared/ui/BaseForm";
import {useLocalStorageName} from "src/shared/hooks/useLocalStorageName";

interface UserFormProps {
    visitor?: boolean;
}

const UserForm: FC<UserFormProps> = ({visitor}) => {
    const {updateUsername} = useLocalStorageName();

    const handleSubmit = (values: { [key: string]: any }) => {
        console.log(values);
        updateUsername(values.name)
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