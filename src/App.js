import "./App.css";
import SideBar from "./components/SideNavBarComponent";
import RPane from "./components/RPaneComponent";
import TopNav from "./components/TopNavComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <TopNav />
      <div className="container-fluid bg-secondary flex-start">
        <div className="row">
          <RPane />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
