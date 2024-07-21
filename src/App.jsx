import './App.css';
import Search from './Components/Search';
import Header from './Components/Header';
import { useState } from 'react';
import FoodList from './Components/FoodList';
import Container from './Components/Container';
import InnerContainer from './Components/InnerContainer';
import FoodDetails from './Components/FoodDetails';

function App() {
  const [apiData, setApiData] = useState([]);
  const [foodId, setFoodId] = useState('715415');
  return (
    <>
      <Header />
      <Search apiData={apiData} setApiData={setApiData} />

      <Container>
        <InnerContainer>
          <FoodList foodId={foodId} setFoodId={setFoodId} apiData={apiData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
