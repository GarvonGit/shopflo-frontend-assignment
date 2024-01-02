import React, { useState, useEffect } from "react";
import ListingCard from "./ListComponent";
import ListingPagination from "./pageComponent";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Map from "../map";
const HomePage = () => {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get(
          `https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=${currentPage}&limit=10`
        );
        setListings(response.data);
        // Update total pages based on the API response
        setTotalPages(response.totalPages); // Adjust based on the actual API response
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchListings();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const center = {
    lat: 59.95,
    lng: 30.33,
  };
  const zoom = 11;
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            TripAdvisor
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "50%", height: "70vh", p: 2 }}>
          <Map center={center} zoom={zoom} listings={listings} />
        </Box>

        <Box sx={{ width: "70%", height: "70vh", p: 2 }}>
          <Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
            {listings
              .slice((currentPage - 1) * 4, currentPage * 4)
              .map((listing) => (
                <Grid item key={listing.id}>
                  <ListingCard {...listing} />
                </Grid>
              ))}
          </Grid>

          <ListingPagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
