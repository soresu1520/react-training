import styled from "styled-components";
import logo from "./assets/icon.png";
import ReorderIcon from "@mui/icons-material/Reorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <DivHeader>
      <Header>
        <DivImage>
          <img src={logo} alt="logo" />
        </DivImage>
        <Title>Click and Eat</Title>
        <DivIcon>
          <ReorderIcon
            sx={{
              color: "var(--color-dark-icon)",
              fontSize: 40,
              marginLeft: "0.25em",
              marginRight: "0.25em",
            }}
          ></ReorderIcon>
          <StyledBadge badgeContent={1} max={99}>
            <ShoppingCartOutlinedIcon
              sx={{
                color: "var(--color-dark-icon)",
                fontSize: 40,
                marginLeft: "0.25em",
                marginRight: "0.25em",
              }}
            ></ShoppingCartOutlinedIcon>
          </StyledBadge>
        </DivIcon>
      </Header>
    </DivHeader>
  );
};

export default Navbar;

const DivHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
  background-color: var(--color-white);
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  flex-flow: row wrap;
  margin-left: 3em;
  margin-right: 3em;
`;

const DivImage = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: var(--dark-icon);
  font-size: 2.25rem;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
  flex: 1;
`;

const DivIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-flow: row wrap;
  flex: 1;
`;

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    color: "var(--color-dark-icon)",
    backgroundColor: "var(--color-brand-300)",
  },
});
