import { useEffect, useState } from "react";
import styled from "styled-components";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { getAllFood, getCategories } from "../../server/API";
import FoodItem from "./FoodItem";
import { sortData } from "./sortData";
import {
  PageDiv,
  TitleDiv,
  PageTitle,
  PageSubtitle,
  Message,
  Button,
} from "../../styles/StyledComponents";

const FoodList = () => {
  const [unfilteredFood, setUnfilteredFood] = useState([]);
  const [food, setFood] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("Loading...");
  const [sortCriteria, setSortCriteria] = useState(localStorage.getItem("sort") || "alphabetAsc");

  useEffect(() => {
    fetchFood();
    fetchCategories();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const fetchFood = async () => {
    try {
      const response = await getAllFood();
      setFood(sortData(response.data, sortCriteria));
      setUnfilteredFood(sortData(response.data, sortCriteria));
      setMessage("");
    } catch (error) {
      console.error(error);
      setMessage("Error. Try again");
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      const sortedCategories = response.data.sort((a, b) =>
        a.categoryName.localeCompare(b.categoryName)
      );
      setCategories([{ categoryName: "All", categoryId: "c0" }, ...sortedCategories]);
    } catch (error) {
      console.error(error);
      setMessage("Error. Try again");
    }
  };

  const sortFood = e => {
    const criteria = e.target.value;
    setSortCriteria(criteria);
    localStorage.setItem("sort", criteria);
    const sortedFood = sortData(food, criteria);
    const unfilteredSortedFood = sortData(unfilteredFood, criteria);
    setFood(sortedFood);
    setUnfilteredFood(unfilteredSortedFood);
  };

  const filterFood = category => {
    if (category.categoryName === "All") {
      setFood(unfilteredFood);
    } else {
      const sortedFood = unfilteredFood.filter(item => item.categoryId === category.categoryId);
      setFood(sortedFood);
    }
  };

  return (
    <PageDiv>
      <TitleDiv>
        <div>
          <PageTitle>Order your favourite food</PageTitle>
          <PageSubtitle>Browse dishes below and add them to your cart</PageSubtitle>
        </div>
        <LocalDiningIcon
          sx={{
            color: "var(--color-dark-icon)",
            fontSize: 60,
            marginLeft: "0.5em",
          }}
        ></LocalDiningIcon>
      </TitleDiv>

      <CategoryDiv>
        {!message ? (
          categories.map((category, i) => (
            <CategoryButton onClick={() => filterFood(category)} key={i}>
              {category.categoryName}
            </CategoryButton>
          ))
        ) : (
          <div></div>
        )}
      </CategoryDiv>

      <DivSelect>
        <Label htmlFor="sort">Sort:</Label>
        <Select name="sort" id="sort" onChange={sortFood} value={sortCriteria}>
          <option value="alphabetAsc">Alphabetically (A-Z)</option>
          <option value="alphabetDesc">Alphabetically (Z-A)</option>
          <option value="priceAsc">Price (low to high)</option>
          <option value="priceDesc">Price (high to low)</option>
        </Select>
      </DivSelect>

      <DivList>
        {message ? (
          <Message>{message}</Message>
        ) : (
          food.map(foodItem => <FoodItem foodItem={foodItem} key={foodItem.id}></FoodItem>)
        )}
      </DivList>
    </PageDiv>
  );
};

export default FoodList;

const CategoryDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2% 2%;
`;

const CategoryButton = styled(Button)`
  background: var(--color-brand-20);
  color: var(--color-brand-500);
  border: none;
`;

const DivSelect = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5em;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: var(--color-greyscale-600);
  font-weight: 400;
`;

const Select = styled.select`
  font-size: 0.9rem;
  color: var(--color-greyscale-600);
  font-weight: 400;
  font-family: inherit;
  border: none;
  outline: none;

  option {
    text-align: right;
  }
`;

const DivList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  align-self: flex-start;
  gap: 2% 2%;
  padding-right: 0;
`;
