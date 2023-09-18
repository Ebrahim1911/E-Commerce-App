import NavPar from "./component/NavPar";
import ProductLsit from "./component/ProductLsit";
import Slider from "./component/Slider";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./component/ProductDetails";
function App() {
  return (
    <div className="App">
      <NavPar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductLsit />
            </>
          }
        ></Route>
        <Route path="product/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}
export default App;
