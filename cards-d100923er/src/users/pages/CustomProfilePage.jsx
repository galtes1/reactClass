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

export default function CustomProfilePage() {
  const { handleGetUser, error, isLoading } = useUsers();
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

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
      <Box>
        <Avatar src={userData.image.url} alt={userData.image.alt} />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Full Name:
                  <Typography>
                    {userData.name.first +
                      " " +
                      userData.name.middle +
                      " " +
                      userData.name.last}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  userID:<Typography>{userData._id}</Typography>
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
                  address:
                  <Typography>
                    {userData.address.street +
                      " " +
                      userData.address.houseNumber +
                      ", " +
                      userData.address.city +
                      ", " +
                      userData.address.country}
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
