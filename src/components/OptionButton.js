import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function OptionButton({ option, handleAnswer, optionLetter }) {
  // Define color styles for each option letter
  const optionStyles = {
    1: { backgroundColor: "#87B353", color: "#FFFFFF" },
    2: { backgroundColor: "#F58220", color: "#FFFFFF" },
    3: { backgroundColor: "#394E29", color: "#FFFFFF" },
    4: { backgroundColor: "#FAC090", color: "#FFFFFF" },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: ["60px","70px","80px"],
          height: ["60px","70px","80px"],
          margin: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          onClick={() => handleAnswer(option)} // Trigger answer handler
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: optionStyles[optionLetter]?.backgroundColor,
            color: optionStyles[optionLetter]?.color,
            borderRadius: '50%', // Circular button
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0, // No extra padding within the button
            '&:hover': {
              backgroundColor: optionStyles[optionLetter]?.color, // Optional hover effect
              color: optionStyles[optionLetter]?.backgroundColor,
            },
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            {optionLetter}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default OptionButton;
