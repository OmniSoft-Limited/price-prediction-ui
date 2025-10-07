import * as z from 'zod';

export const responseSchema = z.object({
    prediction: z.number(),
    currency: z.string().min(3).max(100),
    curency_price: z.number(),
});

export type ResponseData = z.infer<typeof responseSchema>;

export function validateResponse(data: any) {
    const result = responseSchema.safeParse(data);
    if (result.success) {
        return result.data;
    } else {
        throw new Error(`Validation failed`);
    }
}