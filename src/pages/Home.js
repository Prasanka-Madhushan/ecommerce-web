// import React from 'react';
// import { Box, Typography, Grid, Container, Card, CardContent, Avatar } from '@mui/material';
// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// // import ThumbUpIcon from '@mui/icons-material/ThumbUp';

// const Home = () => {
//   return (
//     <Box>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           minHeight: '100vh',
//           backgroundImage: 'url(https://i.postimg.cc/QMv0DbCZ/b.jpg)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           textAlign: 'center',
//           color: 'white',
//         }}
//       >
//         <Container>
//           <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
//             Welcome to Your Shopping Heaven
//           </Typography>
//           <Typography variant="h5">
//             Explore the best deals, shop your favorite brands, and experience seamless online shopping!
//           </Typography>
//         </Container>
//       </Box>

//       {/* Features Section */}
//       <Box sx={{ py: 8, bgcolor: 'grey.100' }}>
//         <Container>
//           <Typography variant="h4" textAlign="center" gutterBottom>
//             Why Shop With Us?
//           </Typography>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <Card
//                 sx={{
//                   textAlign: 'center',
//                   padding: 3,
//                   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//                   },
//                 }}
//               >
//                 <Typography variant="h6" gutterBottom>
//                   Wide Product Range
//                 </Typography>
//                 <Typography>
//                   Choose from thousands of products across various categories at unbeatable prices.
//                 </Typography>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Card
//                 sx={{
//                   textAlign: 'center',
//                   padding: 3,
//                   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//                   },
//                 }}
//               >
//                 <Typography variant="h6" gutterBottom>
//                   Best Offers
//                 </Typography>
//                 <Typography>
//                   Enjoy exclusive discounts and deals every day on your favorite items and make the life easy.
//                 </Typography>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Card
//                 sx={{
//                   textAlign: 'center',
//                   padding: 3,
//                   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//                   },
//                 }}
//               >
//                 <Typography variant="h6" gutterBottom>
//                   Trusted by Millions
//                 </Typography>
//                 <Typography>
//                   Our commitment to quality and service has earned us the trust of countless customers.
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Testimonials Section */}
//       <Box sx={{ py: 5 }}>
//         <Container>
//           <Typography variant="h4" textAlign="center" gutterBottom>
//             What Our Customers Say
//           </Typography>
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={4}>
//               <Card
//                 sx={{
//                   textAlign: 'center',
//                   padding: 3,
//                   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//                   },
//                 }}
//               >
//                 <Avatar
//                   src="https://i.pravatar.cc/100?img=3"
//                   alt="Customer"
//                   sx={{ width: 80, height: 80, margin: '0 auto' }}
//                 />
//                 <Typography variant="h6" gutterBottom>
//                   John Doe
//                 </Typography>
//                 <Typography>
//                   "Amazing shopping experience! The interface is user-friendly, and the offers are unbeatable."
//                 </Typography>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Card
//                 sx={{
//                   textAlign: 'center',
//                   padding: 3,
//                   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//                   },
//                 }}
//               >
//                 <Avatar
//                   src="https://i.pravatar.cc/100?img=5"
//                   alt="Customer"
//                   sx={{ width: 80, height: 80, margin: '0 auto' }}
//                 />
//                 <Typography variant="h6" gutterBottom>
//                   Jane Smith
//                 </Typography>
//                 <Typography>
//                   "The quality of products is outstanding, and customer service is top-notch. Highly recommended!"
//                 </Typography>
//               </Card>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Card
//                 sx={{
//                   textAlign: 'center',
//                   padding: 3,
//                   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                   '&:hover': {
//                     transform: 'scale(1.05)',
//                     boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
//                   },
//                 }}
//               >
//                 <Avatar
//                   src="https://i.pravatar.cc/100?img=8"
//                   alt="Customer"
//                   sx={{ width: 80, height: 80, margin: '0 auto' }}
//                 />
//                 <Typography variant="h6" gutterBottom>
//                   Emily Johnson
//                 </Typography>
//                 <Typography>
//                   "Fast delivery and great packaging! I'm very satisfied with my shopping experience here."
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Grid, Container, Card, CardContent, Avatar } from '@mui/material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          backgroundImage: 'url(https://i.postimg.cc/QMv0DbCZ/b.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0)',
            padding: 4,
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h3" gutterBottom color="white" fontWeight={600}>
            Welcome to Our Shopping Mart
          </Typography>
          <Typography variant="body1" gutterBottom color="white">
            The ultimate destination for all your shopping needs! Browse our products and experience seamless shopping.
          </Typography>
          <Grid container spacing={2} justifyContent="center" mt={2}>
            <Grid item>
              <Button
                component={Link}
                to="/login"
                variant="contained"
                color="primary"
                sx={{ padding: '10px 20px' }}
              >
                Login
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/register"
                variant="contained"
                color="secondary"
                sx={{ padding: '10px 20px' }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 5, bgcolor: 'grey.100' }}>
        <Container>
          <Typography variant="h4" textAlign="center" gutterBottom>
            Why Shop With Us?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  textAlign: 'center',
                  padding: 3,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {/* <ShoppingCartIcon color="primary" sx={{ fontSize: 60 }} /> */}
                <Typography variant="h6" gutterBottom>
                  Wide Product Range
                </Typography>
                <Typography>
                  Choose from thousands of products across various categories at unbeatable prices.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  textAlign: 'center',
                  padding: 3,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {/* <LocalOfferIcon color="secondary" sx={{ fontSize: 60 }} /> */}
                <Typography variant="h6" gutterBottom>
                  Best Offers
                </Typography>
                <Typography>
                  Enjoy exclusive discounts and deals every day on your favorite items and make the life easy.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  textAlign: 'center',
                  padding: 3,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                {/* <ThumbUpIcon color="success" sx={{ fontSize: 60 }} /> */}
                <Typography variant="h6" gutterBottom>
                  Trusted by Millions
                </Typography>
                <Typography>
                  Our commitment to quality and service has earned us the trust of countless customers.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 5 }}>
        <Container>
          <Typography variant="h4" textAlign="center" gutterBottom>
            What Our Customers Say
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  textAlign: 'center',
                  padding: 3,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Avatar
                  src="https://i.pravatar.cc/100?img=3"
                  alt="Customer"
                  sx={{ width: 80, height: 80, margin: '0 auto' }}
                />
                <Typography variant="h6" gutterBottom>
                  John Doe
                </Typography>
                <Typography>
                  "Amazing shopping experience! The interface is user-friendly, and the offers are unbeatable."
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  textAlign: 'center',
                  padding: 3,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Avatar
                  src="https://i.pravatar.cc/100?img=5"
                  alt="Customer"
                  sx={{ width: 80, height: 80, margin: '0 auto' }}
                />
                <Typography variant="h6" gutterBottom>
                  Jane Smith
                </Typography>
                <Typography>
                  "The quality of products is outstanding, and customer service is top-notch. Highly recommended!"
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                sx={{
                  textAlign: 'center',
                  padding: 3,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <Avatar
                  src="https://i.pravatar.cc/100?img=8"
                  alt="Customer"
                  sx={{ width: 80, height: 80, margin: '0 auto' }}
                />
                <Typography variant="h6" gutterBottom>
                  Emily Johnson
                </Typography>
                <Typography>
                  "Fast delivery and great packaging! I'm very satisfied with my shopping experience here."
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

