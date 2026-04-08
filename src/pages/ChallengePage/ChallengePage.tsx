import styles from "./ChallengePage.module.css";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";

const ChallengePage: React.FC = () => {
  return (
    <div className={styles.challengePage}>
      <ChallengeCard />
    </div>
  );
};

export default ChallengePage;
