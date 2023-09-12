import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormType } from "../../../../lib/formSchema";

type Props = {
  register: UseFormRegister<FormType>;
  registerType: keyof FormType;
  label: string;
  errorMessage?: string | undefined;
};

const InputText: FC<Props> = ({
  register,
  registerType,
  label,
  errorMessage,
}) => {
  return (
    <div
      className={`mx-auto  border-t border-t-mainColor px-4 ${
        errorMessage ? "pb-[22px]" : "pb-[38px]"
      } `}
    >
      <div className="flex max-w-[1000px] flex-col items-center justify-start gap-2  pt-[46px] sm:flex-row">
        <label
          className="block w-full cursor-pointer text-left text-xl sm:w-[250px] sm:text-right "
          htmlFor={registerType}
        >
          {label}:
        </label>
        <input
          className={`block w-full flex-1 border border-mainColor/70 p-1 text-xl outline-none focus:border-mainColor ${
            registerType === "name" && "mr-auto max-w-[300px] "
          }`}
          type="text"
          id={registerType}
          {...register(registerType)}
        />
      </div>
      <p className="pt-2 text-base leading-4 text-red-700 sm:ml-[255px]">
        {errorMessage}
      </p>
    </div>
  );
};

export default InputText;
