import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateSchema, FormType } from "../../../lib/formSchema";

import InputText from "./input-text/InputText";
import SubmitButton from "./submit-btn/SubmitButton";

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
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-[1000px]">
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
      <SubmitButton />
    </form>
  );
};

export default Form;
