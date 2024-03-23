const express = require('express');
const router = express.Router();
const Student = require('../Models/student');

// Here we add a new student
router.post('/', async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// in this function we can see all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.render('students/index', { students });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// in this function we can search for a specific student
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.render('students/show', { student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// in this function we can update student information
router.put('/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// with this function we delete a student
router.delete('/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
