import { useEffect, useState } from "react";
import "../App.css";
import styled from "styled-components";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { getFood, getAllFood } from "../server/API";
import FoodItem from "./FoodItem";

const FoodList = () => {
  const [food, setFood] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("Loading...");
  const [criteria, setCriteria] = useState("?_sort=name&_order=asc");
  const [category, setCategory] = useState("");

  useEffect(() => {
    document.title = "Click and Eat";
    fetchFood(`${criteria}&${category}`);
  }, [criteria, category]);

  useEffect(() => {
    fetchCategories();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const fetchFood = async url => {
    try {
      const response = await getFood(url);
      setFood(response.data);
      setMessage("");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Error. Try again");
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getAllFood();
      getCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Error. Try again");
    }
  };

  const getCategories = data => {
    const categoriesArray = [];
    data.forEach(item => {
      if (!categoriesArray.includes(item.category)) {
        categoriesArray.push(item.category);
      }
    });
    categoriesArray.sort();
    setCategories(["No Category", ...categoriesArray]);
    console.log(categoriesArray);
  };

  const sortFood = e => {
    const crit = e.target.value;
    console.log(crit);
    setCriteria(crit);
  };

  const sortCategory = category => {
    if (category === "No Category") {
      setCategory("");
    } else {
      console.log(category);
      setCategory(`category=${category}`);
    }
  };

  return (
    <FoodlistDiv>
      <TitleDiv>
        <div>
          <Title>Order your favourite food</Title>
          <Subtitle>Browse dishes below and add them to your cart</Subtitle>
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
            <Button key={i} onClick={() => sortCategory(category)}>
              {category}
            </Button>
          ))
        ) : (
          <div></div>
        )}
      </CategoryDiv>

      <DivSelect>
        <Label htmlFor="sort">Sort:</Label>
        <Select name="sort" id="sort" onChange={sortFood}>
          <option value="?_sort=name&_order=asc">Alphabetically (A-Z)</option>
          <option value="?_sort=name&_order=desc">Alphabetically (Z-A)</option>
          <option value="?_sort=price&_order=asc">Price (low to high)</option>
          <option value="?_sort=price&_order=desc">Price (high to low)</option>
        </Select>
      </DivSelect>

      <DivList>
        {message ? (
          <Message>{message}</Message>
        ) : (
          food.map(foodItem => <FoodItem foodItem={foodItem} key={foodItem.id}></FoodItem>)
        )}
      </DivList>
    </FoodlistDiv>
  );
};

export default FoodList;

const FoodlistDiv = styled.div`
  margin: 0 5rem;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  align-items: center;
`;

const Title = styled.h2`
  color: var(--dark-icon);
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 0.15em;
  margin-top: var(--margin-to-navbar);
`;

const Subtitle = styled.h3`
  color: var(--color-greyscale-600);
  font-size: 1.15rem;
  font-weight: 500;
  margin-top: 0.15rem;
`;

const CategoryDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 2% 2%;
`;

const Button = styled.button`
  background: var(--color-brand-20);
  color: var(--color-brand-500);
  border: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.6em;
  margin-top: 0.75em;
  margin-bottom: 0.75em;
  cursor: pointer;
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
  justify-content: space-between;
  align-content: center;
  align-self: flex-start;
  gap: 2% 2%;
`;

const Message = styled.h2`
  text-align: center;
  flex-basis: 100%;
  color: var(--dark-icon);
  font-size: 1.7rem;
  font-weight: 500;
`;
