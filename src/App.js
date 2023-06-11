import './App.css';
import React from 'react';
import Cards from './components/Cards/Cards';
//import Slaider from './components/Slaider/Slaider';
import Card from './components/Card/Card';
import Home from './components/Home/Home';
import Page1 from './components/Page1/Page1';
import Page2 from './components/Page2/Page2';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/cards' element={<Cards />} />
      </Routes>
      <Home />
      <Page1 />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cards/:id' element={<Card />} />
      </Routes>
      <Page2 /> 
      <Footer />
  
    </>
  )
};
export default App;

 /*{const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      }); 
    }, []);


  return (
    <div className="wrapper">
      <Header />
      <Home />
      
      
      <div className='hooter'>
        <h3>Free shopping from 100$</h3>
        <p>Place an order and get a gift!</p>
      </div>
      
    
      <div className='page1'>
        <div>All models</div>
        <div>
          <Search />
          <Filter />
        </div> 
        /<div className='cards'>
          {items.map((obj) => (
            <Card
              title = {obj.name}
              description = {obj.description}
              price = {obj.price}
              image = {obj.image}
              onClick = {() => console.log(obj)}
            /> 
          ))} 
        </div> 
      </div>





    </div>
    

    
  );
};

export default App;*/
