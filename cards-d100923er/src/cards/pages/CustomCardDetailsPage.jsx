import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import CustomPageHeader from "../../components/CustomPageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import CustomSpinner from "../../components/CustomSpinner";
import CustomError from "../../components/CustomError";
import { Box, Paper, Grid, CardMedia } from "@mui/material";

export default function CustomCardDetailsPage() {
 const { cardId } = useParams();
 const { value, getCardById } = useCards();
 const { card, error, isLoading } = value;

 useEffect(() => {
  getCardById(cardId);
 }, [cardId, getCardById]);

 if (isLoading) return <CustomSpinner />;
 if (error) return <CustomError errorMessage={error} />;
 if (card) {
  return (
   <>
    {/*           */}
    <CustomPageHeader
     title="Card Details"
     subtitle="this is the card you chose"
    />

    <Container maxWidth="md" sx={{ mt: 4 }}>
     <Paper elevation={3} sx={{ p: 4 }}>
      <Grid container spacing={2}>
       <Grid item xs={12} md={4}>
        <CardMedia
         component="img"
         height="200"
         image={card.image.url}
         alt={card.image.alt}
        />
       </Grid>
       <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom>
         {card.title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
         {card.subtitle}
        </Typography>
        <Typography variant="body1" paragraph>
         {card.description.split("\\n").map((line, index) => (
          <span key={index}>
           {line}
           <br />
          </span>
         ))}
        </Typography>
        <Box sx={{ mt: 2 }}>
         <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
           <Typography variant="body1">
            <strong>Id:</strong> {card._id}
           </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
           <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
            <strong>Phone:</strong> {card.phone}
           </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
           <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
            <strong>Email:</strong> {card.email}
           </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
           <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
            <strong>Website:</strong>{" "}
            <a
             href={`https://${card.web}`}
             target="_blank"
             rel="noopener noreferrer"
            >
             {card.web}
            </a>
           </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
           <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
            <strong>Address:</strong>{" "}
            {`${card.address.street} ${card.address.houseNumber}, ${card.address.city}, ${card.address.state}, ${card.address.country}, ${card.address.zip}`}
           </Typography>
          </Grid>
          <Grid item xs={12}>
           <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
            <strong>Business Number:</strong> {card.bizNumber}
           </Typography>
          </Grid>
          <Grid item xs={12}>
           <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
            <strong>Created At:</strong>{" "}
            {new Date(card.createdAt).toLocaleDateString()}
           </Typography>
          </Grid>
         </Grid>
        </Box>
       </Grid>
      </Grid>
     </Paper>
    </Container>
   </>
  );
 }
 return null;
}
