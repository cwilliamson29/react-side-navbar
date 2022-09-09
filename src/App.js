import "./App.css";
import SideBar from "./components/menu/SideNavBarComponent";
import TopNav from "./components/menu/TopNavComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Category from "./components/Category";

function App() {
      return (
            <BrowserRouter>
            
              <TopNav />
              <SideBar />

              <Routes>
                <Route path="/react-side-navbar/" element={<Dashboard />} />
                <Route path="/react-side-navbar/dashboard" element={<Dashboard />} />
                <Route path="/react-side-navbar/categories" element={<Category />} />
              </Routes>
            </BrowserRouter>
      );
}

export default App;