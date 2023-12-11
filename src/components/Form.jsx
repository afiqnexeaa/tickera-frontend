import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import * as Yup from "yup";
import { FormContext } from "../FormPage";

const FormDefault = (props) => {
  const theme = useTheme();
  const { formik } = useContext(FormContext);
  const { type, index } = props;
  const { attendees } = useContext(FormContext);

  const CustomTypography = styled(Typography)(() => ({
    fontSize: "14px",
    "&:after": {
      content: '"*"',
      color: "red",
      marginLeft: 5,
    },
  }));

  return (
    <FormControl>
      {/* <form onSubmit={formik.handleSubmit}> */}
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <CustomTypography color={"text.primary"}>Name</CustomTypography>
            {type === "buyerInfo" ? (
              <TextField
                type="text"
                name={`${type}.name`}
                placeholder="Name"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "whitesmoke"
                      : "background.secondary",

                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                  "& .MuiFormHelperText-root": {
                    position: "absolute",
                    top: 50,
                  },
                  "& .MuiInputBase-input": {
                    height: 15,
                  },
                }}
                value={formik.values[type]?.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors?.[type]?.name}
                helperText={formik.errors?.[type]?.name}
              />
            ) : (
              <TextField
                type="text"
                name={`${type}[${index}].name`}
                placeholder="Name"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "whitesmoke"
                      : "background.secondary",

                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                  "& .MuiFormHelperText-root": {
                    position: "absolute",
                    top: 50,
                  },
                  "& .MuiInputBase-input": {
                    height: 15,
                  },
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[type]?.[index]?.name || ""}
                error={formik.errors?.[type]?.[index]?.name}
                helperText={formik.errors?.[type]?.[index]?.name}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <CustomTypography color={"text.primary"}>Email</CustomTypography>
            {type === "buyerInfo" ? (
              <TextField
                type="text"
                name={`${type}.email`}
                placeholder="Email"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "whitesmoke"
                      : "background.secondary",

                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                  "& .MuiFormHelperText-root": {
                    position: "absolute",
                    top: 50,
                  },
                  "& .MuiInputBase-input": {
                    height: 15,
                  },
                }}
                value={formik.values[type]?.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors?.[type]?.email}
                helperText={formik.errors?.[type]?.email}
              />
            ) : (
              <TextField
                type="text"
                name={`${type}[${index}].email`}
                placeholder="Email"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "whitesmoke"
                      : "background.secondary",

                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                  "& .MuiFormHelperText-root": {
                    position: "absolute",
                    top: 50,
                  },
                  "& .MuiInputBase-input": {
                    height: 15,
                  },
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[type]?.[index]?.email || ""}
                error={formik.errors?.[type]?.[index]?.email}
                helperText={formik.errors?.[type]?.[index]?.email}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <CustomTypography color={"text.primary"}>Company</CustomTypography>
            {type === "buyerInfo" ? (
              <TextField
                type="text"
                name={`${type}.company`}
                placeholder="Company name"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "whitesmoke"
                      : "background.secondary",

                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                  "& .MuiFormHelperText-root": {
                    position: "absolute",
                    top: 50,
                  },
                  "& .MuiInputBase-input": {
                    height: 15,
                  },
                }}
                value={formik.values[type]?.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors?.[type]?.company}
                helperText={formik.errors?.[type]?.company}
              />
            ) : (
              <TextField
                type="text"
                name={`${type}[${index}].company`}
                placeholder="Company name"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "whitesmoke"
                      : "background.secondary",

                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                  "& .MuiFormHelperText-root": {
                    position: "absolute",
                    top: 50,
                  },
                  "& .MuiInputBase-input": {
                    height: 15,
                  },
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[type]?.[index]?.company || ""}
                error={formik.errors?.[type]?.[index]?.company}
                helperText={formik.errors?.[type]?.[index]?.company}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <CustomTypography color={"text.primary"}>
              Phone number
            </CustomTypography>
            {type === "buyerInfo" ? (
              <TextField
                type="number"
                name={`${type}.phone`}
                placeholder="Phone number"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "whitesmoke"
                      : "background.secondary",

                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                  "& .MuiFormHelperText-root": {
                    position: "absolute",
                    top: 50,
                  },
                  "& .MuiInputBase-input": {
                    height: 15,
                  },
                }}
                value={formik.values[type]?.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors?.[type]?.phone}
                helperText={formik.errors?.[type]?.phone}
              />
            ) : (
              <TextField
                type="number"
                name={`${type}[${index}].phone`}
                placeholder="Phone number"
                sx={{
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "whitesmoke"
                      : "background.secondary",

                  "& .MuiInputBase-root": {
                    height: 50,
                  },
                  "& .MuiFormHelperText-root": {
                    position: "absolute",
                    top: 50,
                  },
                  "& .MuiInputBase-input": {
                    height: 15,
                  },
                }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[type]?.[index]?.phone || ""}
                error={formik.errors?.[type]?.[index]?.phone}
                helperText={formik.errors?.[type]?.[index]?.phone}
              />
            )}
          </Box>
        </Grid>
      </Grid>
      {/* </form> */}
    </FormControl>
  );
};

export default FormDefault;
