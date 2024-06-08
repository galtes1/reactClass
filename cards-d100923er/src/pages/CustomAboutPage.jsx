import React from "react";
import CustomPageHeader from "../components/CustomPageHeader";
import {
 Typography,
 Container,
 Paper,
 List,
 ListItem,
 ListItemText,
} from "@mui/material";

export default function CustomAboutPage() {
 return (
  <Container maxWidth="lg">
   <CustomPageHeader title="About Us" subtitle="welcome!" />
   <Container maxWidth="md" sx={{ mt: 4 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
     <Typography variant="h3" gutterBottom>
      About Our Business Cards Project
     </Typography>
     <Typography variant="body1" paragraph>
      Welcome to our business cards project! This platform allows anyone to sign
      up as a business and advertise their services completely free. You can
      provide your business name, phone number, expertise, and any additional
      information you think might be helpful for potential customers.
     </Typography>
     <Typography variant="body1" paragraph>
      Key Features:
     </Typography>
     <List>
      <ListItem>
       <ListItemText primary="Free to sign up" />
      </ListItem>
      <ListItem>
       <ListItemText primary="Advertise your business information" />
      </ListItem>
      <ListItem>
       <ListItemText primary="Share your phone number and expertise" />
      </ListItem>
      <ListItem>
       <ListItemText primary="Accessible to everyone worldwide" />
      </ListItem>
     </List>
     <Typography variant="body1" paragraph>
      Our mission is to provide an easy-to-use platform for businesses to reach
      out to a larger audience and for people to find the services they need. We
      hope you find this service valuable and easy to use.
     </Typography>
     <Typography variant="body1" paragraph>
      Thank you for choosing our platform!
     </Typography>
    </Paper>
   </Container>
  </Container>
 );
}
