import styles from "../styles/FormSection.module.css";

const FormSection = () => {
  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <h2>ԽՆԴՐՈՒՄ ԵՆՔ ՀԱՍՏԱՏԵԼ ՁԵՐ ՆԵՐԿԱՅՈՒԹՅՈՒՆԸ</h2>
        <div className={styles.formContainer}>
          <form>
            <input type="text" placeholder="Անուն" />
            <input type="text" placeholder="Ազգանուն" />
            <div className={styles.radioInputs}>
              <div className={styles.radioInputs}>
                <label className={styles.radioOption}>
                  <input type="radio" name="attendance" value="yes" />
                  <span className={styles.customRadio}></span>
                  Սիրով, կմասնակցենք
                </label>
                <label className={styles.radioOption}>
                  <input type="radio" name="attendance" value="no" />
                  <span className={styles.customRadio}></span>
                  Ցավոք, չենք կարող ներկա լինել
                </label>
              </div>
            </div>
            <input type="text" placeholder="Հյուրերի թիվ" />
            <button type="submit">Ուղարկել</button>
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
