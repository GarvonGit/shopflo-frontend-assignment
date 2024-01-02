import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { format } from "date-fns";
import { useParams, useLocation, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const reserve = () => {
    navigate("/reserve");
  };
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 2,
          alignItems: "start", // Align items to the start of the container
          justifyContent: "center",
          pt: 8,
          pb: 8,
        }}
      >
        {/* Name and Description Section */}
        <Box gridColumn="span 12">
          <Typography gutterBottom variant="h4" align="left">
            {name}
          </Typography>
          <Typography variant="body1" align="left">
            {description}
          </Typography>
        </Box>

        {/* Image Section */}
        <Box gridColumn="span 12">
          <CardMedia
            component="img"
            image={imageURL}
            alt={name}
            sx={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
          />
        </Box>

        {/* Details Section */}
        <Box gridColumn="span 8">
          <CardContent>
            <Typography variant="body2" align="left" color="textSecondary">
              Listed by: {listedBy} | Zipcode: {zipcode}
            </Typography>
            <Typography variant="body2" align="left" color="textSecondary">
              Latitude: {latitude}, Longitude: {longitude}
            </Typography>
            <Typography variant="body2" align="left" color="textSecondary">
              Listed on: {formattedDate}
            </Typography>
            <Box mt={2}>
              <Chip
                label={status ? "Available" : "Not Available"}
                color={status ? "success" : "error"}
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Box>

        {/* Price and Reserve Button Section */}
        <Box gridColumn="span 4" sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Price: ${price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={reserve}
          >
            Reserve
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default DetailedViewPage;
