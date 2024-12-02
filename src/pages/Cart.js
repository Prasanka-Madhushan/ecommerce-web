import React from 'react';
import { useCart } from '../context/CartContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, TextField, Box, Divider, Card, CardContent, } from '@mui/material';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalCost } = useCart();

  return (
    <Box sx={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom textAlign="center" fontWeight={600}>
        Your Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Card
          sx={{
            textAlign: 'center',
            padding: 4,
            marginTop: 4,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="h6" color="textSecondary">
            Your cart is empty!
          </Typography>
        </Card>
      ) : (
        <>
          <TableContainer component={Paper} sx={{ marginTop: 4, borderRadius: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'primary.main' }}>
                  <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Product</TableCell>
                  <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                    Price
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                    Quantity
                  </TableCell>
                  <TableCell align="right" sx={{ color: 'white', fontWeight: 'bold' }}>
                    Total
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <Typography variant="body1" fontWeight={600}>
                        {item.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                    <TableCell align="center">
                      <TextField
                        type="number"
                        size="small"
                        variant="outlined"
                        inputProps={{ min: 1 }}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, +e.target.value)}
                        sx={{ width: '60px' }}
                      />
                    </TableCell>
                    <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                        sx={{ textTransform: 'none' }}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{ textTransform: 'none', padding: '10px 20px' }}
              onClick={() => alert('Continue Shopping!')} // Replace with your shopping logic
            >
              Continue Shopping
            </Button>
            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Total Cost: ${totalCost.toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="success"
                sx={{ textTransform: 'none', padding: '10px 20px', marginTop: 1 }}
                onClick={() => alert('Proceed to Checkout!')} // Replace with checkout logic
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
