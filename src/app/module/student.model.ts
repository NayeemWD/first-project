import { Schema, model } from 'mongoose';
import {
  Gurdian,
  LocalGuardian,
  Student,
  UserName,
} from './student/student.interface';

// create Svhema

const userNameSchema = new Schema<UserName>({
  fristName: {
    type: String,
    require: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    require: true,
  },
});
const guardianSchema = new Schema<Gurdian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  Name: {
    type: String,
    required: true,
  },
  Occupation: {
    type: String,
    required: true,
  },
  ContactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  // bloodGroup:{type:String,
  //     enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']},
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});

// create Model

export const StudentModel = model<Student>('Student', studentSchema);
