import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ListTask from "./ListTask";

export default function Task() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <div className="mt-5">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          style={{
            borderRadius: "25px",
            boxShadow: "none",
            background: "#f6f6f6",
            marginBottom: "60px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandCircleDownIcon style={{ color: "#64cd98" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "100%", flexShrink: 0 }}>
              Tareas
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ListTask />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
