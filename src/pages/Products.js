import React from 'react';
import { useCart } from '../context/CartContext';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Container, Box } from '@mui/material';

const products = [
  { id: 1, name: 'Summer New Round Neck Short sleeved T-shirt Top Clothes for Fashion Brand', price: 100, description: 'High-quality item', image: 'https://i.postimg.cc/dVQZqssj/1.webp' },
  { id: 2, name: 'Curren Beige Analog Men Round Dial Leather Band Casual Watch Black ', price: 200, description: 'Durable and reliable', image: 'https://i.postimg.cc/BQ74K45g/12.webp' },
  { id: 3, name: 'New Trendy Mens Sports Shoes Cushion Running Sneakers Outdoor', price: 150, description: 'Affordable and efficient', image: 'https://i.postimg.cc/FRKQR6fq/8.webp' },
  { id: 4, name: 'IELGY teen summer new short-sleeved male T-shirt student wild round neck print half-sleeved', price: 300, description: 'High-quality item', image: 'https://i.postimg.cc/k5Y7x9d9/2.webp' },
  { id: 5, name: 'Long Sleeve Crochet Knit Top Summer Beach Bikini Cover Up Crop Pullover Wool', price: 460, description: 'Durable and reliable', image: 'https://i.postimg.cc/sX5039m8/5.webp' },
  { id: 6, name: 'Stainless Steel Quartz Analog Chain Casual Watch for Men Women Black White', price: 280, description: 'Affordable and efficient', image: 'https://i.postimg.cc/YS619nc1/10.webp' },
  { id: 7, name: 'Stay Fashionable and Functional with Comfortable Cargo Pants for Women', price: 520, description: 'High-quality item', image: 'https://i.postimg.cc/qRYMdrmQ/6.webp' },
  { id: 8, name: 'Yfashion Men Cotton T-shirt Summer Short Sleeve Loose Bottoming Shirt Fashion', price: 680, description: 'Durable and reliable', image: 'https://i.postimg.cc/8kMjVJS6/4.webp' },
  { id: 9, name: 'I Just Baked You Some Cakes Mother Cat Print T Shirts Men Fashion Summer Hip Hop', price: 350, description: 'Affordable and efficient', image: 'https://i.postimg.cc/zvtQQD0X/3.webp' },
];

const Products = () => {
  const { addToCart } = useCart();

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://i.postimg.cc/YCZBD0Zn/e.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        py: 4,
      }}
    >
      <Container sx={{ bgcolor: 'transparent', padding: 6, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom textAlign="center" color='black' fontWeight={600}>
          Our Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 345,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: 150,
                    objectFit: 'contain',
                    padding: 2,
                  }}
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addToCart(product)}
                    fullWidth
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
