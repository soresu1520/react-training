import { useEffect, useState } from "react";
import styled from "styled-components";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FoodItem from "./FoodItem";
import { sortData } from "../../utils/sort/index.js";
import { fetchAllFood, fetchCategories } from "../../server/fetch";
import {
  PageDiv,
  TitleDiv,
  PageTitle,
  PageSubtitle,
  Message,
  SecondaryButton,
  Button,
} from "../../styles/StyledComponents";

const FoodList = () => {
  const ITEMS_ON_PAGE = 10;
  const [unfilteredFood, setUnfilteredFood] = useState([]);
  const [food, setFood] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("Loading...");
  const [sortCriteria, setSortCriteria] = useState(localStorage.getItem("sort") || "alphabetAsc");
  const [loadItems, setLoadItems] = useState(ITEMS_ON_PAGE);

  useEffect(() => {
    const fetchFood = async () => {
      const data = await fetchAllFood(sortCriteria);
      setFood(data.food);
      setUnfilteredFood(data.food);
      setMessage(data.message);
    };
    fetchFood();

    const fetchCategory = async () => {
      const data = await fetchCategories();
      setCategories([{ categoryName: "All", categoryId: "c0" }, ...data]);
    };
    fetchCategory();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

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
      <ResponsiveTitleDiv>
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
      </ResponsiveTitleDiv>

      <CategoryDiv>
        {!message &&
          categories.map((category, i) => (
            <SecondaryButton data-testid="category" onClick={() => filterFood(category)} key={i}>
              {category.categoryName}
            </SecondaryButton>
          ))}
      </CategoryDiv>

      <DivSelect>
        <Label htmlFor="sort">Sort:</Label>
        <Select data-testid="sort" name="sort" id="sort" onChange={sortFood} value={sortCriteria}>
          <option value="alphabetAsc">Alphabetically (A-Z)</option>
          <option value="alphabetDesc">Alphabetically (Z-A)</option>
          <option value="priceAsc">Price (low to high)</option>
          <option value="priceDesc">Price (high to low)</option>
        </Select>
      </DivSelect>

      <DivList data-testid="food-list">
        {message && <Message>{message}</Message>}

        {!message &&
          food
            .slice(0, loadItems)
            .map(foodItem => <FoodItem foodItem={foodItem} key={foodItem.id}></FoodItem>)}
      </DivList>

      <DivButton>
        {loadItems < food.length && (
          <Button
            data-testid="load-more"
            onClick={() => setLoadItems(prevState => prevState + ITEMS_ON_PAGE)}
          >
            Load more
          </Button>
        )}
      </DivButton>
    </PageDiv>
  );
};

export default FoodList;

const ResponsiveTitleDiv = styled(TitleDiv)`
  @media (max-width: 780px) {
    flex-flow: column wrap;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 610px) {
    flex-flow: column wrap;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 496px) {
    flex-flow: column wrap;
    align-items: center;
    text-align: center;
  }
`;

const CategoryDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2% 2%;
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

  @media (max-width: 850px) {
    gap: 2% 2%;
  }

  @media (max-width: 780px) {
    gap: 2% 3%;
  }

  @media (max-width: 610px) {
    gap: 2% 5%;
  }

  @media (max-width: 496px) {
    gap: 2% 2%;
  }
`;

const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;
