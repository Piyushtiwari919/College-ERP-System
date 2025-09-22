import express from "express";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read JSON file
const usersPath = path.join(__dirname, "../data/users.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

const router = express.Router();

router.use(express.json());

// LOGIN API
router.post("/login", (req, res) => {
  console.log("Request body:", req.body);
  const { email, password,admissionNo } = req.body;

  // ✅ This is where your code goes
  const user = users.find(u =>
    (u.role === "student" && u.admissionNo === admissionNo) ||
    (u.role !== "student" && u.email === email && u.password === password)
  );

  if (!user) {
    console.log("User not found");
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET || "secret123",
    { expiresIn: "1h" }
  );

  res.json({ token, role: user.role, userId: user.id });
});

export default router;
