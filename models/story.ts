import { z } from "zod";

const StorySchema = z
  .object({
    title: z.string().min(3).max(50),
    id: z.string().optional(),
    createdBy: z.string(),
    created: z.date(),
    updatedBy: z.string(),
    updated: z.date(),
    short: z.string().optional(),
    body: z.array(z.string()),
  })
  .strict();

type Story = z.infer<typeof StorySchema>;
export type { Story };
export { StorySchema };
