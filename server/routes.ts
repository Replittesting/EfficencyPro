import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { zValidator } from "./utils";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", zValidator(
    z.object({
      name: z.string().min(2),
      email: z.string().email(),
      phone: z.string().optional(),
      subject: z.string().min(3),
      message: z.string().min(10),
    })
  ), async (req, res) => {
    try {
      const contactData = req.body;
      
      // Store the contact message
      const message = await storage.createContactMessage(contactData);
      
      return res.status(200).json({ 
        success: true, 
        message: "Contact message received successfully",
        data: message
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to save contact message" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}