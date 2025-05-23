import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const client_id = process.env.DISCORD_CLIENT_ID!;
const client_secret = process.env.DISCORD_CLIENT_SECRET!;
const redirect_uri = process.env.DISCORD_REDIRECT_URI!;

// Redirect to Discord
router.get("/auth/discord", (_req, res) => {
  const discordUrl = `https://discord.com/api/oauth2/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&response_type=code&scope=identify`;
  res.redirect(discordUrl);
});

// Callback after Discord login
router.get("/auth/callback/discord", async (req, res) => {
  const code = req.query.code as string;

  try {
    const tokenResponse = await axios.post(
      "https://discord.com/api/oauth2/token",
      new URLSearchParams({
        client_id,
        client_secret,
        code,
        grant_type: "authorization_code",
        redirect_uri,
        scope: "identify",
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    const userResponse = await axios.get("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${tokenResponse.data.access_token}`,
      },
    });

    res.json(userResponse.data); // Replace this with your session or user logic
  } catch (err) {
    console.error(err);
    res.status(500).send("Authentication failed");
  }
});

export default router;
