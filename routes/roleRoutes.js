import express from "express";
import Role from "../models/Role.js";

const router = express.Router();

// Get all roles
router.get("/", async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new role
router.post("/", async (req, res) => {
  try {
    const role = new Role({ name: req.body.name });
    await role.save();
    res.json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
