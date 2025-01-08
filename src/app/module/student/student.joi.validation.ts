import Joi from 'joi';

//creating a schema validation suing joi

const userNameSchema = Joi.object({
  fristName: Joi.string()
    .trim()
    .required()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/)
    .messages({
      'string.empty': 'First name is required',
      'string.max': 'First name must not exceed 20 characters',
      'string.pattern.base':
        'First name must start with an uppercase letter and contain only lowercase letters',
    }),
  middleName: Joi.string().trim().optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      'string.empty': 'Last name is required',
      'string.pattern.base':
        'Last name must contain only alphabetic characters',
    }),
});

const guardianSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'string.empty': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    'string.empty': 'Father Occupation is required',
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Father Contact No is required',
  }),
  motherName: Joi.string().required().messages({
    'string.empty': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().required().messages({
    'string.empty': 'Mother Occupation is required',
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'string.empty': 'Mother Contact No is required',
  }),
});

const localGuardianSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Local Guardian Name is required',
  }),
  Occupation: Joi.string().required().messages({
    'string.empty': 'Local Guardian Occupation is required',
  }),
  ContactNo: Joi.string().required().messages({
    'string.empty': 'Local Guardian Contact number is required',
  }),
  address: Joi.string().required().messages({
    'string.empty': 'Local Guardian Address is required',
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.empty': 'Student ID is required',
  }),
  name: userNameSchema.required().messages({
    'object.base': 'Name is required',
  }),
  gender: Joi.string().valid('male', 'female', 'other').required().messages({
    'string.empty': 'Gender is required',
    'any.only': 'Gender must be one of [male, female, other]',
  }),
  dateOfBirth: Joi.string().required().messages({
    'string.empty': 'Date of Birth is required',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Email must be a valid email address',
  }),
  contactNo: Joi.string().required().messages({
    'string.empty': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'string.empty': 'Emergency Contact number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only': 'Blood Group must be a valid type (e.g., A+, B-, etc.)',
    }),
  presentAddress: Joi.string().required().messages({
    'string.empty': 'Present Address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'string.empty': 'Permanent Address is required',
  }),
  guardian: guardianSchema.required().messages({
    'object.base': 'Guardian details are required',
  }),
  localGuardian: localGuardianSchema.required().messages({
    'object.base': 'Local Guardian details are required',
  }),
  profileImg: Joi.string().optional(),
  isActive: Joi.string().valid('active', 'blocked').default('active').messages({
    'any.only': 'Status must be either "active" or "blocked"',
  }),
});
// end Joy Schema
export default studentValidationSchema;
