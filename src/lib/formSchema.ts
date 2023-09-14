import z from "zod";

export const validateSchema = z.object({
  name: z.string().nonempty("名前の入力は必須です"),
  email: z
    .string()
    .nonempty("Eメールの入力は必須です")
    .email("正しいメールアドレスを入力してください"),
  company: z.string(),
  contact: z.string().min(40, "40文字以上入力してください"),
});

export type FormType = z.infer<typeof validateSchema>;
