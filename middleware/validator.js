const joiValidator = require("@hapi/joi");

const schemas = {

    firstName: joiValidator.string().trim()
        .min(3)
        .required()
        .pattern(/^[^\s].*[^\s]$/) // Ensures no leading or trailing spaces
        .pattern(/^[A-Za-z]+(?: [A-Za-z]+)*$/) // Ensures only alphabetic characters and allows spaces within
        .messages({
            'string.pattern.base': 'First name must not start or end with  spaces and should contain only letters.',
            'string.min': 'First name must be at least 3 characters long.',
        }),
    lastName: joiValidator
        .string()
        .regex(/^\S.*\S$/) // Ensures no leading or trailing spaces
        .required()
        .messages({
            "string.pattern.base": "Last name cannot have leading or trailing spaces.",
        }),

    email: joiValidator
        .string()
        .email()
        .required(),
    password: joiValidator
        .string()
        .required()
        .min(8)
        .max(50)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,50}$/)
        .messages({
            "string.pattern.base": "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
            "string.empty": "Password cannot be empty",
        }),
    phoneNumber: joiValidator
        .string()
        .required(),
    organizationName: joiValidator
        .string()
        .optional(),
    registrationNumber: joiValidator
        .string()
        .required(),
};


const staffEntryValidator = (validateAllFields = false) => {
    return async (req, res, next) => {
        // Trim input fields
        req.body.firstName = req.body.firstName ? req.body.firstName.trim() : '';
        req.body.lastName = req.body.lastName ? req.body.lastName.trim() : '';
        req.body.email = req.body.email ? req.body.email.trim() : '';

        const keysToValidate = {}
        Object.keys(schemas).forEach((key) => {
            if (validateAllFields) {
                keysToValidate[key] = req.body[key] !== undefined ? schemas[key].required() : schemas[key]
            } else {
                if (req.body[key] !== undefined) {
                    keysToValidate[key] = schemas[key]
                }
            }
        })

        const schema = joiValidator.object(keysToValidate);
        const { error } = schema.validate(req.body);

        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        } else {
            return next();
        }
    };
};

module.exports = staffEntryValidator;
