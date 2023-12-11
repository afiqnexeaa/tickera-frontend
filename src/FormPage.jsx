import {
  Container,
  Typography,
  Stack,
  Box,
  Divider,
  Button,
} from "@mui/material";
import TicketHolderForm from "./components/TicketHolderForm";
import { createContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import BuyerForm from "./components/BuyerForm";
import { createAttendees } from "./api/route";
import { useParams } from "react-router-dom";

export const FormContext = createContext();

function FormPage() {
  const { num } = useParams();
  const [attendees, setAttendees] = useState(Number(num));

  const formik = useFormik({
    initialValues: {
      buyerInfo: {
        name: "",
        email: "",
        company: "",
        phone: "",
      },
      ticketHolder: Array(attendees)
        .fill(0)
        .map(() => ({
          name: "",
          email: "",
          company: "",
          phone: "",
        })),
    },

    validationSchema: Yup.object({
      buyerInfo: Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        company: Yup.string().required("Company name is required"),
        phone: Yup.number().required("Phone number is required"),
      }),

      ticketHolder: Yup.array().of(
        Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          company: Yup.string().required("Company name is required"),
          phone: Yup.number().required("Phone number is required"),
        })
      ),
    }),
    onSubmit: async (values) => {
      await createAttendees(values);
    },
  });

  const ticketForms = Array(attendees)
    .fill(0)
    .map((_, index) => <TicketHolderForm key={index} test={index} />);

  return (
    <FormContext.Provider value={{ attendees, setAttendees, formik }}>
      <Box bgcolor={"background.default"}>
        <Container
          sx={{
            backgroundColor: "background.default",
          }}
        >
          <Stack alignItems={"center"}>
            <Box
              component="img"
              sx={{
                height: {
                  xs: 100,
                  sm: 200,
                  md: 300,
                },
                marginBottom: 0,
              }}
              alt="Event Logo"
              src="/images/event-logo.png"
            />
          </Stack>
          <Divider
            sx={{
              width: "100%",
              margin: "auto",
              backgroundColor: "#feba12",
            }}
          />
          <Stack
            mt={10}
            pb={20}
            spacing={4}
            alignItems={"left"}
            sx={{
              marginLeft: {
                xs: "none",
                md: 15,
              },
              marginTop: 5,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
              }}
              color={"text.primary"}
            >
              Get your tickets now !
            </Typography>
            {/* <form onSubmit={formik.handleSubmit}> */}
            <BuyerForm />
            {/* <FormDefault /> */}
            {ticketForms}
            <Button
              variant="text"
              sx={{
                backgroundColor: "black",
                color: "white",
                "&.MuiButtonBase-root:hover": {
                  backgroundColor: "background.secondary",
                  color: "whitesmoke",
                },
              }}
              onClick={formik.handleSubmit}
            >
              Send tickets now
            </Button>
            {/* </form> */}
          </Stack>
        </Container>
      </Box>
    </FormContext.Provider>
  );
}

export default FormPage;
