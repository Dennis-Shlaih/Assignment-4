import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import CatalogPage from './pages/CatalogPage'
import DetailPage from './pages/DetailPage'
import StatusPage from './pages/StatusPage'
import NotFoundPage from './pages/NotFoundPage'



function App() {
  return (
    <Routes>
      <Route path='/' element={<CatalogPage/>} />
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/items/:id' element={<DetailPage/>}/>
      <Route path='/list/:status' element={<StatusPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  );
}
export default App
