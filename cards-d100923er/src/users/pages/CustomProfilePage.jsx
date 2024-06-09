import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/localStorageService";
import ROUTES from "../../routes/routesModel";
import CustomErrorPage from "../../pages/CustomErrorPage";
import CustomSpinner from "../../components/CustomSpinner";
import algoMethods from "../../forms/utils/algoMethods";

export default function CustomProfilePage() {
  const { handleGetUser, error, isLoading } = useUsers();
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const { makeFirstLetterCapital, makeAllLettersCapital } = algoMethods();

  useEffect(() => {
    const user = getUser();
    if (!user) {
      return navigate(ROUTES.ROOT);
    }
    const getData = async () => {
      setUserData(await handleGetUser(user._id));
    };
    getData();
  }, [handleGetUser, navigate]);

  if (error) return <CustomErrorPage errorMessage={error} />;
  if (isLoading) return <CustomSpinner />;
  if (userData) {
    return (
      <Box display="flex" alignItems="center" p={2}>
        <Box mr={4}>
          <Avatar
            src={userData.image.url}
            alt={userData.image.alt}
            sx={{ width: 250, height: 250 }}
          />
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name:
                  <Typography>
                    {makeFirstLetterCapital(userData.name.first) +
                      " " +
                      makeFirstLetterCapital(userData.name.last)}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  User ID:<Typography>{userData._id}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Email:<Typography>{userData.email}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Phone:<Typography>{userData.phone}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Address:
                  <Typography>
                    {userData.address.houseNumber +
                      " " +
                      makeFirstLetterCapital(userData.address.street) +
                      ", " +
                      makeFirstLetterCapital(userData.address.city) +
                      ", " +
                      makeAllLettersCapital(userData.address.country)}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    );
  }
}
