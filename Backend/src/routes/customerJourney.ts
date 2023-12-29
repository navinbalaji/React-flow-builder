import { Router } from "express";
import { getAllCustomerJourneys, getCustomerJourneyByConnections, createCustomerJourney, updateCustomerJourney, deleteCustomerJourney } from "../controller/customerJourney";

export const customerJourneyRouter = Router();

// GET all customer journeys
customerJourneyRouter.get('/', getAllCustomerJourneys);

// GET a specific customer journey by ID
customerJourneyRouter.get('/:id', getCustomerJourneyByConnections);

// CREATE a new customer journey
customerJourneyRouter.post('/', createCustomerJourney);

// UPDATE a customer journey by ID
customerJourneyRouter.put('/:id', updateCustomerJourney);

// DELETE a customer journey by ID
customerJourneyRouter.delete('/:id', deleteCustomerJourney);
