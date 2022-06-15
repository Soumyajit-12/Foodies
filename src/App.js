import { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';

function App() {
  const { products } = data;
  const [ cartItems, setCartItems ] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1 } : x ))
    }
    else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
    else{
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1 } : x ))
    }
  }
  const onDelete = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  }

  return (
    <div className="App">
      <Header cartItems={cartItems}></Header>
      <div className="container">
        <Main products={products} onAdd={onAdd} ></Main>
        <Cart onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} onDelete={onDelete} ></Cart>
      </div>
    </div>
  );
}

export default App;
