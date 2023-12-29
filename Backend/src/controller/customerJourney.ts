import { baseResponseModel } from "../common";
import { customerJourneySchema } from "../models/customerJourney";
import { Request, Response } from "express";

// Fetch all customer journeys
export const getAllCustomerJourneys = async (req: Request, res: Response) => {
  try {
    const journeys = await customerJourneySchema.find();
    res.status(200).json(baseResponseModel(true, "Data Fetched sucessfully", journeys));
  } catch (err) {
    res.status(500).json(baseResponseModel(false, "Data Fetch Failed", [], err));
  }
};

// Create a new customer journey
export const createCustomerJourney = async (req: Request, res: Response) => {
  const { nodes, connections } = req.body;

  if (!nodes || !connections) {
    return res.status(400).json(baseResponseModel(false, "Nodes and connections are required.", []));
  }

  const journey = new customerJourneySchema({
    nodes,
    connections,
  });

  try {
    const newJourney = await journey.save();
    return res.status(201).json(baseResponseModel(true, "Data Saved.", newJourney));
  } catch (err) {
    res.status(400).json(baseResponseModel(false, "Data save Failed", [], err));
  }
};

// Get a specific customer journey by connections 
export const getCustomerJourneyByConnections = async (req: Request, res: Response) => {
  try {
    const journey = await customerJourneySchema.findOne({ connections: req.params.id });
    if (!journey) {
      return res.status(404).json(baseResponseModel(false, "Customer journey not found.", []));
    }
    return res.status(200).json(baseResponseModel(true, "Data Fetched successfully", journey));
  } catch (err) {
    return res.status(500).json(baseResponseModel(false, "Something went wrong", [], err));
  }
};

// Update a customer journey by ID
export const updateCustomerJourney = async (req: Request, res: Response) => {
  const { nodes, connections } = req.body;

  if (!nodes || !connections) {
    return res.status(400).json(baseResponseModel(false, "Nodes and connections are required."));
  }

  try {
    const journey = await customerJourneySchema.findById(req.params.id);
    if (!journey) {
      return res.status(404).json(baseResponseModel(false, "Customer journey not found."));
    }

    journey.nodes = nodes;
    journey.connections = connections;

    const updatedJourney = await journey.save();
    return res.status(200).json(baseResponseModel(true, "Data updated successfully", updatedJourney));
  } catch (err) {
    return res.status(500).json(baseResponseModel(false, "Data updated failed"));
  }
};

// Delete a customer journey by ID
export const deleteCustomerJourney = async (req: Request, res: Response) => {
  try {
    const journey = await customerJourneySchema.findById(req.params.id);
    if (!journey) {
      return res.status(400).json(baseResponseModel(false, "Customer journey not found."));
    }

    await journey.deleteOne({ _id: req.params.id });
    return res.status(200).json(baseResponseModel(true, "Customer journey deleted successfully.", []));
  } catch (err) {
    return res.status(500).json(baseResponseModel(false, "Customer journey not found.", [], err));
  }
};
