import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config(); // <-- MUST be at the very top

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configure your email transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // <-- correct
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // consider using environment variables
  },
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender info
      to: process.env.EMAIL_TARG, // where you want to receive messages
      subject: `Új üzenet a weboldalról: ${name}`,
      text: message,
      html: `<p><strong>Feladó:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    console.log("Email sent:", name, email);
    res.json({ success: true });
  } catch (err) {
    console.error("Email sending error:", err);
    res.status(500).json({ success: false });
  }
});

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // use path.dirname

// Serve static Vite build
const clientBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientBuildPath));

// React SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
