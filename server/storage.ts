import { contactMessages, type ContactMessage, type InsertContactMessage } from "@shared/schema";

// Storage interface with CRUD methods
export interface IStorage {
  saveContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessageById(id: number): Promise<ContactMessage | undefined>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, ContactMessage>;
  private currentId: number;

  constructor() {
    this.messages = new Map();
    this.currentId = 1;
  }

  async saveContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentId++;
    const timestamp = new Date();
    const contactMessage: ContactMessage = { 
      ...message, 
      id,
      createdAt: timestamp 
    };
    
    this.messages.set(id, contactMessage);
    console.log(`Contact message saved: ${id}`);
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.messages.values());
  }

  async getContactMessageById(id: number): Promise<ContactMessage | undefined> {
    return this.messages.get(id);
  }
}

// Export a singleton instance
export const storage = new MemStorage();
