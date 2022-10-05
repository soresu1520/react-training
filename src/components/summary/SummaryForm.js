import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Button } from "../../styles/StyledComponents";
import { PAYMENT_METHODS } from "./defaultValues";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const SummaryForm = ({ handleChange, handleSubmit, form, handlePayment }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormDiv>
          <TextInput
            required
            id="firstName"
            label="First Name"
            variant="outlined"
            margin="dense"
            value={form.firstName}
            onChange={handleChange}
          />
          <TextInput
            required
            id="lastName"
            label="Last Name"
            variant="outlined"
            margin="dense"
            onChange={handleChange}
            value={form.lastName}
          />
          <TextInput
            required
            id="street"
            label="Street"
            variant="outlined"
            margin="dense"
            onChange={handleChange}
            value={form.street}
          />
          <TextInput
            required
            id="building"
            label="Building Number"
            variant="outlined"
            margin="dense"
            onChange={handleChange}
            value={form.building}
          />
          <TextInput
            required
            id="city"
            label="City"
            variant="outlined"
            margin="dense"
            onChange={handleChange}
            value={form.city}
          />
          <TextInput
            required
            id="zip"
            label="ZIP Code"
            variant="outlined"
            margin="dense"
            onChange={handleChange}
            value={form.zip}
          />
          <TextInput
            required
            id="email"
            label="E-mail"
            variant="outlined"
            margin="dense"
            onChange={handleChange}
            value={form.email}
          />
          <TextInput
            id="phoneNumber"
            label="Phone Number"
            variant="outlined"
            margin="dense"
            onChange={handleChange}
            value={form.number}
          />
          <TextInputNotes
            id="notes"
            label="Additional Information"
            variant="outlined"
            margin="dense"
            onChange={handleChange}
            value={form.notes}
          />
        </FormDiv>
        <PaymentTitle>Choose payment method</PaymentTitle>
        <PaymentDiv>
          <ToggleGroupStyled value={form.payment} id="payment" exclusive onChange={handlePayment}>
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
