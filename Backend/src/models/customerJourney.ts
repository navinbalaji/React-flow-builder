import mongoose from "mongoose";


const customerJourney = new mongoose.Schema({
  nodes: {
    type: [Object]
  },
  connections: {
    type: String
  }
}, { timestamps: true });

export const customerJourneySchema = mongoose.model("customerJourney", customerJourney);
