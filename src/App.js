
import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import BottomBar from "./components/BottomBar";
import Dairy from "./components/Dairy";
import Department from "./components/Department";
import DiscountWeek from "./components/DiscountWeek";
import FooterFD from "./components/FooterFD";
import Fresh from "./components/Fresh";
import FreshFood from "./components/FreshFood";
import HeaderFD from "./components/HeaderFD";
import Offers from "./components/Offers";
import ProductMC from "./components/ProductMC";

function App() {
  return (
    <div>
      <HeaderFD />
      <Banner />
      <Offers />
      <ProductMC />
      <BestSeller />
      <DiscountWeek />
      <FreshFood />
      <Fresh />
      <Dairy />
      <Department />
      <FooterFD />
      <BottomBar />
    </div>
  );
}

export default App;
