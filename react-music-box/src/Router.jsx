import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './pages/Index';
import Musicas from './pages/Musicas';
import Adicionar from './pages/Adicionar';
import NotFound from './pages/NotFound';

function Router() {
  return (
    <BrowserRouter>                                        
      <Routes>       
				<Route path={"/"} element={<Index />} />             
				<Route path="/musicas" element={<Musicas />} />    
				<Route path="/adicionar" element={<Adicionar />} />    
				<Route path="*" element={<NotFound />} />    
      </Routes>
    </BrowserRouter>
  );
}

export default Router;