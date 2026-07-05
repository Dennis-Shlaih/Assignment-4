import { Routes, Route } from 'react-router-dom';

import { useUiStore } from "./store/useUiStore";

import AboutPage from './pages/AboutPage';
import CatalogPage from './pages/CatalogPage';
import DetailPage from './pages/DetailPage';
import StatusPage from './pages/StatusPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';

function App() {
  const theme = useUiStore((state) => state.theme);
  return (
    <div 
    className={
        theme === "dark"
            ? "min-h-screen bg-gray-900 text-white"
            : "min-h-screen bg-white text-black"
    }
    >
      <NavBar/>
      <Routes>
        <Route path='/' element={<CatalogPage/>} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/items/:id' element={<DetailPage/>}/>
        <Route path='/list/:status' element={<StatusPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </div>

    
  );
}
export default App
