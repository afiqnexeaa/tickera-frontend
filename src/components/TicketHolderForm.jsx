import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Form from "./Form";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useContext } from "react";
import { FormContext } from "../FormPage";

const TicketHolderForm = (props) => {
  const theme = useTheme();
  const { formik } = useContext(FormContext);

  const { test } = props;

  return (
    <div key={test}>
      {/* {key} */}
      <Typography sx={{ fontWeight: 800 }} color={"text.primary"}>
        Ticker holder {test} information
      </Typography>
      <Stack mt={3}>
        <Accordion
          disableGutters
          sx={{
            backgroundColor:
              theme.palette.mode === "light"
                ? "whitesmoke"
                : "background.secondary",
            boxShadow: "none",
            borderTop: 0,
          }}
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Information</Typography>

            {formik.errors["ticketHolder"] && (
              <CancelIcon
                sx={{
                  position: "absolute",
                  right: 50,
                  color: "red",
                }}
              />
            )}
            {!Object.values(formik.values["ticketHolder"]).some(
              (i) => i === ""
            ) &&
              !formik.errors["ticketHolder"] && (
                <CheckCircleIcon
                  sx={{
                    position: "absolute",
                    right: 50,
                    color: "green",
                  }}
                />
              )}
          </AccordionSummary>
          <AccordionDetails>
            <Stack direction={"column"} gap={5} justifyContent={"flex-start"}>
              <Form type={"ticketHolder"} index={test} />
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </div>
  );
};

export default TicketHolderForm;
