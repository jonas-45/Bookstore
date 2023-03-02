import { Routes, Route } from "react-router-dom";
import Root from "./components/Root";
import Books from "./routes/Books";
import Categories from "./routes/Categories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />} >
        <Route path="books" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
