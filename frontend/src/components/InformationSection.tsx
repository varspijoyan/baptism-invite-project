import partyImage from "../assets/images/vector (1).svg";
import churchImage from "../assets/images/vector.svg";
import styles from "../styles/InformationSection.module.css";

const InformationSection = () => {
  return (
    <section className={styles.informationSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <p className={styles.title}>ԲԱՐԵԿԱՄՆԵՐ ԵՎ ԸՆԿԵՐՆԵՐ</p>
          <p className={styles.description}>
            Սիրով հրավիրում ենք ձեզ կիսելու մեզ հետ Վարսի, Մոնիկայի և Դավիթի
            Սուրբ Մկրտության լուսավոր օրը։
          </p>
          <div className={styles.churchPlace}>
            <img src={churchImage} alt="church image" />
            <div className={styles.textInfo}>
              <p>ՄԿՐՏՈՒԹՅՈՒՆ</p>
              <p>15:00</p>
              <p>Մարմաշենի վանք</p>
            </div>
          </div>
          <div className={styles.partyPlace}>
            <img src={partyImage} alt="party image" />
            <div className={styles.textInfo}>
              <p>ԽՆՋՈՒՅՔ</p>
              <p>17:00</p>
              <p>Վիկտորիա ռեստորան</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
