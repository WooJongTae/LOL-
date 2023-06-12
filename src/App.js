import "./App.css";
import Layout from "./Layout/Layout";
import MobileLayout from "./Layout/MobileLayout";
import { useMediaQuery } from "react-responsive";
function App() {
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });
  const isDesktopOrLaptop2 = useMediaQuery({ query: "(min-width:768px)" });
  return (
    <div>
      {isMobile && <MobileLayout />}
      {isDesktopOrLaptop2 && <Layout />}
    </div>
  );
}

export default App;
