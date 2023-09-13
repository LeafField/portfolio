import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { FormType } from "../../lib/formSchema";

const user = process.env.MAIL_ACCOUNT;
const pass = process.env.MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.mail.yahoo.co.jp",
  auth: {
    user,
    pass,
  },
});

const mail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST")
    return res.status(404).json({ message: "無効なアクセスです" });

  const formData: FormType = JSON.parse(req.body);

  try {
    await transporter.sendMail({
      from: user,
      to: user,
      subject: "ポートフォリオサイトからの送信",
      html: `
      <p>${formData.name}様からの問い合わせ</p>
      ${formData.company && `<p>会社名は「${formData.company}」</p>`}
      <p>メールアドレスは「${formData.email}」</p>
      <p>問い合わせ内容</p>
      <p>${formData.contact}</p>
      `,
    });
    return res
      .status(200)
      .json({ message: "フォーム内容の送信に成功しました" });
  } catch (err: any) {
    return res
      .status(500)
      .json({ message: "フォーム内容の送信に失敗しました" });
  }
};

export default mail;
