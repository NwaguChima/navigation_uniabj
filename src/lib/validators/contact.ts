import { z } from "zod";

export const ContactValidator = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

export type ContactRequest = z.infer<typeof ContactValidator>;
