import { Box } from "@mui/material";
import MyVersionCard from "../../components/MyVersionCard/MyVersionCard";
// import background from "../../assets/page-background.jpg";

const MyVersionPage = () => {
  return (
    <Box
      sx={{
        // backgroundImage: `url(${background})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        // backgroundColor: "rgb(235, 202, 80)",
        backgroundColor: "#00BFA6",
        // backgroundColor: "#1E1E1E",
      }}
    >
      <MyVersionCard />
    </Box>
  );
};

export default MyVersionPage;
