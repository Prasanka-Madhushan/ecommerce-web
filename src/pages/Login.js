import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container, Card, CardContent, Snackbar, Alert } from '@mui/material';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(false);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      login(values.email); // Simulate login
      setSuccessMessage(true); // Show success feedback
      setTimeout(() => {
        navigate('/products');
      }, 1200);
    },
  });

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://i.postimg.cc/QMv0DbCZ/b.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            padding: 4,
            borderRadius: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          <CardContent>
            <Typography variant="h4" textAlign="center" gutterBottom>
              Login
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ marginBottom: 3 }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Box>
              <Box sx={{ marginBottom: 3 }}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: 1, fontSize: '1rem', fontWeight: 600 }}
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
      {/* Success Snackbar */}
      <Snackbar
        open={successMessage}
        autoHideDuration={2000}
        onClose={() => setSuccessMessage(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSuccessMessage(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Login Successful!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
