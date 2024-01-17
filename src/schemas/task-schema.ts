import { z } from "zod";

export const taskInputSchema = z.object({
  title: z.string().min(1, { message: "Please enter a title" }),
  category: z.enum(["work", "shopping", "hobby", "other"], {
    description: "Category of the task",
    errorMap: () => ({ message: "Invalid category" }),
  }),
});

export type TaskInputType = z.infer<typeof taskInputSchema>;
