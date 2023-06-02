

const Student = require("../model/students.model");

exports.insertStudent = async (req, res) => {
  try {
    const reqBody = req.body;
    const student = await Student.create(reqBody);
    res.status(201).json({
      status: "success",
      data: student,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};