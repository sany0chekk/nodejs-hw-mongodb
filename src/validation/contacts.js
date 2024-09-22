import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 20 characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9+]{3,20}$/)
    .required()
    .messages({
      'string.pattern.base':
        'Phone number can only contain numbers and the "+" symbol',
      'any.required': 'Phone is required',
    }),
  email: Joi.string().min(3).max(20).email().message({
    'string.base': 'Email should be a string',
    'string.email': 'Please provide a valid email address',
  }),
  isFavourite: Joi.boolean().message({
    'boolean.base': 'isFavourite should be a string',
  }),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .messages({
      'any.only': 'Contact type must be either work, home, or personal',
      'any.required': 'Contact type is required',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least 3 characters',
    'string.max': 'Username should have at most 20 characters',
  }),
  phoneNumber: Joi.string()
    .pattern(/^[0-9+]{3,20}$/)
    .messages({
      'string.pattern.base':
        'Phone number can only contain numbers and the "+" symbol',
    }),
  email: Joi.string().min(3).max(20).email().messages({
    'string.base': 'Email should be a string',
    'string.email': 'Please provide a valid email address',
  }),
  isFavourite: Joi.boolean().messages({
    'boolean.base': 'isFavourite should be a boolean',
  }),
  contactType: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only': 'Contact type must be either work, home, or personal',
  }),
});
