import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Categories } from "./pages/Categories";
import CategoryCreate from "./pages/Categories/create";
import CategoryEdit from "./pages/Categories/edit";
import ComponentNavbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
    <ComponentNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/create" element={<CategoryCreate />} />
          <Route path="/categories/edit/:id" element={<CategoryEdit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
