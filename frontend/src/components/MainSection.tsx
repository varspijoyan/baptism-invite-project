import crossImg from "../assets/images/Cross.svg";
import image1 from "../assets/images/50F8B581-8FD8-463C-8C70-0AB5D830AAA4 1.svg";
import image2 from "../assets/images/Снимок экрана 2026—05—01 в 20.02.53 1.svg";
import image3 from "../assets/images//IMG_6443 1.svg";
import styles from "../styles/MainSection.module.css";

const MainSection = () => {
  return (
    <main className={styles.mainSection}>
      <div className={styles.container}>
        <div className={styles.imageContent}>
          <div className={styles.image}>
            <div className={styles.topRow}>
              <div className={styles.imageCard}>
                <img src={image1} alt="Portrait of Monika" />
              </div>
              <div className={`${styles.imageCard} ${styles.imageCardShifted}`}>
                <img src={image2} alt="Portrait of Vars" />
              </div>
            </div>
            <div className={`${styles.imageCard} ${styles.bottomCard}`}>
              <img src={image3} alt="Portrait of Davit" />
            </div>
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
