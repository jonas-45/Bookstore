import { Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import Books from "./routes/Books";
import Categories from "./routes/Categories";
import NotMatch from "./routes/NotMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} >
        <Route index element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
