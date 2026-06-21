import crossImg from "../assets/images/Cross.svg";
import familyPortrait from "../assets/images/family-portrait.png";
import styles from "../styles/MainSection.module.css";

const MainSection = () => {
  return (
    <main className={styles.mainSection}>
      <div className={styles.container}>
        <div className={styles.imageContent}>
          <div className={styles.imageCard}>
            <img src={familyPortrait} alt="Family portrait" />
          </div>
        </div>
        <div className={styles.textContent}>
          <img src={crossImg} alt="cross image" />
          <h2>Վարս</h2>
          <h2>Մոնիկա</h2>
          <h2>Դավիթ</h2>
          <p>22 • 07 • 2026</p>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
