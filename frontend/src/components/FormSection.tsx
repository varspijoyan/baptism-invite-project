import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSendInviteResponseMutation } from "../services/auth/api";
import styles from "../styles/FormSection.module.css";
import type { AcceptInviteRequestData } from "../types";

const FormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AcceptInviteRequestData>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [sendInviteResponse] = useSendInviteResponseMutation();
  const onSubmit = async (data: AcceptInviteRequestData) => {
    try {
      await sendInviteResponse(data).unwrap();
      alert("Ձեր պատասխանն ուղարկվել է հաջողությամբ!");
      reset();
      setIsSuccess(true);
    } catch (error) {
      console.error("Error sending invite response:", error);
      alert("Ինչ-որ բան սխալ է տեղի ունեցել, խնդրում ենք փորձել կրկին:");
      setIsSuccess(false);
    }
  };
  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <h2>ԽՆԴՐՈՒՄ ԵՆՔ ՀԱՍՏԱՏԵԼ ՁԵՐ ՆԵՐԿԱՅՈՒԹՅՈՒՆԸ</h2>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Անուն"
              {...register("name", {
                required: "Խնդրում ենք մուտքագրել ձեր անունը",
              })}
            />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
            <input
              type="text"
              placeholder="Ազգանուն"
              {...register("surname", {
                required: "Խնդրում ենք մուտքագրել ձեր ազգանունը",
              })}
            />
            {errors.surname && (
              <p className={styles.error}>{errors.surname.message}</p>
            )}
            <div className={styles.radioInputs}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  value="true"
                  {...register("isAccepted", {
                    required: "Խնդրում ենք նշել ձեր մասնակցությունը",
                    setValueAs: (v) => v === "true"
                  })}
                />
                <span className={styles.customRadio}></span>
                Սիրով, կմասնակցենք
              </label>

              <label className={styles.radioOption}>
                <input
                  type="radio"
                  value="false"
                  {...register("isAccepted", {
                    required: "Խնդրում ենք նշել ձեր մասնակցությունը",
                    setValueAs: (v) => v === "true",
                  })}
                />
                <span className={styles.customRadio}></span>
                Ցավոք, չենք կարող ներկա լինել
              </label>
            </div>
            {errors.isAccepted && (
              <p className={styles.error}>{errors.isAccepted.message}</p>
            )}
            {errors.isAccepted && (
              <p className={styles.error}>{errors.isAccepted.message}</p>
            )}
            <input
              type="text"
              placeholder="Հյուրերի թիվ"
              {...register("guestsAmount", {
                required: "Խնդրում ենք մուտքագրել հյուրերի քանակը",
                pattern: {
                  value: /^\d+$/,
                  message: "Խնդրում ենք մուտքագրել միայն թվեր",
                },
              })}
            />
            {errors.guestsAmount && (
              <p className={styles.error}>{errors.guestsAmount.message}</p>
            )}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Հաստատվում է" : "Հաստատել"}
            </button>
            {isSuccess && (
              <p className={styles.success}>
                Ձեր պատասխանն ուղարկվել է հաջողությամբ!
              </p>
            )}
          </form>
        </div>
        <div className={styles.note}>
          <p>Սիրով կսպասենք ձեզ</p>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
