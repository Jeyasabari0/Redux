import { Provider } from 'react-redux';
import './App.css';
import ProductContainer from './Components/ProductContainer';
import Store from './Redux/Product/Store';
import Product from './Components/Product';
import PayloadProduct from './Components/PayloadProduct';


function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        {/* <ProductContainer />
        <Product /> */}
        <PayloadProduct />
      </div>
    </Provider>
  );
}
export default App;
