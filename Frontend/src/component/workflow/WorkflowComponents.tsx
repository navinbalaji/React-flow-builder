import { StarOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { NodeContext } from "react-flow-builder";

export const StartNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="start-node">{node.name}</div>;
};

export const EndNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="end-node">{node.name}</div>;
};

export const NodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);

  return (
    <>
      <div
        className={`other-node ${node.configuring ? "node-configuring" : ""} ${
          node.validateStatusError ? "node-status-error" : ""
        }`}
        style={{
          borderBottom: "3px solid blue",
          textAlign: "center",
        }}
      >
        {node.data ? node.data.name : node.name}
      </div>
    </>
  );
};

export const ConditionNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <>
      <div
        className={`condition-node ${node.configuring ? "node-configuring" : ""} ${
          node.validateStatusError ? "node-status-error" : ""
        }`}
        style={{ borderBottom: "3px solid yellow", display: "grid", placeItems: "center" }}
      >
        <p>Decision</p>
        {node.data ? node.data.name : node.name}
      </div>
    </>
  );
};

export const ExitNode: React.FC = () => {
  // const node = useContext(NodeContext);
  return (
    <>
      <div className={`condition-node`} style={{ borderBottom: "3px solid red", textAlign: "center" }}>
        Exit
      </div>
    </>
  );
};

export const DelayNode: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <>
      <div className={`condition-node`} style={{ borderBottom: "3px solid red", textAlign: "center" }}>
        Delay
        <p style={{ padding: "0.3rem" }}>Wait for {node.data?.hour || 0} hour</p>
      </div>
    </>
  );
};

export const ActionNode: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <>
      <div
        className={`condition-node`}
        style={{
          borderBottom: "3px solid skyblue",
          textAlign: "center",
        }}
      >
        {node.data ? node.data?.name : node.name}
        <p style={{ padding: "0.5rem" }}>
          Status :{" "}
          {node.data?.enabled ? (
            <span style={{ color: "green", fontWeight: "bold" }}>on</span>
          ) : (
            <span style={{ color: "red", fontWeight: "bold" }}>off</span>
          )}
        </p>
      </div>
    </>
  );
};

export const TriggerNode: React.FC = () => {
  const node = useContext(NodeContext);
  return (
    <>
      <div
        className={`condition-node`}
        style={{
          borderBottom: "3px solid grey",
          textAlign: "center",
        }}
      >
        <p>
          <StarOutlined /> Trigger
        </p>
        <span style={{ padding: "1rem" }}>{node.data ? node.data?.name : node.name}</span>
      </div>
    </>
  );
};

export const LoopNode: React.FC = () => {
  const node = useContext(NodeContext);

  return (
    <>
      <div
        className={`other-node ${node.configuring ? "node-configuring" : ""} ${
          node.validateStatusError ? "node-status-error" : ""
        }`}
        style={{
          borderBottom: "3px solid orange",
          textAlign: "center",
        }}
      >
        {node.data ? node.data.name : node.name}
      </div>
    </>
  );
};
