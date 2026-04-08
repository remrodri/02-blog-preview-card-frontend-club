import styles from "./Challenge.module.css";
import image from "../../assets/illustration-article.svg";
import avatar from "../../assets/image-avatar.webp";

const ChallengeCard: React.FC = () => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__header}>
        <img
          src={image}
          alt="Illustration article"
          className={styles.Card__header__image}
        />
        <div className={styles.Card__header__badge}>
          <span className={styles.Card__header__badge__text}>Learning</span>
          <span className={styles.Card__header__badge__date}>
            Published 21 Dec 2023
          </span>
        </div>
        <div className={styles.Card__header__title}>
          <h1 className={styles.Card__header__title__text}>
            HTML & CSS foundations
          </h1>
        </div>
      </div>
      <div className={styles.Card__body}>
        <p className={styles.Card__body__text}>
          These languages are the backbone of every website, defining structure
          and presentation.
        </p>
      </div>
      <div className={styles.Card__footer}>
        <img src={avatar} alt="Avatar" className={styles.Card__footer__image} />
        <span className={styles.Card__footer__text}>Greg Hooper</span>
      </div>
    </div>
  );
};

export default ChallengeCard;
