import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const FoodModal = ({ onClose, open, food }) => {
  return (
    <Dialog onClose={onClose} open={open} maxWidth="sm" fullWidth>
      <StyledDialogTitle>
        {food.name}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </StyledDialogTitle>
      <DialogContent>
        <ModalSubtitle>Allergens</ModalSubtitle>
        <AllergensDiv>
          {food.allergens.map(allergen => (
            <Allergen key={allergen}>{allergen}</Allergen>
          ))}
        </AllergensDiv>
        <ModalSubtitle>Description</ModalSubtitle>
        <StyledP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </StyledP>
      </DialogContent>
    </Dialog>
  );
};

export default FoodModal;

const StyledDialogTitle = styled(DialogTitle)`
  color: var(--color-dark-icon);
  font-size: var(--font-size-h3);
`;

const ModalSubtitle = styled.h4`
  font-size: var(--font-size-h4);
  color: var(--color-dark-icon);
  font-weight: var(--font-weight-heading-light);
  margin-top: 0;
  margin-bottom: 0.2em;
`;

const StyledP = styled.p`
  font-size: 0.9rem;
  color: var(--color-dark-icon);
  font-weight: 200;
  text-align: justify;
  margin: 0;
`;

const AllergensDiv = styled.div`
  display: flex;
  flex-direction: column wrap;
  justify-content: flex-start;
  gap: 4%;
`;

const Allergen = styled.h4`
  font-size: var(--font-size-h4);
  color: var(--color-brand-500);
  font-weight: var(--font-weight-heading-light);
  margin-top: 0;
`;
