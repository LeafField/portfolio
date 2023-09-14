import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateSchema, FormType } from "../../lib/formSchema";
import axios from "axios";

import InputText from "./input-text/InputText";
import SubmitButton from "./submit-btn/SubmitButton";
import TextArea from "./text-area/TextArea";
import ContactText from "./contact-text/ContactText";
import PageTop from "../atoms/page-top/PageTop";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(validateSchema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<FormType> = async (data: FormType) => {
    try {
      await axios.post("/api/mail", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (err: any) {
      throw new Error(err);
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
        />
        <InputText
          register={register}
          registerType="email"
          label="Eメール"
          errorMessage={errors.email?.message}
        />
        <InputText
          register={register}
          registerType="company"
          label="会社名(任意)"
          errorMessage={errors.company?.message}
        />
        <TextArea register={register} errorMessage={errors.contact?.message} />
        <SubmitButton busy={false} />
      </form>
    </>
  );
};

export default Form;
