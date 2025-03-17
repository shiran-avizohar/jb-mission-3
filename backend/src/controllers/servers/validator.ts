import Joi from "joi";

// Validator for updating server status
export const updateServerStatusValidator = Joi.object({
    serverId: Joi.string().uuid().required(), // Ensures serverId is a valid UUID
});