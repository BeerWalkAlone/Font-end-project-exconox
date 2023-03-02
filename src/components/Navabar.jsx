import React from "react";
import { Button, Box, Container } from "@mui/material/";
import { makeStyles } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import WidgetsIcon from "@mui/icons-material/Widgets";
const textStyle = {
  fontSize: 20,
  cursor: "pointer",
};

export default function Navabar(props) {
  const navigate = useNavigate();
  const handleNvigate = (path) => {
    navigate(path);
  };

  const handleLogin = () =>{
    props.setopenSignInDiag(true)
  }
  const handleLoginUp = () =>{
    props.setopensignUpDiag(true)
  }

  return (
    <Box sx={{
      background: ' rgb(0,139,139)',
      background: 'radial-gradient(circle, rgba(1,114,175,1) 20%, rgba(116,254,189,1) 100%)'
    }}>
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
            <Button variant="contained" color="success" sx={{ marginRight: 2 }} onClick={handleLogin}>
              Sign In
            </Button>
            <Button variant="contained" onClick={handleLoginUp}>Sign Up</Button>
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
