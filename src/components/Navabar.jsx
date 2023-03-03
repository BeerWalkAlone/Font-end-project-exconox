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
      backgroundImage:'radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,195,229,1) 0%, rgba(5,71,105,1) 90% );'
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
            <Button variant="contained" sx={{
              marginRight: 2,
              backgroundImage: 'linear-gradient(to right, #348F50 0%, #56B4D3  50%, #348F50  100%);',
              padding: '15px 45px;',
                       
              borderRadius: '10px;',
             
            }} onClick={handleLogin}>
              Sign In
            </Button>
            <Button variant="contained" sx={{
              marginRight: 2,
              backgroundImage: 'linear-gradient(to right, #1D2B64 0%, #F8CDDA  100%, #1D2B64  100%);',
              padding: '15px 45px;',
              
              borderRadius: '10px;',
              }}
              onClick={handleLoginUp}>Sign Up</Button>
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
