import { Route, Routes, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        {/* v6 không dùng switch => Routes 🔴*/}
        <Routes>
          {/* v6 không dùng Redirect => Navigate 🔴 */}
          <Route path="/" element={<Navigate to="/welcome" />} />
          {/* v6 không dùng child component => dùng element prop 🔴*/}
          {/* v6 không dùng exact 🔴 */}
          {/* nested route cần /* để những route bên trong match */}
          <Route path="/welcome/*" element={<Welcome />}>
            {/* không cần /welcome trong path, rút ngắn hơn v5 */}
            <Route path="new-user" element={<p>Welcome,new user!</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          {/* v6 có thể tìm được path thích hợp nhất , v5 nếu define dynamic path trước thì sẽ chọn nó làm match patch 🔴*/}
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
