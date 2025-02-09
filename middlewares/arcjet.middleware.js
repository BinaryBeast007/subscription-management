import aj from "../config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      return handleDeniedRequest(decision, res);
    }

    next();
  } catch (error) {
    console.error(`Arcjet Middleware Error: ${error}`);
    next(error);
  }
};

const handleDeniedRequest = (decision, res) => {
  const errorMessages = {
    rateLimit: { status: 429, message: "Rate limit exceeded" },
    bot: { status: 403, message: "Bot detected" },
    default: { status: 403, message: "Access denied" }
  };

  const { status, message } = decision.reason.isRateLimit()
    ? errorMessages.rateLimit
    : decision.reason.isBot()
    ? errorMessages.bot
    : errorMessages.default;

  return res.status(status).json({ error: message });
};

export default arcjetMiddleware;
