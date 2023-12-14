import { BrowserRouter, Route, Routes } from "react-router-dom";

import Celebrity from "./Components/pages/Celebrity";
import Header from "./Components/Header";
import Home from "./Components/pages/Home";
import Login from "./Components/pages/Login";
import MovieDetail from "./Components/MovieDetail";
import Movies from "./Components/pages/Movies";
import NotFound from "./Components/pages/NotFound";
import TVs from "./Components/pages/TVs";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TVs />} />
          <Route path="/celebrity" element={<Celebrity />} />
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
