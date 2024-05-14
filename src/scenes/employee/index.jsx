import { Box, useTheme, IconButton, InputBase } from "@mui/material";
import Header from "@/components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { Search } from "@mui/icons-material";
import FlexBetween from "@/components/FlexBetween";
import { useEffect, useState } from "react";
// import {fetchEmployees,fetchDepartments} from "../../api"

const data = [
  {
    employeeId: 4,
    name: "string",
    email: "string",
    dateOfBirth: "2024-05-01",
    country: {
      id: 0,
      name: "India",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 1,
      city: "string",
      localAddress: "string",
      currentAddress: true,
      pinCode: 0,
      state: "string",
    },
    managerId: 6,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 1,
        activeFrom: "2024-05-02T16:03:02.31082",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 6,
    name: "string",
    email: "stringsas",
    dateOfBirth: "2024-05-01",
    country: {
      id: 0,
      name: "India",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 2,
      city: "string",
      localAddress: "string",
      currentAddress: true,
      pinCode: 0,
      state: "string",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 1,
        activeFrom: "2024-05-02T16:03:48.40163",
        activeTill: "2024-05-02T16:06:13.470479",
      },
      {
        departmentId: 3,
        activeFrom: "2024-05-02T16:06:13.470479",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 8,
    name: "Harkunwar Singh",
    email: "hs@gmail.com",
    dateOfBirth: "2001-10-07",
    country: {
      id: 0,
      name: "India",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 3,
      city: "New Delhi",
      localAddress: "123, main road",
      currentAddress: true,
      pinCode: 110027,
      state: "Delhi",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [],
  },
  {
    employeeId: 9,
    name: "Harkunwar Singh",
    email: "harkunwar@gmail.com",
    dateOfBirth: "2001-10-07",
    country: {
      id: 0,
      name: "India",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 52,
      city: "New Delhi",
      localAddress: "123, main road",
      currentAddress: true,
      pinCode: 110027,
      state: "Delhi",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [],
  },
  {
    employeeId: 18,
    name: "string",
    email: "string2",
    dateOfBirth: "2024-05-01",
    country: {
      id: 0,
      name: "India",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 53,
      city: "string",
      localAddress: "string",
      currentAddress: true,
      pinCode: 0,
      state: "string",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 2,
        activeFrom: "2024-05-02T16:05:24.244318",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 19,
    name: "user1",
    email: "string1@email.com",
    dateOfBirth: "2024-05-01",
    country: {
      id: 0,
      name: "India",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 54,
      city: "string",
      localAddress: "string",
      currentAddress: true,
      pinCode: 0,
      state: "string",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 1,
        activeFrom: "2024-05-02T16:04:27.101041",
        activeTill: "2024-05-02T16:05:30.196164",
      },
      {
        departmentId: 2,
        activeFrom: "2024-05-02T16:05:30.21987",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 20,
    name: "user",
    email: "string3@email.com",
    dateOfBirth: "2001-10-07",
    country: {
      id: 0,
      name: "India",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 55,
      city: "string",
      localAddress: "string",
      currentAddress: true,
      pinCode: 0,
      state: "string",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 2,
        activeFrom: "2024-05-02T16:05:37.130243",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 22,
    name: "Harkunwar Singh",
    email: "harkusingh@deloitte.com",
    dateOfBirth: "2001-10-07",
    country: {
      id: 0,
      name: "India",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 56,
      city: "New Delhi",
      localAddress: "sdhjkshd",
      currentAddress: true,
      pinCode: 110027,
      state: "Delhi",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 1,
        activeFrom: "2024-05-02T16:04:34.014952",
        activeTill: "2024-05-02T16:07:24.014353",
      },
      {
        departmentId: 4,
        activeFrom: "2024-05-02T16:07:24.014353",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 23,
    name: "ABC",
    email: "abc@def.com",
    dateOfBirth: "2000-11-09",
    country: {
      id: 0,
      name: "India",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 57,
      city: "Bengaluru",
      localAddress: "pqr st.",
      currentAddress: true,
      pinCode: 560103,
      state: "Karnataka",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [],
  },
  {
    employeeId: 25,
    name: "xyz",
    email: "dsd@123.com",
    dateOfBirth: "2000-09-11",
    country: {
      id: 0,
      name: "India",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 58,
      city: "New Delhi",
      localAddress: "jhdd",
      currentAddress: true,
      pinCode: 110064,
      state: "Delhi",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 3,
        activeFrom: "2024-05-02T16:06:23.572404",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 27,
    name: "LeBron James",
    email: "kingjames23@gmail.com",
    dateOfBirth: "1985-02-06",
    country: {
      id: 1,
      name: "USA",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 60,
      city: "Akron",
      localAddress: "Downtown, Akron",
      currentAddress: true,
      pinCode: 40030,
      state: "Ohio",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [],
  },
  {
    employeeId: 28,
    name: "Babar Azam",
    email: "bb56@gmail.com",
    dateOfBirth: "1996-05-02",
    country: {
      id: 9,
      name: "Pakistan",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 61,
      city: "Lahore",
      localAddress: "Pind",
      currentAddress: true,
      pinCode: 786,
      state: "Punjab",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [],
  },
  {
    employeeId: 29,
    name: "Takefusa Kubo",
    email: "tk11@gmail.com",
    dateOfBirth: "1999-03-11",
    country: {
      id: 2,
      name: "Japan",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 62,
      city: "Osaka",
      localAddress: "Nara",
      currentAddress: true,
      pinCode: 38293,
      state: "Osaka Perfecture",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 1,
        activeFrom: "2024-05-02T16:04:39.503569",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 30,
    name: "Naruto Uzumaki",
    email: "naruto11@gmail.com",
    dateOfBirth: "1999-10-11",
    country: {
      id: 2,
      name: "Japan",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 63,
      city: "Kyoto",
      localAddress: "Leaf Village",
      currentAddress: true,
      pinCode: 213234,
      state: "Kyoto Perfecture",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 4,
        activeFrom: "2024-05-02T16:07:02.549743",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 31,
    name: "Bhutanese Guy",
    email: "bhutan33@gmail.com",
    dateOfBirth: "1996-10-10",
    country: {
      id: 7,
      name: "Bhutan",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 64,
      city: "Thimphu",
      localAddress: "Dzong Street",
      currentAddress: true,
      pinCode: 21323,
      state: "Thimphu",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 4,
        activeFrom: "2024-05-02T16:07:12.463178",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 32,
    name: "Swaran",
    email: "swaranbhoomi@thai.com",
    dateOfBirth: "2001-01-10",
    country: {
      id: 6,
      name: "Thailand",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 65,
      city: "Krabi Islands",
      localAddress: "Beach avenue",
      currentAddress: true,
      pinCode: 323,
      state: "Krabi",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 4,
        activeFrom: "2024-05-02T16:06:53.704703",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 33,
    name: "Test User",
    email: "testuser@ymail.com",
    dateOfBirth: "1997-07-19",
    country: {
      id: 8,
      name: "Russia",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 66,
      city: "St. Petersburg",
      localAddress: "idk street",
      currentAddress: true,
      pinCode: 2326,
      state: "Russian state",
    },
    managerId: null,
    userRole: "USER",
    employeeDepartmentHistory: [
      {
        departmentId: 3,
        activeFrom: "2024-05-02T16:06:30.58665",
        activeTill: "2024-05-02T16:07:18.344424",
      },
      {
        departmentId: 4,
        activeFrom: "2024-05-02T16:07:18.344995",
        activeTill: null,
      },
    ],
  },
  {
    employeeId: 26,
    name: "Main User",
    email: "mainuser@gmail.com",
    dateOfBirth: "2001-10-07",
    country: {
      id: 0,
      name: "India",
    },
    role: "FULL_TIME",
    employeeAddress: {
      addressId: 59,
      city: "New Delhi",
      localAddress: "1234, User Road",
      currentAddress: true,
      pinCode: 110027,
      state: "Delhi",
    },
    managerId: null,
    userRole: "ADMIN",
    employeeDepartmentHistory: [],
  },
];

const departments = [
  {
    departmentName: "Marketing",
    departmentId: 1,
  },
  {
    departmentName: "Sales",
    departmentId: 2,
  },
  {
    departmentName: "Human Resources",
    departmentId: 3,
  },
  {
    departmentName: "Product Development",
    departmentId: 4,
  },
  {
    departmentName: "Promotions",
    departmentId: 5,
  },
];

const Customers = () => {

  // useEffect(() => {
  //   const data = fetchEmployees();
  //   const departments = fetchDepartments();
  // }, []);

  const theme = useTheme();

  const [displayData, setDisplayData] = useState(data);

  const columns = [
    {
      field: "name",
      headerName: "Employee Name",
      flex: 1,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "managerId",
      headerName: "Manager",
      flex: 1,
      valueGetter: (manager) => {
        const managerData = data.find(
          (employee) => employee.employeeId === manager
        );
        return managerData ? managerData.name : "Manager Not Found";
      },
    },

    {
      field: "employeeDepartmentHistory",
      headerName: "Current Department",
      flex: 1,
      valueGetter: (params) => {
        const departmentId = params[0]?.departmentId || "NA";

        const department = departments.find(
          (dept) => dept.departmentId === departmentId
        );
        return department ? department.departmentName : "Department Not Found";
      },
    },
  ];

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    const searchTermLowerCase = searchTerm.toLowerCase().trim();
 
    // console.log(searchTermLowerCase);
    const newData = data.filter((employee) =>
      employee.name.toLowerCase().startsWith(searchTermLowerCase)
    );
    setDisplayData(newData);
    // console.log(newData);
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Employees" subtitle="List of Employees" />
      <FlexBetween
        backgroundColor={theme.palette.background.alt}
        borderRadius="9px"
        gap="3rem"
        mt={3}
        p="0.1rem 1.5rem"
        width="40%"
      >
        <InputBase
          style={{ width: "100%" }}
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <IconButton>
          <Search />
        </IconButton>
      </FlexBetween>
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          getRowId={(row) => row.employeeId}
          rows={displayData || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Customers;
