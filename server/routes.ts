import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";// server/routes.ts
import { fetch } from 'undici'  // Node.js v18+ or install `undici`
import { Request, Response } from 'express' // or adapt to your framework

const clientId = process.env.DISCORD_CLIENT_ID!
const clientSecret = process.env.DISCORD_CLIENT_SECRET!
const redirectUri = 'https://your-domain.com/api/auth/discord/callback'

export function registerRoutes(app: any) {
  app.get('/api/auth/discord/callback', async (req: Request, res: Response) => {
    const code = req.query.code as string
    if (!code) return res.status(400).send('Missing code')

    try {
      // Exchange code for access token
      const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: 'authorization_code',
          code,
          redirect_uri: redirectUri,
        }),
      })
      const tokenData = await tokenRes.json()

      const userRes = await fetch('https://discord.com/api/users/@me', {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      })
      const userData = await userRes.json()

      // TODO: Save user/session/token etc.
      return res.redirect(`/dashboard?user=${encodeURIComponent(userData.username)}`)
    } catch (err) {
      console.error('OAuth error:', err)
      return res.status(500).send('OAuth failed')
    }
  })
}


export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  // Discord OAuth callback
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactMessageSchema.parse(req.body);
      
      // Store the contact message
      const savedMessage = await storage.saveContactMessage(validatedData);
      
      // Return success response
      res.status(200).json({
        message: "Contact message received successfully",
        id: savedMessage.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details 
        });
      } else {
        res.status(500).json({ 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
