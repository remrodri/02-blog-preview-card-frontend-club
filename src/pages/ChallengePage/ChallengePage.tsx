import styles from "./ChallengePage.module.css";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChallengePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.challengePage}>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/my-version")}
        >
          My Version
        </Button>
      </Box>
      <div className={styles.cardContainer}>
        <ChallengeCard />
      </div>
    </div>
  );
};

export default ChallengePage;
