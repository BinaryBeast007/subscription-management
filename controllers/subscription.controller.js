import Subscription from "../models/subscription.model.js";

// Create a subscription
export const createSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json({ success: true, data: { subscription } });
  } catch (e) {
    next(e);
  }
};

// Get a specific user's subscriptions
export const getUserSubscriptions = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      const error = new Error("You are not the owner of this account");
      error.status = 401;
      throw error;
    }
    const subscriptions = await Subscription.find({ user: req.params.id });
    res.status(200).json({ success: true, data: subscriptions });
  } catch (e) {
    next(e);
  }
};

// Get details of a specific subscription by ID
export const getSubscriptionDetails = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    if (!subscription) {
      const error = new Error("Subscription not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({ success: true, data: subscription });
  } catch (e) {
    next(e);
  }
};
// Update a subscription's details
export const updateSubscription = async (req, res, next) => {
  try {
    const updatedSubscription = await Subscription.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedSubscription) {
      const error = new Error("Subscription not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({ success: true, data: updatedSubscription });
  } catch (e) {
    next(e);
  }
};

// Delete a subscription
export const deleteSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findById(req.params.id);

    if (!subscription) {
      return res.status(404).json({
        success: false,
        error: "Subscription not found",
      });
    }

    await subscription.remove();

    res.status(200).json({
      success: true,
      message: "Subscription deleted",
    });
  } catch (error) {
    next(error);
  }
};

// Cancel a subscription
export const cancelSubscription = async (req, res, next) => {
  try {
    const subscription = await Subscription.findByIdAndUpdate(
      req.params.id,
      { status: "cancelled" },
      { new: true },
    );
    if (!subscription) {
      const error = new Error("Subscription not found");
      error.status = 404;
      throw error;
    }
    res.status(200).json({ success: true, data: subscription });
  } catch (e) {
    next(e);
  }
};

// Get subscriptions that have upcoming renewals
export const getUpcomingRenewals = async (req, res, next) => {
  try {
    const upcomingRenewals = await Subscription.find({
      renewalDate: { $gte: new Date() },
      status: "active",
    }).sort({ renewalDate: 1 });

    res.status(200).json({ success: true, data: upcomingRenewals });
  } catch (e) {
    next(e);
  }
};
