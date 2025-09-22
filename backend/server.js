import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import { authMiddleware } from "./routes/authMiddleware.js";


const app = express();
app.use(cors());
app.use(express.json({ limit: "2mb" })); // ensure body parsing and adequate size
app.use("/api/auth", authRoutes);

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Correct file path
const filePath = path.join(__dirname, "data", "ApplicantData.json");

// Ensure data directory exists
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Save form data
app.post("/save-personal", (req, res) => {
  console.log("POST /save-personal received. body keys:", Object.keys(req.body));
  try {
    // read existing data if present
    let existing = {};
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      if (raw.trim()) {
        try { existing = JSON.parse(raw); } catch(parseErr) {
          console.warn("Warning: existing JSON parse failed — will overwrite. parseErr:", parseErr.message);
          existing = {};
        }
      }
    }
    // merge (new values win)
    const merged = { ...existing, ...req.body };

    fs.writeFileSync(filePath, JSON.stringify(merged, null, 2));
    console.log("Saved applicant data to:", filePath);
    res.status(200).json({ success: true, message: "Saved", merged });
  } catch (err) {
    console.error("Error saving file:", err);
    res.status(500).json({ success: false, message: "Error saving file", error: err.message });
  }
});

// Fetch form data
app.get("/get-personal", (req, res) => {
  try{
  if (fs.existsSync(filePath)) {
    const fileContent  = fs.readFileSync(filePath,"utf-8");
    // Check if file is empty
            if (!fileContent.trim()) {
                res.json({});
                return;
            }
     const data = JSON.parse(fileContent);        
    res.json(data);
  } else {
    res.json({});
  }
}catch (error) {
        console.error("Error reading/parsing file:", error);
        res.json({});
    }
});

// Serve static files first
const buildPath = path.join(__dirname, "../frontend/build");
app.use(express.static(buildPath));

// Serve static files from React build
if (fs.existsSync(buildPath)) {
    app.use(express.static(buildPath));
    
    // Use a more specific catch-all pattern instead of just '*'
    app.get(/^(?!\/api).*/, (req, res) => {
        res.sendFile(path.join(buildPath, "index.html"));
    });
} else {
    console.log("Frontend build folder not found. Serving API only.");
}

// Example protected route
app.get("/api/admin-data", authMiddleware(["admin"]), (req, res) => {
  res.json({ message: "Only admins can see this" });
});

app.get("/api/faculty-data", authMiddleware(["faculty"]), (req, res) => {
  res.json({ message: "Only faculty can see this" });
});

app.get("/api/student-data", authMiddleware(["student"]), (req, res) => {
  res.json({ message: "Only students can see this" });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}/ `));
