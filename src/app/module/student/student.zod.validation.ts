import { z } from 'zod';

const userNameSchema = z.object({
  fristName: z
    .string()
    .trim()
    .min(1, 'First name is required')
    .max(20, 'Max length is 20')
    .regex(/^[A-Z][a-z]*$/, 'First name must start with a capital letter'),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().min(1, 'Last name is required'),
});
// Guardian schema
const guardianSchema = z.object({
  fatherName: z.string().min(1, 'Father name is required'),
  fatherOccupation: z.string().min(1, 'Father occupation is required'),
  fatherContactNo: z
    .string()
    .trim()
    .min(1, 'Father contact number is required')
    .regex(/^\d+$/, 'Father contact number must be digits'),
  motherName: z.string().min(1, 'Mother name is required'),
  motherOccupation: z.string().min(1, 'Mother occupation is required'),
  motherContactNo: z
    .string()
    .trim()
    .min(1, 'Mother contact number is required')
    .regex(/^\d+$/, 'Mother contact number must be digits'),
});

// LocalGuardian schema
const localGuardianSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  occupation: z.string().min(1, 'Occupation is required'),
  contactNo: z
    .string()
    .min(1, 'Contact number is required')
    .regex(/^\d+$/, 'Contact number must be digits'),
  address: z.string().min(1, 'Address is required'),
});

// Student schema
const studentzodvailSchema = z.object({
  id: z.string().trim().min(1, 'ID is required'),
  name: userNameSchema,
  gender: z.enum(['male', 'female', 'other'], {
    errorMap: () => ({
      message: 'Gender is required and must be male, female, or other',
    }),
  }),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  contactNo: z.string().min(1, 'Contact number is required'),
  emergencyContactNo: z.string().min(1, 'Emergency contact number is required'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
      errorMap: () => ({ message: 'Invalid blood group' }),
    })
    .optional(),
  presentAddress: z.string().min(1, 'Present address is required'),
  permanentAddress: z.string().min(1, 'Permanent address is required'),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string().optional(),
  isActive: z
    .enum(['active', 'blocked'], {
      errorMap: () => ({ message: 'Invalid status' }),
    })
    .default('active'),
});

export default studentzodvailSchema;
