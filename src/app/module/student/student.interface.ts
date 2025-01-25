import { Model } from 'mongoose';
import { StudentModel } from './../student.model';
// import exp from 'constants';
// import { Schema, model, connect } from 'mongoose';

//create Interface

export type TUserName = {
  fristName: string;
  middleName?: string;
  lastName: string;
};
export type TGurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type TStudent = {
  id: string;
  name: TUserName;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGurdian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};

// for creating staeic

export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

//create a coustom instance method for students

// export type StudentMethods = {
//   isUserExists(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
