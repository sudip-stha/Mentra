import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Mentra", 
  name: "Mentra",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
