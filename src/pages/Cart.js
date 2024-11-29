import React from 'react';
import { useCart } from '../context/CartContext';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, TextField, Box } from '@mui/material';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalCost } = useCart();

  return (
    <Box sx={{ padding: '10rem', maxWidth: '900px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" color="textSecondary">
          Your cart is empty!
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="right">${item.price}</TableCell>
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
                      variant="outlined"
                      color="error"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {cart.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <Typography variant="h5">
            Total Cost: ${totalCost.toFixed(2)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
