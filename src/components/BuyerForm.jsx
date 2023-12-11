import FormDefault from "./Form";
import { Typography } from "@mui/material";

const BuyerForm = () => {
  return (
    <>
      <Typography
        style={{
          fontFamily: "Poppins",
          fontWeight: 800,
        }}
        color={"text.primary"}
        mb={3}
      >
        Buyer&apos;s information
      </Typography>
      <FormDefault type={"buyerInfo"} />
    </>
  );
};

export default BuyerForm;
