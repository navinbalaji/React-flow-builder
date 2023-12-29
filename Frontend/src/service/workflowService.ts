import { INode } from "react-flow-builder";
import axiosInstance from "./axiosService";



export const workflowService = {


  getNodes: async () => {
    return (await axiosInstance.get("/customer-journeys/customer-journey", { signal: new AbortController().signal })).data || null;
  },
  updateNodes: async (id: string, data: INode[]) => {
    return (await axiosInstance.put(`/customer-journeys/${id}`, {
      nodes: data,
      connections: "customer-journey",
      signal: new AbortController().signal
    })).data || null;
  },
  createNodes: async (data: INode[]) => {
    return (await axiosInstance.post(`/customer-journeys`, {
      nodes: data,
      connections: "customer-journey", signal: new AbortController().signal
    })).data || null;
  },
  deleteNode: async (id: string) => {
    return (await axiosInstance.delete(`/customer-journeys/${id}`, { signal: new AbortController().signal })).data || null;
  },
};
