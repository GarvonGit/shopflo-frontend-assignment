import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const ListingCard = ({
  name,
  description,
  listedBy,
  latitude,
  longitude,
  imageURL,
  price,
  listedOn,
  zipcode,
  status,
  id,
}) => {
  const navigate = useNavigate();
  const handleViewMore = () => {
    console.log("View More");
    navigate(
      "/listing/:" +
        id +
        "?name=" +
        name +
        "&description=" +
        description +
        "&listedBy=" +
        listedBy +
        "&latitude=" +
        latitude +
        "&longitude=" +
        longitude +
        "&imageURL=" +
        imageURL +
        "&price=" +
        price +
        "&listedOn=" +
        listedOn +
        "&zipcode=" +
        zipcode +
        "&status=" +
        status
    );
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={imageURL} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1">Price: {price}</Typography>
      </CardContent>
      <Button size="small" onClick={handleViewMore}>
        View More
      </Button>
    </Card>
  );
};

export default ListingCard;
