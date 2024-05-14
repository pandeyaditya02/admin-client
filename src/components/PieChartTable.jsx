import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { pieData } from "../data/piechart";

const EmployeeTable = () => {
  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Color</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Employee</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pieData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <FiberManualRecordIcon style={{ color: item.color }} />
              </TableCell>
              <TableCell>{item.label}</TableCell>
              <TableCell>{item.value} Employees</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
