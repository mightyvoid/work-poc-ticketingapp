import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { TextField, Typography, Link, Button, Grid,Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function Navbar() {
  const theme = createTheme({
    Typography: {
      fontFamily: "roboto",
    },
  });

  return (
    <nav>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Typography
            variant="h5"
            align="right"
            color={"white"}
            paddingTop={1}
          >
            Movies
          </Typography>
        </Grid>
        <Grid item xs={8}>
        <Box display="flex" justifyContent="flex-end" paddingRight={2} paddingTop={1}>
          <Button>Logout</Button>
          </Box> 
        </Grid>
      </Grid>
    </nav>
  );
}
