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
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
