import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { format } from "date-fns";
import { useParams, useLocation, json } from "react-router-dom";

const DetailedViewPage = () => {
  //   const { id } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get("name");
  const description = query.get("description");
  const listedBy = query.get("listedBy");
  const latitude = query.get("latitude");

  const longitude = query.get("longitude");
  const imageURL = query.get("imageURL");
  const price = query.get("price");
  const listedOn = query.get("listedOn");
  const zipcode = query.get("zipcode");
  const status = query.get("status");
  const formattedDate = format(new Date(listedOn), "PPP");
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Card
          raised
          sx={{
            maxWidth: 600,
            boxShadow: 3,
            ":hover": { boxShadow: 10 },
            m: 2,
          }}
        >
          <CardMedia component="img" height="300" image={imageURL} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              {name}
            </Typography>
            <Typography variant="body1" align="center">
              {description}
            </Typography>
            <Typography
              variant="body2"
              align="center"
              color="textSecondary"
              sx={{ my: 2 }}
            >
              Listed by: {listedBy} | Zipcode: {zipcode}
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
              Latitude: {latitude}, Longitude: {longitude}
            </Typography>
            <Typography variant="h6" align="center" sx={{ my: 2 }}>
              Price: ${price}
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary">
              Listed on: {formattedDate}
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={2}
            >
              <Chip
                label={status ? "Available" : "Not Available"}
                color={status ? "success" : "error"}
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default DetailedViewPage;
