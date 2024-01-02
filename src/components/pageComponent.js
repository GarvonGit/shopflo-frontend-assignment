import React from "react";
import Pagination from "@mui/material/Pagination";

const ListingPagination = ({ count, page, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      sx={{ mt: 2, alignItems: "center" }}
    />
  );
};

export default ListingPagination;
