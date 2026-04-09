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
        fontFamily: "Figtree, sans-serif",
        width: 384,
        borderRadius: "24px",
        backgroundColor: "#00BFA6",
        padding: "16px 16px 0 16px",
        display: "flex",
        flexDirection: "column",

        /* Estado normal */
        boxShadow:
          "12px 12px 24px rgba(0,0,0,0.6), " +
          "-12px -12px 24px rgba(255,255,255,0.05)",

        /*  Transición SUAVE y controlada */
        transition: `
      box-shadow 650ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 280ms ease
    `,

        willChange: "box-shadow, transform",

        "&:hover": {
          transform: "translateY(-4px)",

          /* 👉 sombra aún externa, más profunda */
          boxShadow:
            "18px 18px 36px rgba(0,0,0,0.8), " +
            "-18px -18px 36px rgba(255,255,255,0.06)",
        },

        "&:active": {
          transform: "translateY(-1px)",

          /* ✅ inset SOLO en active (presionado) */
          boxShadow:
            "inset 6px 6px 12px rgba(0,0,0,0.7), " +
            "inset -6px -6px 12px rgba(255,255,255,0.06)",
        },
      }}
    >
      {/* IMAGE */}
      <CardMedia
        component="img"
        image={image}
        alt="Illustration article"
        sx={{
          backgroundColor: "#1E1E1E",
          height: 208,
          borderRadius: "18px",
          objectFit: "cover",

          boxShadow:
            "inset 3px 3px 6px rgba(0,0,0,0.7), " +
            "inset -3px -3px 6px rgba(255,255,255,0.08)",

          marginBottom: "16px",

          transition: "transform 400ms ease, filter 400ms ease",

          "&:hover": {
            transform: "scale(1.02)",
            filter: "brightness(1.03)",
          },
        }}
      />

      <CardContent
        sx={{
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: 0,
          // margin: 0,
        }}
      >
        {/* TAG */}
        <Typography
          sx={{
            fontFamily: "Figtree, sans-serif",
            width: "fit-content",
            padding: "4px 12px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.04em",
            backgroundColor: "#EBCA50",
            color: "#222",
            boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.39), -2px -2px 6px #00BFA6",
          }}
        >
          Learning
        </Typography>

        {/* DATE */}
        <Typography
          sx={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "13px",
            color: "rgba(0,0,0,0.5)",
            fontWeight: 500,
          }}
        >
          Published 4 Apr 2026
        </Typography>

        {/* TITLE */}
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "30px",
            color: "#111",
            cursor: "pointer",
            transition: "color 400ms ease",
            fontFamily: "Figtree, sans-serif",
            "&:hover": {
              color: "#EBCA50",
            },
          }}
        >
          <DecriptedText
            text="HTML & CSS foundations"
            speed={40}
            maxIterations={18}
            characters="ABCD1234!?@#"
            animateOn="hover"
          />
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            pr: "50px",
            fontSize: "15px",
            lineHeight: "24px",
            color: "rgba(0,0,0,0.6)",
            fontFamily: "Figtree, sans-serif",
          }}
        >
          These languages are the backbone of every website, defining structure
          and presentation.
        </Typography>

        {/* AUTHOR */}
        <Box
          sx={{
            // marginTop: "auto",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00BFA6",
              boxShadow:
                "inset 3px 3px 6px rgba(0,0,0,0.15), inset -3px -3px 6px #00BFA6",
            }}
          >
            <Avatar src={avatar} sx={{ width: 36, height: 36 }} />
          </Box>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#111",
              fontFamily: "Figtree, sans-serif",
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
