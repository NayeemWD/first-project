import { Request, Response } from 'express';
import { StudentServices } from './stydent.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body; //will cal service func to send this data
    const result = await StudentServices.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      massage: 'Student is created succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
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
