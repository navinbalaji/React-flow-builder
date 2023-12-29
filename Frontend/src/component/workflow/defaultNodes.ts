import { IRegisterNode } from "react-flow-builder";
import { ConfigForm, DelayForm, ActionForm } from "./ConfigForm";
import { StartNodeDisplay, EndNodeDisplay, NodeDisplay, ConditionNodeDisplay, ExitNode, DelayNode, ActionNode, TriggerNode, LoopNode } from "./WorkflowComponents";

export const registerNodes: IRegisterNode[] = [
    {
        type: "start",
        name: "START",
        displayComponent: StartNodeDisplay,
        isStart: true,
    },
    {
        type: "end",
        name: "END",
        displayComponent: EndNodeDisplay,
        isEnd: true,
    },
    {
        type: "node",
        name: "Node",
        displayComponent: NodeDisplay,
        configComponent: ConfigForm,
    },
    {
        type: "trigger",
        name: "Trigger",
        displayComponent: TriggerNode,
        configComponent: ConfigForm,
    },
    {
        type: "common",
        name: "Delay",
        displayComponent: DelayNode,
        configComponent: DelayForm,
    },
    {
        type: "branch",
        name: "Decision",
        displayComponent: ConditionNodeDisplay,
        conditionNodeType: "condition",
        configComponent: ConfigForm
    },
    {
        type: "condition",
        name: "Condition",
        displayComponent: NodeDisplay,
        configComponent: ConfigForm,
    },
    {
        type: "exitnode",
        name: "Exit",
        displayComponent: ExitNode,
        configComponent: ConfigForm,
    },
    {
        type: "actionNode",
        name: "Action Node",
        displayComponent: ActionNode,
        configComponent: ActionForm,
    },
    {
        type: "loop",
        name: "Loop",
        displayComponent: LoopNode,
        isLoop: true,
    },
];