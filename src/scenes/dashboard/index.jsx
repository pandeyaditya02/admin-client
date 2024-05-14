import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import PieChart from "@/components/PieChart";
import PieChartTable from "@/components/PieChartTable";
import LineChart from "@/components/LineChart";

import { pieData } from "@/data/piechart";
import { lineData } from "@/data/lineChart";

const Dashboard = () => {
  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}

        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <Box
            style={{ display: "flex" }}
            sx={{ width: "100%", height: "100%" }}
          >
            <Box sx={{ width: "65%", height: "100%" }}>
              <PieChart data={pieData} />
            </Box>
            <Box sx={{ mt: 6, width: "75%", height: "100%" }}>
              <PieChartTable />
            </Box>
          </Box>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Departments
          </Typography>
          <LineChart data={lineData} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
