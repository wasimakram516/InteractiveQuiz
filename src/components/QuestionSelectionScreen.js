import React from 'react';
import { Box, Button, Typography, Grid, Paper } from '@mui/material';
import BackgroundImage from '../assets/Section/Background.webp'; 
function QuestionSelectionScreen({ quizData, selectQuestion }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        minHeight: '100vh',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '40px',
      }}
    >
      {/* Add a Paper component for a card-like appearance */}
      <Paper
        elevation={4}
        sx={{
          padding: '30px',
          borderRadius: '15px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight transparency for better readability
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Add a heading with improved typography */}
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          اختبار فريق بصمتنا غير التطوعي
        </Typography>

        {/* Use Grid layout for the buttons */}
        <Grid container spacing={2} justifyContent="center">
          {quizData.map((question, index) => (
            <Grid item xs={6} sm={6} key={index}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => selectQuestion(index)}
                sx={{
                  backgroundColor: 'primary.main', 
                  color: '#fff',
                  fontWeight: 'bold',
                  padding: '12px',
                  textTransform: 'none',
                  borderRadius: '8px',
                  justifyContent: 'center', // Align text to the left
                  paddingLeft: '20px', // Add padding to give space on the left
                  whiteSpace: 'normal', // Allow multiline text
                  textAlign: 'left', // Ensure text alignment to the left
                  '&:hover': {
                    backgroundColor: 'primary.light', // Hover effect
                  },
                }}
              >
                <Typography variant='h2'>
                {`${index + 1}`}
                </Typography>
                
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}

export default QuestionSelectionScreen;
