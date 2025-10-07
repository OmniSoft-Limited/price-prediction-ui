import * as z from 'zod';

export const contactSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().min(3).max(100),
    phone: z.optional(z.string().min(3).max(100)),
    message: z.string().min(3).max(100),
});