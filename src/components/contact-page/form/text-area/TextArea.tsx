import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormType } from "../../../../lib/formSchema";

type Props = {
  register: UseFormRegister<FormType>;
  errorMessage?: string | undefined;
};

const TextArea: FC<Props> = ({ errorMessage, register }) => {
  return (
    <div
      className={`mx-auto  border-y border-t-mainColor px-4 ${
        errorMessage ? "pb-[22px]" : "pb-[38px]"
      } `}
    >
      <div className="flex max-w-[1000px] flex-col items-center justify-start gap-2  pt-[46px] sm:flex-row">
        <label
          className="block w-full cursor-pointer text-left text-xl sm:w-[250px] sm:text-right"
          htmlFor="contact"
        >
          お問い合わせ内容:
        </label>
        <textarea
          className="block min-h-[300px] w-full flex-1 resize-none border border-mainColor/70 p-1 text-xl outline-none focus:border-mainColor sm:h-[500px]"
          id="contact"
          {...register("contact")}
        ></textarea>
      </div>
      <p
        data-testid="textAreaError"
        className="pt-2 text-base leading-4 text-red-700 sm:ml-[255px]"
      >
        {errorMessage}
      </p>
    </div>
  );
};

export default TextArea;
