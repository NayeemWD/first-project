// import exp from 'constants';
// import { Schema, model, connect } from 'mongoose';

//create Interface

export type UserName = {
  fristName: string;
  middleName?: string;
  lastName: string;
};
export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type LocalGuardian = {
  Name: string;
  Occupation: string;
  ContactNo: string;
  address: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'femail';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Gurdian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
