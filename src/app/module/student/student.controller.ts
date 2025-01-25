import { Request, Response } from 'express';
import { StudentServices } from './stydent.service';
import studentzodvailSchema from './student.zod.validation';
// import { z } from "zod";

// import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // data balidation using Joi
    // const { value, error } = studentValidationSchema.validate(studentData);
    // const { error } = studentValidationSchema.validate(studentData);
    // console.log(value, error);
    // console.log({ value }, { error });
    // const result = await StudentServices.createStudentIntoDB(value);

    //data validation using zod
    const zodparsedData = studentzodvailSchema.parse(studentData);

    // const result = await StudentServices.createStudentIntoDB(studentData);
    const result = await StudentServices.createStudentIntoDB(zodparsedData);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     massage: 'something went wrong',
    //     error: error.details,
    //   });
    // }

    res.status(200).json({
      success: true,
      massage: 'Student is created succesfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      massage: error.message || 'something went wrong',
      err: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromBD();
    res.status(200).json({
      success: true,
      massage: 'Students is retrieyed succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromBD(studentId);
    res.status(200).json({
      success: true,
      massage: 'Student is retrieyed succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
