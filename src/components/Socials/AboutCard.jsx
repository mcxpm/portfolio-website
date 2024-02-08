import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { skillsData } from "../../utils/data";

export default function SkillTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        {skillsData.map((item, index) => (
          <Tab label={item.title} key={index} />
        ))}
      </Tabs>
    </Box>
  );
}
