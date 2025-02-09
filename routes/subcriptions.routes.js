import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
  getSubscriptionDetails,
  updateSubscription,
  deleteSubscription,
  cancelSubscription,
  getUpcomingRenewals,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

// Get subscriptions with upcoming renewals
subscriptionRouter.get("/upcoming-renewals", authorize, getUpcomingRenewals);

// Get a specific subscription by ID
subscriptionRouter.get("/:id", getSubscriptionDetails);

// Create a new subscription
subscriptionRouter.post("/", authorize, createSubscription);

// Update a subscription
subscriptionRouter.put("/:id", authorize, updateSubscription);

// Delete a subscription
subscriptionRouter.delete("/:id", authorize, deleteSubscription);

// Get all subscriptions for a specific user
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

// Cancel a subscription
subscriptionRouter.put("/:id/cancel", authorize, cancelSubscription);

export default subscriptionRouter;
