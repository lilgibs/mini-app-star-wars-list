import FilmsView from "@pages/films/films-view";
import HomeView from "@pages/home/home-view";
import PeopleView from "@pages/people/people-view";
import PlanetsView from "@pages/planets/planets-view";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/people" element={<PeopleView />} />
        <Route path="/planets" element={<PlanetsView />} />
        <Route path="/films" element={<FilmsView />} />

      </Routes>
    </Router >
  );
};

export default App;
