import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateSchema, FormType } from "../../lib/formSchema";

import InputText from "./input-text/InputText";
import SubmitButton from "./submit-btn/SubmitButton";
import TextArea from "./text-area/TextArea";
import ContactText from "./contact-text/ContactText";
import PageTop from "../atoms/page-top/PageTop";
import useStore from "../../store";

const Form = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const { showModal } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(validateSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormType> = async (data: FormType) => {
    setBusy(true);
    showModal({ show: true, message: "送信中です...", completed: false });
    reset();
    try {
      const res = await fetch("/api/mail/", {
        body: JSON.stringify(data),
        method: "POST",
      });
      if (res.status === 200) {
        setCompleted(true);
        showModal({ show: true, message: "送信完了しました", completed: true });
      }
    } catch (err: any) {
      showModal({ show: false });
      alert(
        "フォームの送信に失敗しました。お手数ですが、X(Twitter)のLeafFieldまでご連絡頂けたら幸いです。",
      );
    }
  };

  return (
    <>
      <PageTop title="Contact" key={"Contact"} />
      <ContactText />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-[60px] max-w-[1000px]"
      >
        <InputText
          register={register}
          registerType="name"
          label="お名前"
          errorMessage={errors.name?.message}
          busy={busy}
        />
        <InputText
          register={register}
          registerType="email"
          label="Eメール"
          errorMessage={errors.email?.message}
          busy={busy}
        />
        <InputText
          register={register}
          registerType="company"
          label="会社名(任意)"
          errorMessage={errors.company?.message}
          busy={busy}
        />
        <TextArea
          register={register}
          errorMessage={errors.contact?.message}
          busy={busy}
        />
        <SubmitButton completed={completed} busy={busy} />
      </form>
    </>
  );
};

export default Form;
