import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import {
  Stack,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import { skillsData } from "../../utils/data";
import SkillsCard from "./SkillsCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Stack
      component="section"
      id="skills"
      mt={15}
      sx={{
        [theme.breakpoints.down("tablet")]: {
          mt: "3rem",
        },
      }}
    >
      <Typography
        variant="h4"
        alignSelf="center"
        mb={8}
        sx={{
          [theme.breakpoints.down("sm")]: {
            mb: "2rem",
          },
        }}
      >
        Skills
      </Typography>
      <Box>
        <AppBar position="static" color="">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="skills section"
          >
            {skillsData.map((item, index) => (
              <Tab label={item.title} key={index} />
            ))}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {skillsData.map((item, index) => (
            <TabPanel
              value={value}
              index={item.id}
              dir={theme.direction}
              key={index}
            >
              <SkillsCard data={item}></SkillsCard>
            </TabPanel>
          ))}
        </SwipeableViews>
      </Box>
    </Stack>
  );
}
