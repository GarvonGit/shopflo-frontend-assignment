import React from "react";
import { Container, Box, Typography, Button, Paper } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ReservationSuccessPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CheckCircleOutlineIcon sx={{ fontSize: 60, color: "success.main" }} />
        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
          Reservation Successful!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Your booking has been confirmed. Check your email for the reservation
          details.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" href="/">
            Go to Home
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ReservationSuccessPage;
