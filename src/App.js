import { Route, Switch, Redirect } from "react-router-dom"; //🔴
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          {/* dùng Redirect để điều khiển browser truy cập mặc định khi không có path */}
          {/* vd: ourdomain.com/ => ourdomain.com/welcome */}
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

//ourdomain.com/welcome => Welcome Component
//ourdomain.com/products => Products Component
//ourdomain.com/product-detail/a-book
// component children bên trong Route chỉ display khi truy cập path

// exact => tell the browser leave this match until it found the exact match
