import { useEffect, useState } from "react";
import api from "../services/api.js";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function DenseTable() {
  const [users, setUsers] = useState([]);

useEffect(() => {
  api.get("users").then((response) => {
    console.log("motor", response.data);
    setUsers(response.data);
  });
}, []);

  return (
    <TableContainer component={Paper} sx={{position:"relative", top:'280px', left:'670px' , width:'650px'}} >
      <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Names</TableCell>
            <TableCell align="right">E-mails</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((users) => (
            <TableRow
              key={users.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {users.name}
              </TableCell>
              <TableCell align="right">{users.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}