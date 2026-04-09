import { Box, Button } from "@mui/material";
import MyVersionCard from "../../components/MyVersionCard/MyVersionCard";
import { useNavigate } from "react-router-dom";
// import background from "../../assets/page-background.jpg";

const MyVersionPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        // backgroundImage: `url(${background})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
        width: "100vw",
        // backgroundColor: "rgb(235, 202, 80)",
        backgroundColor: "#00BFA6",
        // backgroundColor: "#1E1E1E",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Challenge
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 37px)",
        }}
      >
        <MyVersionCard />
      </Box>
    </Box>
  );
};

export default MyVersionPage;
