import "./App.css";
import SideNavbar from "./components/SideNavBarComponent";
import RPane from "./components/RPaneComponent";
import TopNav from "./components/TopNavComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid bg-secondary flex-start app-height">
        <div className="row">
          <TopNav />
          <SideNavbar />
          <RPane />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
