import { Route, Routes } from "react-router-dom";

import { TalentsPage } from "../pages/Talents";
import Create from "../pages/Talents/create";
import Edit from "../pages/Talents/edit";

export function TalentsRoute() {
  return (
    <Routes>
      <Route path="/" element={<TalentsPage />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:talentId" element={<Edit />} />
    </Routes>
  );
}
