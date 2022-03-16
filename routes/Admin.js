const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin.js");
const QuestionDatabase = require("../models/QuestionDatabase.js");
const Tutor = require("../models/Tutor.js");
const Student = require("../models/Student.js");
const SolvedQuestions = require("../models/SolvedQuestionDataBase.js");

// Validate a Admin :-
router.route("/validate").post((req, res) => {
  Admin.findOne(
    { email: req.body.email, password: req.body.password },
    (err, admin) => {
      if (err) {
        res.json({ msg: "error" });
      } else {
        if (admin) {
          console.log(admin);
          res.json({ msg: "success" });
        } else {
          res.json({ msg: "error" });
        }
      }
    }
  );
});
// Total Studenst registed :-
router.route("/totalStudents").get((req, res) => {
  Student.find({}, (err, students) => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      res.json({ msg: "success", count: students.length });
    }
  });
});
// Total Tutors registered :-
router.route("/totalTutors").get((req, res) => {
  Tutor.find({}, (err, students) => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      res.json({ msg: "success", count: students.length });
    }
  });
});
// Total Questions asked by Students :-
router.route("/totalquestions").get((req, res) => {
  QuestionDatabase.find({}, (err, questions) => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      res.json({ msg: "success", count: questions.length });
    }
  });
});

// Total questions answered by Tutors :-
router.route("/solvedquestioncount").get((req, res) => {
  SolvedQuestions.find({}, (err, questions) => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      res.json({ msg: "success", count: questions.length });
    }
  });
});

// Get All students
router.route("/getAllStudents").get((req, res) => {
  Student.find({}, (err, students) => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      res.json({ msg: "success", students: students });
    }
  });
});
// Display all Tutors
router.route("/getAllTutors").get((req, res) => {
  Tutor.find({}, (err, tutors) => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      res.json({ msg: "success", tutors: tutors });
    }
  });
});
// Display all Questions
router.route("/getAllQuestions").get((req, res) => {
  QuestionDatabase.find({}, (err, questions) => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      res.json({ msg: "success", questions: questions });
    }
  });
});
// Top Tutors
router.route("/getTopTutors").get((req, res) => {
  Tutor.find({}, (err, tutors) => {
    if (err) {
      res.json({ msg: "error" });
    } else {
      res.json({ msg: "success", tutors: tutors });
    }
  });
});

// Get Questionscount by Student
router.route("/getQuestionsCountByStudent").get((req, res) => {
  console.log(req.body.email);
  QuestionDatabase.find(
    {
      studentwhoaskedemail: req.body.email,
    },
    (err, questions) => {
      if (err) {
        res.json({ msg: "error" });
      } else {
        res.json({ msg: "success", questions: questions.length });
      }
    }
  );
});

module.exports = router;
