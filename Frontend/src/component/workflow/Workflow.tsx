import { useEffect, useState } from "react";
import FlowBuilder, { INode } from "react-flow-builder";
import { DrawerComponent, PopconfirmComponent, PopoverComponent } from "../../antd";
import { registerNodes } from "./defaultNodes";
import { SaveOutlined, MenuOutlined, DeleteOutlined, DiffOutlined } from "@ant-design/icons";
import { FloatButton, message } from "antd";
import { workflowService } from "../../service/workflowService";

const defaultNodes: any = [
  {
    id: "node-0d9d4733-e48c-41fd-a41f-d93cc4718d97",
    type: "start",
    name: "start",
    path: ["0"],
    value: true,
  },
  {
    id: "node-b106675a-5148-4a2e-aa86-8e06abd692d1",
    type: "end",
    name: "end",
    path: ["1"],
    value: true,
  },
];

const Workflow = () => {
  const [nodes, setNodes] = useState<INode[]>(defaultNodes);
  const [open, setOpen] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [id, setId] = useState<string | null>(null);

  const handleChange = (nodes: INode[]) => {
    setNodes(nodes);
  };

  const handleUpdate = async () => {
    try {
      if (!id) {
        throw new Error("No Id");
      }

      const data = await workflowService.updateNodes(id, nodes);
      if (!data) {
        throw new Error("Something went wrong");
      }
      setNodes(data?.data?.nodes || defaultNodes);
      messageApi.open({
        key: "updatable",
        type: "success",
        content: "Updated!",
        duration: 2,
      });
    } catch (err) {
      console.log(err);

      messageApi.open({
        key: "updatable",
        type: "error",
        content: "Updated Failed!",
        duration: 2,
      });
    }
  };

  const handleDelete = async () => {
    try {
      if (!id) {
        throw new Error("No Id");
      }
      const data = await workflowService.deleteNode(id);
      if (!data) {
        throw new Error("Something went wrong");
      }
      setNodes(defaultNodes);
      messageApi.open({
        key: "updatable",
        type: "success",
        content: "Deleted!",
        duration: 2,
      });
    } catch (err) {
      console.log(err);

      messageApi.open({
        key: "updatable",
        type: "error",
        content: "Deletion Failed!",
        duration: 2,
      });
    }
  };

  const handleSave = async () => {
    try {
      const data = await workflowService.createNodes(nodes);
      if (!data) {
        throw new Error("Something went wrong");
      }
      if (id) {
        throw new Error("Failed Already there. Please update");
      }
      setNodes(data?.data?.nodes || defaultNodes);
      setId(data?.data?._id || null);
      messageApi.open({
        key: "updatable",
        type: "success",
        content: "saved!",
        duration: 2,
      });
    } catch (err) {
      console.log(err);
      messageApi.open({
        key: "updatable",
        type: "error",
        content: "save failed!",
        duration: 2,
      });
    }
  };

  useEffect(() => {
    const getCurrentNode = async () => {
      try {
        const data = await workflowService.getNodes();
        if (!data) {
          throw new Error("Something went wrong");
        }
        setNodes(data?.data?.nodes || defaultNodes);
        setId(data?.data?._id || null);
        messageApi.open({
          key: "updatable",
          type: "success",
          content: "Loaded!",
          duration: 2,
        });
      } catch (err) {
        console.log(err);
      }
    };
    const timerFunction = setTimeout(() => {
      getCurrentNode();
    }, 2000);

    return () => {
      clearTimeout(timerFunction);
    };
  }, []);

  return (
    <>
      {contextHolder}

      <FlowBuilder
        draggable
        nodes={nodes}
        onChange={handleChange}
        registerNodes={registerNodes}
        historyTool
        zoomTool
        DrawerComponent={DrawerComponent}
        PopoverComponent={PopoverComponent}
        PopconfirmComponent={PopconfirmComponent}
        showArrow={true}
        showPracticalBranchNode={true}
      />
      <FloatButton.Group
        open={open}
        trigger="click"
        style={{ right: 24 }}
        icon={<MenuOutlined />}
        onClick={() => setOpen(!open)}
      >
        <FloatButton tooltip="delete" icon={<DeleteOutlined />} onClick={handleDelete} />
        <FloatButton tooltip="Update" icon={<DiffOutlined />} onClick={handleUpdate} />

        <FloatButton tooltip="save" icon={<SaveOutlined />} onClick={handleSave} />
      </FloatButton.Group>
    </>
  );
};

export default Workflow;
