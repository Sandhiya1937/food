import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Cart = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mt: 10, p: 4, boxShadow: 3, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h4">Your Cart</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>View and manage your selected items before checkout.</Typography>
      </Box>
    </Container>
  );
};

export default Cart;
