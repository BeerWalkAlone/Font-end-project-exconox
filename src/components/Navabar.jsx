import React from "react";
import { Button, Box, Container } from "@mui/material/";
import { makeStyles } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import WidgetsIcon from "@mui/icons-material/Widgets";
const textStyle = {
  fontSize: 20,
  cursor: "pointer",
};

export default function Navabar() {
  const navigate = useNavigate();
  const handleNvigate = (path) => {
    navigate(path);
  };
  return (
    <Box sx={{background:' rgb(255,8,68)',
      background: 'linear-gradient(90deg, rgba(255,8,68,1) 0%, rgba(255,177,153,1) 50%)'}}>
      <Container maxWidth="xl">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box flex={1} display={"flex"}>
            <h1
              style={{ cursor: "pointer" }}
              onClick={() => handleNvigate("/")}
            >
              Econox
            </h1>
          </Box>

          <Box
            flex={1}
            display={{ sm: "flex", xs: "none" }}
            justifyContent={"space-between"}
          >
            <p style={textStyle} onClick={() => handleNvigate("/project")}>
              Project
            </p>
            <p style={textStyle} onClick={() => handleNvigate("/story")}>
              Story
            </p>
            <p style={textStyle} onClick={() => handleNvigate("/about-us")}>
              About Us
            </p>
            <p style={textStyle} onClick={() => handleNvigate("/contractus")}>
              Contract Us
            </p>
          </Box>

          <Box
            flex={1}
            display={{ sm: "flex", xs: "none" }}
            justifyContent={"flex-end"}
          >
            <Button variant="contained" color="success" sx={{ marginRight: 2 }}>
              Sign In
            </Button>
            <Button variant="contained">Sign Up</Button>
          </Box>
          <WidgetsIcon
            fontSize="large"
            sx={{ display: { md: "none", xs: "flex" } }}
          />
        </Box>
      </Container>
    </Box>
  );
}
