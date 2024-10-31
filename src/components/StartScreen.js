import React from "react";
import { Box, Button,  } from "@mui/material";
import Start from "../assets/Intro/START.webp";
import interactiveQuiz from "../assets/Intro/InteractiveQuiz.webp"
import "../App.css"; // Import global styles

function StartScreen({ startGame }) {
  return (
    <Box className="start-screen">
      <img src={interactiveQuiz} alt="Interactive Quiz" className="game-title"/>

      {/* Start Button */}
      <Button
        variant="startButton"
        className="start-button"
        onClick={startGame}
      >
        <img src={Start} alt="Start Button" />
      </Button>
    </Box>
  );
}

export default StartScreen;
