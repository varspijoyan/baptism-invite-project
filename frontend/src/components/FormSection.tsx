import { useActionState, useEffect, useState } from "react";
import { sendInviteResponse } from "../services/auth/send";
import styles from "../styles/FormSection.module.css";

type ErrorState = {
  nameError?: string;
  surnameError?: string;
  isAcceptedError?: string;
  guestsAmountError?: string;
};

type FormState = {
  error: ErrorState;
  successMessage?: string;
};

const initialState: FormState = {
  error: {},
};

const FormSection = () => {
  const [showError, setShowError] = useState<ErrorState>({});
  const [state, action, isPending] = useActionState<FormState, FormData>(
    async (_prevState, formData) => {
      const name = formData.get("name") as string;
      const surname = formData.get("surname") as string;
      const isAccepted = formData.get("isAccepted") as string;
      const guestsAmount = formData.get("guestsAmount") as string;

      const error: ErrorState = {};
      const guestsAmountFormat = /^\d+$/;

      // Validation
      if (!name) error.nameError = "Խնդրում ենք մուտքագրել ձեր անունը";
      if (!surname) error.surnameError = "Խնդրում ենք մուտքագրել ձեր ազգանունը";
      if (!isAccepted)
        error.isAcceptedError =
          "Խնդրում ենք նշել ձեր մասնակցության ցանկությունը";
      if (!guestsAmount) {
        error.guestsAmountError = "Խնդրում ենք մուտքագրել հյուրերի քանակը";
      } else if (!guestsAmountFormat.test(guestsAmount)) {
        error.guestsAmountError = "Խնդրում ենք մուտքագրել թվային արժեք";
      }

      // If any validation error exists, return it
      if (Object.keys(error).length > 0) {
        return { error };
      }

      // Submit if valid
      try {
        const data = await sendInviteResponse({
          name,
          surname,
          isAccepted: isAccepted === "yes",
          guestsAmount,
        });

        if (data) {
          return { error: {}, successMessage: "Ուղարկված է" };
        }
      } catch (err) {
        return { error: { nameError: "Ուղարկման ժամանակ տեղի ունեցավ սխալ" } };
      }

      return { error };
    },
    initialState,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = `${e.target.name}Error` as keyof ErrorState;
    setShowError((prev) => ({ ...prev, [key]: "" }));
  };

  useEffect(() => {
    if (state?.error) {
      setShowError(state.error);
    }
  }, [state]);

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <h2>ԽՆԴՐՈՒՄ ԵՆՔ ՀԱՍՏԱՏԵԼ ՁԵՐ ՆԵՐԿԱՅՈՒԹՅՈՒՆԸ</h2>

        <div className={styles.formContainer}>
          <form action={action}>
            <input
              type="text"
              name="name"
              placeholder="Անուն"
              onChange={handleChange}
            />
            {showError.nameError && (
              <span className={styles.error}>{showError.nameError}</span>
            )}
            <input
              type="text"
              name="surname"
              placeholder="Ազգանուն"
              onChange={handleChange}
            />
            {showError.surnameError && (
              <span className={styles.error}>{showError.surnameError}</span>
            )}
            <div className={styles.radioInputs}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="isAccepted"
                  value="yes"
                  checked={false}
                  onChange={handleChange}
                />
                <span className={styles.customRadio}></span>
                Սիրով, կմասնակցենք
              </label>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="isAccepted"
                  value="no"
                  checked={false}
                  onChange={handleChange}
                />
                <span className={styles.customRadio}></span>
                Ցավոք, չենք կարող ներկա լինել
              </label>
            </div>
            {showError.isAcceptedError && (
              <span className={styles.error}>{showError.isAcceptedError}</span>
            )}
            <input
              type="text"
              name="guestsAmount"
              placeholder="Հյուրերի թիվ"
              onChange={handleChange}
            />
            {showError.guestsAmountError && (
              <span className={styles.error}>
                {showError.guestsAmountError}
              </span>
            )}
            <button type="submit" disabled={isPending}>
              {isPending ? "Ուղարկվում է…" : "Ուղարկել"}
            </button>
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
