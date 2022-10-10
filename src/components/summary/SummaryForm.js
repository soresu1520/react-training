import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Button } from "../../styles/StyledComponents";
import { PAYMENT_METHODS } from "./defaultValues";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useForm } from "react-hook-form";

const SummaryForm = ({ handlePayment, payment, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormDiv>
          <TextInput
            label="First Name"
            variant="outlined"
            margin="dense"
            {...register("firstName", { required: "This field is required" })}
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName.message : ""}
          />
          <TextInput
            label="Last Name"
            variant="outlined"
            margin="dense"
            {...register("lastName", { required: "This field is required" })}
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName.message : ""}
          />
          <TextInput
            label="Street"
            variant="outlined"
            margin="dense"
            {...register("street", { required: "This field is required" })}
            error={!!errors.street}
            helperText={errors.street ? errors.street.message : ""}
          />
          <TextInput
            label="Building Number"
            variant="outlined"
            margin="dense"
            {...register("building", { required: "This field is required" })}
            error={!!errors.building}
            helperText={errors.building ? errors.building.message : ""}
          />

          <TextInput
            label="City"
            variant="outlined"
            margin="dense"
            {...register("city", { required: "This field is required" })}
            error={!!errors.city}
            helperText={errors.city ? errors.city.message : ""}
          />

          <TextInput
            label="ZIP Code"
            variant="outlined"
            margin="dense"
            {...register("zip", {
              required: "This field is required",
              pattern: { value: /^\d\d-\d\d\d$/, message: "Invalid ZIP code" },
            })}
            error={!!errors.zip}
            helperText={errors.zip ? errors.zip.message : ""}
          />

          <TextInput
            label="E-mail"
            variant="outlined"
            margin="dense"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Invalid e-mail",
              },
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
          <TextInput
            label="Phone Number"
            variant="outlined"
            margin="dense"
            {...register("phoneNumber", {
              pattern: {
                value: /^\d{9}$/,
                message: "Invalid phone number",
              },
            })}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
          />
          <TextInputNotes
            label="Additional Information"
            variant="outlined"
            margin="dense"
            {...register("notes")}
          />
        </FormDiv>
        <PaymentTitle>Choose payment method</PaymentTitle>

        <PaymentDiv>
          <ToggleGroupStyled value={payment} id="payment" exclusive onChange={handlePayment}>
            {PAYMENT_METHODS.map(item => (
              <ToggleButton value={item.name} key={item.name} sx={{ flexBasis: "30%" }}>
                <Image src={`/assets/payments/${item.img}`} alt={item.name} />
              </ToggleButton>
            ))}
          </ToggleGroupStyled>
        </PaymentDiv>
        <ButtonDiv>
          <OrderButton>Order</OrderButton>
        </ButtonDiv>
      </form>
    </div>
  );
};

export default SummaryForm;

const FormDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 5%;
`;

const TextInput = styled(TextField)({
  flexBasis: "47.5%",
});

const TextInputNotes = styled(TextField)({
  flexBasis: "100%",
});

const PaymentTitle = styled.h3`
  color: var(--color-greyscale-600);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-heading);
`;

const PaymentDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5%;
`;

const Image = styled.img`
  width: 60%;
  height: auto;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const OrderButton = styled(Button)`
  font-size: 1.3em;
`;

const ToggleGroupStyled = styled(ToggleButtonGroup)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5%;
`;
