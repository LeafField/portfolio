import z from "zod";

export const validateSchema = z.object({
  name: z.string().nonempty("名前の入力は必須です"),
  email: z
    .string()
    .email("正しいアドレスを入力してください")
    .nonempty("Eメールの入力は必須です"),
  company: z.string(),
});

export type FormType = z.infer<typeof validateSchema>;
