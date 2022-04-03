import "./App.css";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/cart" component={CartList} />
      </Switch>
    </div>
  );
}

export default App;
