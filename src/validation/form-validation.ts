import * as z from 'zod';

export const formSchema = z.object({
    name: z.string().min(3).max(100),
    softwarename: z.string().min(3).max(100),
    data: z.object({
        softwareType: z.string().min(3).max(100),
        industryDomain: z.string().min(3).max(100),
        numUsers: z.string().min(3).max(100),
        targetMarket: z.string().min(3).max(100),
        adminDashboard: z.string().min(3).max(100),
        contentManagement: z.array(z.string()),
        extraFeatures: z.array(z.string()),
        thirdPartyService: z.array(z.string()),
        authentication: z.string().min(3).max(100),
        dataMigration: z.string().min(3).max(100),
        uiuxDesign: z.string().min(3).max(100),
        performance: z.string().min(3).max(100),
        security: z.string().min(3).max(100),
        availability: z.string().min(3).max(100),
        timeline_months: z.string().min(1).max(100),
    }),
    currency: z.string().min(3).max(100),
});

export type FormData = z.infer<typeof formSchema>;

export function validateForm(data: any) {
    const result = formSchema.safeParse(data);
    if (result.success) {
        return result.data;
    } else {
        throw new Error(`Validation failed`);
    }
}
