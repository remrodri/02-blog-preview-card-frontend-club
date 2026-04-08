import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import image from "../../assets/illustration-article.svg";
import avatar from "../../assets/avatar.jpeg";
import DecriptedText from "../../component/DecryptedText.jsx";

const MyVersionCard: React.FC = () => {
  return (
    <Card
      sx={{
        width: 384,
        height: 522,
        backgroundColor: "#00BFA6",
        borderRadius: "20px",
        // boxShadow: "8px 8px 0px 0px hsl(0, 0%, 0%)",
        boxShadow: "10px 10px 9px #039c88ff, -6px -6px 15px #0ee7caff",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #00BFA6",

        "&:hover": {
          boxShadow: "14px 14px 22px #039c88ff, -10px -10px 22px #0ee7caff",
          // cursor: "pointer",
          transform: "translateY(-1px)",
          transition: "all 0.3s ease-in-out",
          // border: "1px solid #00ffddff",
        },
      }}
    >
      {/* <Box
        sx={{
          width: 336,
          height: 208,
          backgroundColor: "#EBCA50",
          borderRadius: "20px",
          // boxShadow: "8px 8px 0px 0px hsl(0, 0%, 0%)",
          boxShadow: "8px 8px 9px #c8ac44, -8px -8px 9px #ffe85c",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          // border: "1px solid #f3ce47ff",
        }}
      >
        <img src={image} alt="Illustration article" style={{ width: "100%", height: "100%" }} />
      </Box> */}
      <CardMedia
        component="img"
        image={image}
        alt="Illustration article"
        sx={{
          width: 336,
          height: 208,
          backgroundColor: "#dddddd",
          borderRadius: "20px",
          // boxShadow: "8px 8px 0px 0px hsl(0, 0%, 0%)",
          boxShadow: "9px 9px 10px #039c88ff, -9px -9px 10px #0ee7caff",
          // padding: "8px",
          margin: "8px",
          display: "flex",
          flexDirection: "column",
          objectFit: "cover",
          objectPosition: "center",
          // border: "1px solid #f3ce47ff",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          margin: "12px 0 12px 8px",
          padding: "0",
        }}
      >
        <Typography
          fontFamily="Figtree"
          sx={{
            width: 82,
            height: 28,
            backgroundColor: "#EBCA50",
            borderRadius: "4px",
            fontSize: "14px",
            fontWeight: "800",
            color: "#000000",
            textAlign: "center",
            lineHeight: "28px",
            boxShadow: "4px 4px 10px #039c88ff, -4px -4px 10px #0ee7caff",
          }}
        >
          Learning
        </Typography>
        <Typography
          fontFamily="Figtree"
          sx={{
            width: 160,
            height: 28,
            fontSize: "14px",
            fontWeight: "600",
            color: "#000000",
            textAlign: "left",
            lineHeight: "28px",
          }}
        >
          Published 4 Apr 2026
        </Typography>

        <Typography
          fontFamily="Figtree"
          sx={{
            fontSize: "26px",
            fontWeight: 600,
            lineHeight: "32px",
            color: "#000",
            transition: "color .2s",
            cursor: "pointer",
            "&:hover": {
              color: "#EBCA50",
            },
          }}
        >
          <DecriptedText
            text="HTML & CSS foundations"
            speed={50}
            maxIterations={20}
            characters="ABCD1234!?"
            // className="revealed"
            // parentClassName="all-letters"
            // encryptedClassName="encrypted"
            animateOn="hover"
          />
        </Typography>

        <Typography
          sx={{
            width: 336,
            // height: 28,
            fontSize: "16px",
            fontWeight: "500",
            color: "hsl(0, 0%, 42%)",
            // textAlign: "center",
            lineHeight: "24px",
            letterSpacing: "0.5px",
          }}
        >
          These languages are the backbone of every website, defining structure
          and presentation.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              backgroundColor: "#00BFA6",
              boxShadow: "4px 4px 10px #039c88ff, -4px -4px 10px #0ee7caff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              border: "1px solid #00BFA6",
              "&:hover": {
                // transform: "translateY(-4px)",
                transition: "all 0.3s ease-in-out",
                // border: "1px solid #00ffddff",
                boxShadow: "4px 4px 10px #017464ff, -4px -4px 10px #00ffddff",
                cursor: "pointer",
              },
            }}
          >
            <Avatar src={avatar} alt="Avatar" />
          </Box>
          <Typography
            sx={{
              // width: 100,
              height: 28,
              fontSize: "14px",
              fontWeight: "600",
              color: "#000000",
              // textAlign: "center",
              lineHeight: "28px",
            }}
          >
            Rembert Rodrigo
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MyVersionCard;
