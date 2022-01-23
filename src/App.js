import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./chat/User";
import Admin from "./chat/admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
