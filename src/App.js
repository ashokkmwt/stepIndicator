import './App.css';
import WelcomePage from './pages/WelcomePage';
import WorkSpacePage from './pages/WordSpacePage';
import PlanningPage from './pages/PlanningPage';
import CongratsPage from './pages/CongratsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='workspace' element={<WorkSpacePage />} />
          <Route path='planning' element={<PlanningPage />} />
          <Route path='congrats' element={<CongratsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
