import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TableBody,
  Button,
} from "@mui/material";

export default function CustomCountries() {
  const [countriesList, setCountriesList] = useState([]);

  //
  const getAllCountries = async () => {
    try {
      setCountriesList([]);
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const data = response.data;
      setCountriesList(data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Button onClick={getAllCountries}>refresh</Button>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <Typography variant="h6">Name</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Official name</Typography>
            </TableCell>
            <TableCell align="center">
              <Typography variant="h6">Continent</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countriesList.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3}>
                <Typography>Loading...</Typography>
              </TableCell>
            </TableRow>
          ) : (
            countriesList.map((country, index) => (
              <TableRow key={index}>
                <TableCell align="center">{country.name.common}</TableCell>
                <TableCell align="center">{country.name.official}</TableCell>
                <TableCell align="center">{country.region}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
