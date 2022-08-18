import "./App.css";
import SideBar from "./components/SideNavBarComponent";
import RPane from "./components/RPaneComponent";
import TopNav from "./components/TopNavComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <SideBar />
      <div className="container-fluid bg-secondary flex-start">
        <div className="row">
          <div className="sidebar-spacer"></div>
          <RPane />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
