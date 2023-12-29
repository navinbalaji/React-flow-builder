import React, { useContext } from "react";
import { BuilderContext, useDrawer } from "react-flow-builder";
import { Form, Button, Input, Select } from "antd";
import { Switch } from "antd";

export const ConfigForm: React.FC = React.forwardRef(() => {
  const { selectedNode: node }: any = useContext(BuilderContext);

  const { closeDrawer: cancel, saveDrawer: save } = useDrawer();

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      save?.(values);
    } catch (error) {
      const values = form.getFieldsValue();
      save?.(values, !!error);
    }
  };

  return (
    <div>
      <Form form={form} initialValues={node.data || { name: node.name }}>
        <Form.Item name="name" label="Action" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
      <div>
        <Button onClick={cancel} style={{ marginRight: "1rem" }}>
          Cancel
        </Button>
        <Button type="primary" onClick={handleSubmit}>
          Yes
        </Button>
      </div>
    </div>
  );
});

export const DelayForm: React.FC = React.forwardRef(() => {
  const { selectedNode: node }: any = useContext(BuilderContext);

  const { closeDrawer: cancel, saveDrawer: save } = useDrawer();

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      save?.(values);
    } catch (error) {
      const values = form.getFieldsValue();
      save?.(values, !!error);
    }
  };

  return (
    <div>
      <Form form={form} initialValues={node.data || { name: node.name, hour: 0 }}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="hour" label="Hour" rules={[{ required: true }]}>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            options={Array.from({ length: 25 }).map((_, index) => ({
              value: index,
              label: index,
            }))}
          />
        </Form.Item>
      </Form>
      <div>
        <Button onClick={cancel} style={{ marginRight: "1rem" }}>
          Cancel
        </Button>
        <Button type="primary" onClick={handleSubmit}>
          Yes
        </Button>
      </div>
    </div>
  );
});

export const ActionForm: React.FC = React.forwardRef(() => {
  const { selectedNode: node }: any = useContext(BuilderContext);

  const { closeDrawer: cancel, saveDrawer: save } = useDrawer();

  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      save?.(values);
    } catch (error) {
      const values = form.getFieldsValue();
      save?.(values, !!error);
    }
  };

  return (
    <div>
      <Form form={form} initialValues={node.data || { name: node.name, enabled: false }}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="enabled" label="Status" rules={[{ required: true }]}>
          <Switch defaultChecked={false} />
        </Form.Item>
      </Form>
      <div>
        <Button onClick={cancel} style={{ marginRight: "1rem" }}>
          Cancel
        </Button>
        <Button type="primary" onClick={handleSubmit}>
          Yes
        </Button>
      </div>
    </div>
  );
});
