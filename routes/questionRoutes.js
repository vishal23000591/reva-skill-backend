import express from "express";
import Question from "../models/Question.js";
import Role from "../models/Role.js";

const router = express.Router();

// Add question (Admin)
router.post("/", async (req, res) => {
  try {
    const { roleId, question, options, answerIndex } = req.body;
    const q = new Question({ role: roleId, question, options, answerIndex });
    await q.save();
    res.json(q);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get questions by role (Customer)
router.get("/:roleId", async (req, res) => {
  try {
    // Populate the role name
    const questions = await Question.find({ role: req.params.roleId }).populate("role", "name");
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



export default router;
