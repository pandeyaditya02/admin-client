import React, { useEffect, useState } from "react";
import FlexBetween from "@/components/FlexBetween";
import Header from "@/components/Header";
import AddDepartment from "@/components/AddDepartment";
import {
  Box,
  Typography,
  useTheme,
  IconButton,
  InputBase,
} from "@mui/material";
import { Search } from "@mui/icons-material";

const Dashboard = () => {
  const theme = useTheme();
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    setDepartment([
      "Engineering",
      "Design",
      "Product Management",
      "Digital Marketing ",
      "Allocation Managemnent",
      "Sales Management",
      " HR Managemnent ",
    ]);
  }, []);

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Departments" subtitle="All Departments at one place" />
      </FlexBetween>

      <FlexBetween>
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="9px"
          gap="3rem"
          mt={3}
          p="0.1rem 1.5rem"
          width="24%"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>

        <Box>
          <AddDepartment
            department={department}
            setDepartment={setDepartment}
          />
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gridAutoRows="100px"
        gap="20px"
      >
        {department.map((item) => (
          <Box
            backgroundColor={theme.palette.background.alt}
            p="1rem"
            borderRadius="0.55rem"
          >
            <Typography
              sx={{ fontSize: 14 }}
              color={theme.palette.secondary[100]}
              key={item}
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
