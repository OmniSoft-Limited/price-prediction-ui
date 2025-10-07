import * as z from 'zod';

export const requestSchema = z.object({
    name: z.string().min(3).max(100),
    softwarename: z.string().min(3).max(100),
    data: z.array(z.number()),
    currency: z.string().min(3).max(100),
});

export type RequestData = z.infer<typeof requestSchema>;

export function validateRequest(data: any) {
    const result = requestSchema.safeParse(data);
    if (result.success) {
        return result.data;
    } else {
        throw new Error(`Validation failed`);
    }
}