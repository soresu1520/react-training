import { Fragment } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "styled-components";

const OrderRow = ({ order }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" }, cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {order.id}
        </TableCell>
        <TableCell>
          {order.firstName} {order.lastName}
        </TableCell>
        <TableCell>{order.price.toFixed(2)} $</TableCell>
        <TableCell>{order.date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <RowDiv>
                <RowHalfDiv>
                  <DetailsTitle>Address: </DetailsTitle>
                  <DetailsText>
                    {order.building} {order.street} Street
                  </DetailsText>
                  <DetailsText>
                    {order.zip} {order.city}
                  </DetailsText>
                  <TextDiv>
                    <DetailsTitle>E-mail: </DetailsTitle>
                    <DetailsText>{order.email}</DetailsText>
                  </TextDiv>
                  <TextDiv>
                    <DetailsTitle>Phone number: </DetailsTitle>
                    <DetailsText>{order.phoneNumber}</DetailsText>
                  </TextDiv>
                  <TextDiv>
                    <DetailsTitle>Payment method: </DetailsTitle>
                    <DetailsText>{order.payment}</DetailsText>
                  </TextDiv>
                </RowHalfDiv>

                <RowHalfDiv>
                  <DetailsTitle>Items:</DetailsTitle>
                  {order.items.map(item => (
                    <DetailsText key={item.name}>
                      {item.name} x{item.quantity}
                    </DetailsText>
                  ))}
                </RowHalfDiv>
              </RowDiv>

              <TextDiv>
                <DetailsTitle>Notes: </DetailsTitle>
                <DetailsText>{order.notes}</DetailsText>
              </TextDiv>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default OrderRow;

const RowDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const RowHalfDiv = styled.div`
  flex-basis: 50%;
`;

const DetailsTitle = styled.h4`
  color: var(--dark-icon);
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-heading);
  margin: 0;
`;

const DetailsText = styled.p`
  color: var(--color-greyscale-600);
  font-size: 1em;
  margin: 0;
`;

const TextDiv = styled.div`
  display: flex;
  gap: 0.5em;
  margin-top: 0.2em;
`;
